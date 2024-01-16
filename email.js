"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "hingmang75@gmail.com",
    pass: "qcvkngotsquolegl",
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log(error.respnse);
  } else {
    console.log("Server is ready to take our messages");
  }
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <itsmedaddy@gmail.com>', // sender address
    to: "hingmang75@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<p>Hello world?</p><img src="cid:unique@nodemailer.com"/>`,
    attachments: [
      {
        filename: "bg.png",
        path: "/Users/rahulkumarmandal/Downloads/WORK/PORTFOLIO/bg.png",
        cid: "unique@nodemailer.com",
      },
      {
        filename: "resume.pdf",
        path: "/Users/rahulkumarmandal/Downloads/WORK/PORTFOLIO/resume.pdf",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
}
main().catch(console.error);
