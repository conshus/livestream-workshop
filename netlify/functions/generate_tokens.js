const { TOKBOX_API_KEY, TOKBOX_SECRET } = process.env;
const OpenTok = require("opentok");

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
    }

    // Initialize OpenTok
    const apiKey = TOKBOX_API_KEY;
    const apiSecret = TOKBOX_SECRET;
    const opentok = new OpenTok(apiKey, apiSecret);    
    const params = JSON.parse(event.body);
    const sessionId = params.sessionId;
    const role = params.role.toLowerCase();

    try {
        // generate token
        const videoToken = opentok.generateToken(sessionId);

        return {
            statusCode: 200,
            body: JSON.stringify({videoToken}),
        };
    
    } catch(error) {
        console.error("Error generating tokens: ", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'generateTokens error:' + error }),
        };
    }
};