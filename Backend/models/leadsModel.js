import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  selectedRole: {
    type: String,
    enum: ["seller", "buyer"],
  },

  leadName: {
    type: String,
    required: true,
  },

  leadEmail: {
    type: String,
    required: true,
  },

  leadPhone: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  propertyType: {
    type: String,
    enum: ["Single Family Home", "Townhouse", "Apartment", "Duplex", "Triplex"],
  },
  preferredLocation: {
    type: String,
  },
  location: {
    type: String,
  },
  sqft: {
    type: Number,
    required: true,
  },
  budget: {
    type: String,
  },

  beds: {
    type: Number,
    enum: [1, 2, 3, 4],
  },

  baths: {
    type: Number,
    enum: [1, 2, 3, 4],
    required: true,
  },

  address: {
    type: String,
  },
  mortgage: {
    type: String,
    enum: ["Paid Off", "Pending"],
  },

  askingPrice: {
    type: Number,
  },

  notes: {
    type: String,
    required: true,
  },
  agentAssigned:{
    type:String,
    default:""
  },
  status:{
    type:String,
    enum:['New', 'Contacted', 'In Progress', 'Converted', 'Dropped'],
    default:'New',
  }
});

const leadsModel = mongoose.model("leads", leadSchema);

export default leadsModel;
