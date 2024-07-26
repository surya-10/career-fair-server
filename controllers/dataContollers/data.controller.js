import express from "express";
import { createProperty, deleteProperty, editProperty, getAllProperty } from "../../Routers/dataRouters/data.router.js";

let dataRouter = express.Router();

dataRouter.post("/add-property", createProperty);
dataRouter.post("/edit-property/:id", editProperty);
dataRouter.delete("/delete-property/:id", deleteProperty)
dataRouter.get("/all", getAllProperty);

export default dataRouter;