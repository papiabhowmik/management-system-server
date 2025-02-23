import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import companyRoutes from './routes/companyRoutes.js';
import userRoutes from './routes/userRoutes.js';
import searchingRoutes from './routes/searchingRoutes.js';

dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();


//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", companyRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", searchingRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Node server running on port ${PORT}`);
});