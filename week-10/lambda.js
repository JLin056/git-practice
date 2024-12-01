import https from "https";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1312624591381729310/dBBW7gJVW4wfQ9Ue4EBpfz2ufTTASoFBFuEp8yvlBwef_HMOT8kWE2gfVU1OvFv08ZqA"; 

export const handler = async (event) => {
    for (const record of event.Records) {
        const snsMessage = record.Sns.Message;

        const discordPayload = JSON.stringify({
            content: `Alarm Triggered: ${snsMessage}`
        });

        await sendToDiscord(discordPayload);
    }

    return {
        statusCode: 200,
        body: JSON.stringify("Notification sent to Discord successfully!")
    };
};

const sendToDiscord = (payload) => {
    return new Promise((resolve, reject) => {
        const url = new URL(DISCORD_WEBHOOK_URL);

        const options = {
            hostname: url.hostname,
            push: url.pathname + url.search,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(payload),
            },
        };
        
        const req = https.request(options, (res) => {
            if (res.statusCode === 204) {
                resolve();
            } else {
                reject(new Error(`Discord Webhook Error: ${res.statusCode}`));
            }
        });

        req.on("error", (error) => {
            reject(error);
        });

        req.write(payload);
        req.end();
    });
};