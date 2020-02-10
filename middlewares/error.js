exports.errorHandler = (err,req,res,next) => {

    if(err.httpCode){
        res.status(err.httpCode).send({
            status: "failure",
            code: err.code,
            reason: err.message
        });
    }

    next(err);
    
}