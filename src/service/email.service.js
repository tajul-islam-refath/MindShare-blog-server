var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: "iowwrpfbnhryrgsx",
  },
});

exports.sendMail = async (email, subject, body) => {
  let mailOptions = {
    from: `${process.env.EMAIL}`,
    to: email,
    subject: subject,
    text: body,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(info.response);
  } catch (err) {
    console.log(err.message);
    throw new Error("Email send fail", err.message);
  }
};
