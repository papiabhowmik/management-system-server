import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  companyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'company', 
    required: true 
},
  role: { 
    type: String, 
    default: 'Employee' 
},
}, { timestamps: true });

const user = mongoose.model('user', userSchema);

export default user;