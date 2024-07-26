import jwt from "jsonwebtoken";

export function isAuth(req, res, next){
    let token = req.headers["auth-token"];
    console.log(token)
    try {
        let token = req.headers["auth-token"];
        console.log(token)
        if (!token) {
            return res.status(400).send({ response: "Authentication failed", ok:false });
        }
        let result = jwt.verify(token, process.env.SECRET_KEY);
        console.log(result);
        next();
    } catch (error) {
        return res.status(500).json({token:null, response:"no token", ok:false, error:error})
    }
}