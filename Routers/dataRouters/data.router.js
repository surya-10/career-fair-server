import DataModal from "../../modals/dataModals/data.modal.js";

export let createProperty = async(req, res)=>{
    try {
        let {propertyType, location, price, description, id, status} = req.body;
        let addToDb = new DataModal({
            createdUser:id,
            propertyType,
            price,
            location,
            description,
            status
        })
        await addToDb.save();
        if(!addToDb){
            return res.status(400).json({response:"Error to create new property", ok:false});
        }
        return res.status(201).json({response:"property created", ok:true});

    } catch (error) {
        console.log(error);
        return res.status(500).json({response:"server error", ok:false});
    }
}
export let editProperty = async(req, res)=>{

    let {propertyType, location, price, description, status} = req.body;
        let {id} = req.params;
    try {
        let isPropertyExist = await DataModal.findByIdAndUpdate(id, {propertyType:propertyType, location:location, price:price, description:description, status:status});
        if(!isPropertyExist){
            return res.status(400).json({response:"Error to edit property", ok:false});
        }
        return res.status(201).json({response:"property edited", ok:true});

    } catch (error) {
        // console.log(error);
        return res.status(500).json({response:"server error", ok:false, error:error});
    }
}
export let deleteProperty = async(req, res)=>{

        let {id} = req.params;
           try {
        let findProperty = await DataModal.findById(id);
        if(!findProperty){
            return res.status(400).json({response:"Property does not exist", ok:false});
        }
        let deleteData = await DataModal.findByIdAndDelete(id);
        if(!deleteData){
            return res.status(400).json({response:"Error to delete data", ok:false});
        }
        return res.status(200).json({response:"Property deleted", ok:true});


    } catch (error) {
        console.log(error);
        return res.status(500).json({response:"server error", ok:false, error:error});
    }
}

export let getAllProperty = async(req, res)=>{
    try {
        let getData = await DataModal.find();
        return res.status(200).json({response:"data", ok:true, data:getData});
    } catch (error) {
        console.log(error);
        return res.status(500).json({response:"server error", ok:false, error:error});
    }
}