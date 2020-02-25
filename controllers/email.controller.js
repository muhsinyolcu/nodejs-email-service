const EmailService = require("../services/email");

//for production: Sendgrid, MailGun

exports.SendEmail = async (req, res) => {
  var result = await EmailService.sendEmail(req.body);
  //TODO returned result gonna be fixed
  if (result === "Ok") {
    res.status(200).json({
      message: "Success",
      data: result
    });
  } else {
    res.status(500).json({
      message: "Error",
      data: result
    });
  }
};
