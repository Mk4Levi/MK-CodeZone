const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
        // creating transporter to send mail
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER, // the mail using which we will send emails
                    pass: process.env.MAIL_PASS,
                }
            })


            let info = await transporter.sendMail({
                from: 'CodeUp - By Kamna',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;