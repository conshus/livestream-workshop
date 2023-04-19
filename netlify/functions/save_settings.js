const { GITHUB_PAT, NETLIFY_PAT, SITE_ID } = process.env;
import fetch from 'node-fetch';
import { Octokit } from "@octokit/core";
const octokit = new Octokit({ auth: GITHUB_PAT });

exports.handler = async (event, context) => {

    // Only allow POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const userResponse = await fetch('https://api.netlify.com/api/v1/user',{
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + NETLIFY_PAT
        },
    });
    const data = await userResponse.json();

    const siteResponse = await fetch(`https://api.netlify.com/api/v1/sites/${SITE_ID}`,{
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + NETLIFY_PAT
        },
    });

    const siteData = await siteResponse.json();
    const githubRepo = siteData.build_settings.repo_path.split(`${data.slug}/`)[1];


    // Authorized
    const base64newSettings = Buffer.from(event.body).toString('base64');
    const originalFile = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: data.slug,
        repo: githubRepo,
        path: 'site-settings.json',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    const originalFileSHA = originalFile.data.sha;

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: data.slug,
        repo: githubRepo,
        path: 'site-settings.json',
        message: `updates settings - ${Date.now()}`,
        committer: {
            name: "updated from admin dashboard",
            email: data.email
        },
        content: base64newSettings,
        sha: originalFileSHA,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow from anywhere 
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Methods': '*', 
        },
        body: JSON.stringify({data,originalFile}),
    };    
}