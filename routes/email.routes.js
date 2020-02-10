const router = require("express").Router();

var { SendEmail } = require("../controllers/email.controller");

router.post("/email/v1/sendMail", SendEmail);

module.exports = router;
