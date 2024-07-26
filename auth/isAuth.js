import jwt from "jsonwebtoken";

export function isAuth(req, res, next){
    let token = req.headers["auth-token"];
    try {
        let token = req.headers["auth-token"];
        if (token==null) {
            return res.status(400).send({ response: "Authentication failed", ok:false });
        }
        
        let result = jwt.verify(token, process.env.secret_key);
        console.log(result);
        next();
    } catch (error) {
        return res.status(500).json({token:null, response:"no token", ok:false, error:error})
    }
}