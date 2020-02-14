const router = require("express").Router();

const {
  generateJwtToken,
  isAuthenticated
} = require("../controllers/jwt.controller");

router.get("/generatejwttoken", generateJwtToken);

module.exports = router;
