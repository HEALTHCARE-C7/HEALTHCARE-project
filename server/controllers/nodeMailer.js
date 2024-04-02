const nodemailer = require("nodemailer");
// Import NodeMailer (after npm install)


async function main(to, subject, html) {
    // Async function enables allows handling of promises with await

    // First, define send settings by creating a new transporter:
   const transporter = nodemailer.createTransport({
    service: "gmail", // Mail service provider
        host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
        port: 465, // Port for SMTP (usually 465)
        secure: true, // Usually true if connecting to port 465
        auth: {
            user: "brahimbensalah17@gmail.com", // Your email address
            pass: "rerg tjvs hbwqmjrl", // Password (for gmail, your app password)
            // ⚠️ For better security, use environment variables set on the server for these values when deploying
        },
    });

    // Define and send message inside transporter.sendEmail() and await info about send from promise:
    const info = await transporter.sendMail({
        from: {
            name: "iheb",
            address: "brahimbensalah17@gmail.com",
        },
        to: ["ihabghdifi@gmail.com"],
        subject: "subject",
        text: "hello",
        html: "<b>html</b>",
    });

    console.log(info.messageId); // Random ID generated after successful send (optional)
}



const sendMail = async (req, res) => {
    try {
        const { to, subject, html } = req.body;
        await main(to, subject, html);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email failed to send" });
    }
};
module.exports = {
    sendMail
};
// main()
// .catch(err => console.log(err));
