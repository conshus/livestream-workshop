const { TOKBOX_API_KEY, TOKBOX_SECRET, VONAGE_APP_ID, VONAGE_PRIVATE_KEY64 } = process.env;
const OpenTok = require("opentok");
import { Auth } from "@vonage/auth";
import { Client, AuthenticationType } from "@vonage/server-client";

exports.handler = async (event, context) => {
    const privateKey = Buffer.from(VONAGE_PRIVATE_KEY64, 'base64');
    const applicationId = VONAGE_APP_ID; 
    const credentials = {
        applicationId,
        privateKey,
    };

    // Initialize OpenTok
    const apiKey = TOKBOX_API_KEY;
    const apiSecret = TOKBOX_SECRET;
    const opentok = new OpenTok(apiKey, apiSecret);

    // initialize client to make Conversation API calls
    const vonageClient = new Client (new Auth(credentials));
    vonageClient.authType = AuthenticationType.JWT

    async function createSession(){
        return new Promise( (resolve, reject)=>{
            opentok.createSession({mediaMode:"routed"}, (error, session)=>{
                if(error){
                    console.error('error creating session', error);
                    reject({error});
                } else {
                    resolve(session);
                }
            });
        });
    }

    try {
        const session = await createSession();
        const conversation = await vonageClient.sendPostRequest('https://api.nexmo.com/v0.3/conversations',{});
        return {
            statusCode: 200,
            body: JSON.stringify({apiKey, applicationId, sessionId: session.sessionId, conversationId: conversation.data.id}),
        };    
    } catch(error) {
        console.error("Error creating session: ", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'createSession error:' + error }),
        };
    }
};