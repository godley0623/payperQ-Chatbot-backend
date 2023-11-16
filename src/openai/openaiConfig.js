import { OpenAI } from "openai";
import dotenv from 'dotenv'

dotenv.config()

export const openaiConfig = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})