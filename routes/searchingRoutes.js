import express from 'express';
import { searchingData } from '../controllers/searchingController.js';

const router = express.Router();

router.get('/search',searchingData);

export default router;