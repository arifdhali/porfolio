const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_APP_GMAIL,
        pass: process.env.EMAIL_APP_KEY
    }

});


class Email_ArrangeData {

    async  #prepareMailContent(content) {
        const { to, subject, text, html } = content;
        try {
            let info = await transporter.sendMail({
                from: process.env.EMAIL_APP_GMAIL,
                to: to,
                subject: subject,
                text: text,
                html: html,
            });

            return info;
        } catch (error) {
            console.log(`Error on prepare mail content: ${error}`);
        }
    }

    //  SEND TO #prepareMailContent
    async sendMail(content) {
        return await this.#prepareMailContent(content);

    }
}




module.exports = Email_ArrangeData