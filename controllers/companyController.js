import company from '../models/companyModel.js';
import user from '../models/userModel.js';

export const createCompany = async (req, res) => {
    try{
        const {name, parentCompanyId} = req.body;
        const parentCompany = parentCompanyId ? await company.findById(parentCompanyId) : null;
    
        const hierarchyLevel = parentCompany ? parentCompany.hierarchyLevel + 1 : 1;
        const newCompany = await new company({name, parentCompanyId: parentCompanyId || null, hierarchyLevel}).save()
        return res.status(201).json({ companyId: newCompany._id, hierarchyLevel });

    }catch(error){
        return res.status(500).json({ message: "Internal server error", error});
    }
}

export const getCompany = async (req, res) => {
    try {
        const companies = await company.findById(req.params.companyId)
          .populate('parentCompanyId') 
          .exec();
    
        const users = await user.find({ companyId: req.params.companyId }).limit(5); 
        
        const subCompanies = await company.find({ parentCompanyId: req.params.companyId });
    
        return res.status(200).json({
          companyDetails: companies,
          users: users,
          subCompanies: subCompanies
        });
      } catch (error) {
        return res.status(500).json({ message: "Error fetching company details", error });
      }
}