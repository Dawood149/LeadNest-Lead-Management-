import leadsModel from "../models/leadsModel.js";

export const handleIncomingLead = async (req, res) => {

  const newLead = await leadsModel.create({
    selectedRole: req.body.selectedRole,
    leadName: req.body.Name,
    leadEmail: req.body.email,
    leadPhone: req.body.phone,
    date: req.body.date,
    propertyType: req.body.propertyType,
    preferredLocation: req.body.preferredLocation,
    sqft: req.body.sqft,
    budget: req.body.budget,
    beds: req.body.beds,
    baths: req.body.baths,
    notes: req.body.notes,
    askingPrice: req.body.askingPrice,
    mortgage: req.body.mortgage,
    address: req.body.propertyAddress,
    location: req.body.location,
  });
  return res.status(200).json({
    message: "Hello from incoming lead controller.",
  });
};

export const handleGetAllLeads = async (req, res)=>{

  const allRecords = await leadsModel.find({})
  //console.log(allRecords)
  
  return res.status(201).json({
    message:"Records, fetched Succefully",
    allRecords,
  })
}
