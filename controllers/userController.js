import user from '../models/userModel.js';

export const createUser = async (req, res) => {
    try {
      const { name, email, companyId, role } = req.body;
      
      const newUser = await new user({name, email, companyId, role }).save();
  
      return res.status(201).json({ userId: newUser._id, companyId, role });
    } catch (error) {
      return res.status(500).json({ message: "Error creating user", error });
    }
}


export const getUser = async (req, res) => {
    try {
        const users = await user.findById(req.params.userId).populate('companyId').exec();
    
        return res.status(200).json({
          userDetails: users,
          companyDetails: users.companyId
        });
    } catch (error) {
    return res.status(500).json({ message: "Error fetching user details", error });
    }
}

  