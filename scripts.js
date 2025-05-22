
function sendHook(messageS) {
const webhookURL = "https://discord.com/api/webhooks/1374977267654066176/vHkDdpU-sf5WscpuZHfH7VYeXX5BxqjGYTtfToyVg8Aosg12NErBwFHGmwcFgpPue93R";

const message = messageS;

const payload = {
    content: message
};

fetch(webhookURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
})
.then(response => {
    if (response.ok) {
        console.log("Message sent successfully.");
    } else {
        console.error("Failed to send message. Status:", response.status);
    }
})
.catch(error => {
    console.error("Error:", error);
});
}