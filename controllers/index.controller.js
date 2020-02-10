module.exports.index = function(req, res) {
    res.status(303).json({
      message: "Error",
      data: "No Valid Request!"
    });
  };
  