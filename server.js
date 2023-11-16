import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as tokenRouter } from './src/routes/token.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 7000;

app.use('/token', tokenRouter);

console.log(`PORT: ${port}`);

app.listen(port);