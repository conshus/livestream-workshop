# Getting Started

## 1. Fork this repo.

https://github.com/conshus/livestream-workshop/fork

## 2. Log in / Sign Up at Netlify

https://www.netlify.com/

## 3. Import your forked repository into Netlify

https://app.netlify.com/start

## 4. Copy and Paste Environment Variables

```
ADMIN_PASSWORD=
GITHUB_PAT=
GUEST_PASSWORD=
HOST_PASSWORD=
NETLIFY_PAT=
TOKBOX_API_KEY=
TOKBOX_SECRET=
VONAGE_APP_ID=
VONAGE_PRIVATE_KEY64=
```

Copy the above and paste into the Netlify dashboard (in your new site's section) under `Site settings` -> `Environment variables`. 

## 5. Fill out Environment Variables

<details>
    <summary>ADMIN_PASSWORD</summary>
    Set a password so you can log into the Admin dashbord at the `/admin` route.
</details>

<details>
    <summary>GITHUB_PAT</summary>
    Create your GitHub Personal Access Token here: https://github.com/settings/tokens
</details>

<details>
    <summary>GUEST_PASSWORD</summary>
    Set a password so that a Guest can join the live stream at the `/guest` route.
</details>

<details>
    <summary>HOST_PASSWORD</summary>
    Set a password so for the Host to direct the live stream at the `/host` route.
</details>

<details>
    <summary>NETLIFY_PAT</summary>
    Create your Netlify Personal Acess Token here: https://app.netlify.com/user/applications#personal-access-tokens
</details>

<details>
    <summary>TOKBOX_API_KEY & TOKBOX_SECRET</summary>
    Log in / Sign Up at TokBox Dashboard https://tokbox.com/account/ and create an Application.
</details>

<details>
    <summary>VONAGE_APP_ID & VONAGE_PRIVATE_KEY64</summary>
    Log in / Sign Up at Vonage Dashboard https://vonage.dev/3JnD8q6 and create an Application.
</details>
