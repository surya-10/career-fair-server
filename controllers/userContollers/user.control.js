import express from "express";
import { createUser, forgotPass, loginUser, updatePassword, verifyToken } from "../../Routers/userRouters/user.router.js";

let authRouter = express.Router();

authRouter.post("/signup", createUser);
authRouter.post("/login", loginUser);
authRouter.post("/forgot", forgotPass)
authRouter.get("/token-verify/:id/:token", verifyToken);
authRouter.post("/update-password/:id", updatePassword);

export default authRouter;