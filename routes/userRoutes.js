import express from 'express';
import { createUser, getUser } from '../controllers/userController.js';

const router = express.Router();

router.post("/users", createUser);
router.get("/users/:userId", getUser);

export default router;