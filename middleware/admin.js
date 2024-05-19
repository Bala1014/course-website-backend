const {Admin} = require("../db")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    
    const username = req.headers.username;
    console.log(username);
    const password = req.headers.password;
    console.log(password);


    const existingUser = await Admin.findOne({
        username : username,
        password : password
    });

    if(existingUser){
        next();
    }else{
        res.status(403).json({
            msg : "Admin doesn't exist"
        })
    }
}

module.exports = adminMiddleware;



  