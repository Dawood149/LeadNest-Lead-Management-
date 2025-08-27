import leadsModel from "../models/leadsModel.js";


  export const handleIncomingLead = async (req, res)=>{

   const newLead = await leadsModel.create({
    Role: req.body.selectedRole,
    Name: req.body.Name,
    email: req.body.email,
    phone: req.body.phone,
    date: req.body.date,
    propertyType: req.body.propertyType,
    preferredLocation: req.body.preferredLocation,
    sqft: req.body.sqft,
    budget: req.body.budget,
    beds: req.body.beds,
    baths: req.body.baths,
    notes: req.body.notes
})

    return res.status(200).json({
        message:"Hello from incoming lead controller."
    });

}