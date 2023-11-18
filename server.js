import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as tokenRouter } from './src/routes/token.js';
import { router as openaiRouter } from './src/routes/openai.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 7000;

app.use('/token', tokenRouter);
app.use('/openai', openaiRouter);

console.log(`PORT: ${port}\nKEY: ${process.env.OPENAI_API_KEY}`);

app.listen(port);