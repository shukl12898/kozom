import express from "express";
import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: "org-1lpUiU9pIAogrQxYcvNih81l", // replace with your organization ID if needed
});

app.post("/api/chat", async (req, res) => {
  try {
    const userInput = req.body.message;
    const response = await openai.createCompletion({
      model: "gpt-4", // or any other model
      prompt: userInput,
      max_tokens: 150,
    });

    const aiText = response.data.choices[0].text.trim();
    res.json({ reply: aiText });
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    res.status(500).send("Error processing your request");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
