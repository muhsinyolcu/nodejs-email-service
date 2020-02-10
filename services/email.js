const fs = require("fs"),
  path = require("path"),
  nodemailer = require("nodemailer"),
  Handlebars = require("handlebars");

exports.sendEmail = async model => {
  //TODO model validations
  // TODO templates might be in Db

  // Open template file
  var source = fs.readFileSync(
    path.join(__dirname, "../views", `${model.templateType}.hbs`),
    "utf8"
  );

  // Create email generator
  var template = Handlebars.compile(source);

  var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  //TODO mail attachements

  let mailOptions = {
    from: `<${process.env.EMAIL_USERNAME}>`,
    to: model.email,
    cc: model.cc,
    bcc: model.bcc,
    subject: model.subject,
    // attachments: [
    //   {
    //     filename: "sth.png",
    //     path: "./folder"
    //   }
    // ],
    html: template(model)
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log(("in err: ", err));
      return err;
    } else {
      return "Success";
    }
  });
};
