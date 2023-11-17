import express from 'express'
import { openaiConfig as openai } from '../openai/openaiConfig.js'

export const router = express.Router()

router.post('/', async (req, res) => {
    const model = req.body.model
    const prompt = "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown."
    const temperature = req.body.temperature
    const messages = [{ "role": "system", "content": prompt }, ...req.body.messages]
    
    const stream = await openai.chat.completions.create({
        model: model,
        messages: messages,
        temperature: temperature,
        stream: true,
      });
      for await (const part of stream) {
        const chunk = part.choices[0].delta.content
        if (chunk !== undefined) {
            res.write(chunk)
        }else {
            res.end()
            return
        }
      }
})

