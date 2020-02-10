const EmailService = require("../services/email");

//for production: Sendgrid, MailGun

exports.SendEmail = async (req, res) => {
  console.log("Called Send Email");
  var result = EmailService.sendEmail(req.body);
  //TODO returned result gonna be fixed
  res.status(200).json({
    message: "--",
    data: result
  });
  // if (result) {
  //   res.status(500).json({
  //     message: "error",
  //     data: "hata"
  //   });
  // } else {
  //   res.status(200).json({
  //     message: "success",
  //     data: data
  //   });
  // }
};
