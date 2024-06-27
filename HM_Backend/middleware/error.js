export const generatedError = (err, req, res, next) =>{
    const statusCode = err.statusCode || 500

    if(
        err.name === "MongoServerError" && 
        err.message.includes("E11000 duplicate key")
    ){
        err.message = "User Alredy Exists With This Email Address"
    }

    res.status(statusCode).json({
        message:err.message,
        errName:err.name,
        // stack:err.stack
    })
}