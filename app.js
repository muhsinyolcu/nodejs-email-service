require("dotenv").config();

const PORT = process.env.PORT || 5000;

var express = require("express");
var app = express();
var cors = require("cors");
const IndexRoutes = require("./routes/index.routes");
const EmailRoutes = require("./routes/email.routes");
const ErrorHandlerMiddleware = require("./middlewares/error").errorHandler;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors configurations
app.use(cors());
app.options("*", cors());

//Routes
app.use(IndexRoutes);
app.use(EmailRoutes);
app.use(ErrorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
