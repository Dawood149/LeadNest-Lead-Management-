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
    type: Number,
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
  prefferedLocation: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sqft: {
    type: Number,
    required: true,
  },
  budget: {
    type: String,
    required: true,
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
    required: true,
  },
  mortgage: {
    type: String,
    enum: ["Paid Off", "Pending"],
    required: true,
  },

  askingPrice: {
    type: Number,
    required: true,
  },

  notes: {
    type: String,
    required: true,
  },
});

const leadsModel = mongoose.model("leads", leadSchema);

export default leadsModel;
