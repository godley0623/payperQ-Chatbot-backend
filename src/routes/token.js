import express from "express";
import openaiTokenCounter from 'openai-gpt-token-counter';

export const router = express.Router();

const tokenCount = (text, model) => {
    const tokenCount = openaiTokenCounter.text(text, model);
    console.log(`Token count: ${tokenCount}`);
    return tokenCount;
}

router.get("/count", (req, res) => {
    const body = req.body;
    const count = tokenCount(body.text, body.model);

    res.status(200).send({message: count});
})