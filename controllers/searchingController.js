import company from '../models/companyModel.js';
import user from '../models/userModel.js';

export const searchingData = async (req, res) => {
    try {
        const query = req.query.query;
        const page = parseInt(req.query.page) || 1; 
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const totalUsers = await user.countDocuments({
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { email: { $regex: query, $options: 'i' } },
          ],
        });

        const totalCompanies = await company.countDocuments({
          name: { $regex: query, $options: 'i' },
        });

        const users = await user.aggregate([
          {
            $match: {
              $or: [
                { name: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } },
              ],
            },
          },
          {
            $lookup: {
              from: 'companies',
              localField: 'companyId',
              foreignField: '_id',
              as: 'companyDetails',
            },
          },
          {
            $unwind: '$companyDetails',
          },
          {
            $project: {
              name: 1,
              email: 1,
              role: 1,
              'companyDetails.name': 1,
              'companyDetails.hierarchyLevel': 1,
            },
          },
          {
            $skip: skip, 
          },
          {
            $limit: limit,
          },
        ]);

        const companies = await company.aggregate([
          {
            $match: {
              name: { $regex: query, $options: 'i' },
            },
          },
          {
            $lookup: {
              from: 'users',
              localField: '_id',
              foreignField: 'companyId',
              as: 'users',
            },
          },
          {
            $project: {
              name: 1,
              hierarchyLevel: 1,
              users: { $slice: ['$users', 5] },
            },
          },
          {
            $skip: skip,
          },
          {
            $limit: limit,
          },
        ]);

        const hasNextPage = (page * limit) < (totalUsers + totalCompanies);
        
        return res.status(200).json({
          pagination: {
            has_next_page: hasNextPage,
            current_page: page,
            per_page: limit,
          },
          users,
          companies
        });
    } catch (error) {
        return res.status(500).json({ message: "Error performing search", error });
    }
};
