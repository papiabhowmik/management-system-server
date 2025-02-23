import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    parentCompanyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company', 
        default: null
    },
    hierarchyLevel: { 
        type: Number, 
        default: 0 
    },
},{timestamps: true});

const company = mongoose.model('company', companySchema);

export default company;
