const Slack = require('slack-node');

const webhookUri = process.env.SLACK_URI;
let slack = new Slack();
slack.setWebhook(webhookUri);

exports.postmessage = (req, res) => {
    const {
        source,
        email,
        subject,
        message
    } = req.body
    slack.webhook({
        channel: "#coderlust",
        username: "coderlust",
        text: `Source: ${source} Email: ${email} Subject: ${subject} Message: ${message}`
    }, (err, response) => {
        if (!err) {
            return res.json({
                success: true
            })
        }
        console.log(response);
        return res.json({
            success: false
        })
    });
};
