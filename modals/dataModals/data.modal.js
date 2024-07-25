import mongoose from "mongoose";

let dataschema = new mongoose.Schema({
    createdUser:{
        type:String,
        required:true
    },
    propertyType:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
}
)

let DataModal = mongoose.model("Data", dataschema);
export default DataModal;