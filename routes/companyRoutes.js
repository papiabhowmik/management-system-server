import express from 'express';
import { createCompany, getCompany } from '../controllers/companyController.js';
const router = express.Router();

router.post('/companies', createCompany);
router.get('/companies/:companyId', getCompany);

export default router;