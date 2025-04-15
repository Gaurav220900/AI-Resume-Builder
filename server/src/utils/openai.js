// openai.js
const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateContent = async (text) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: `Improve this resume description: ${text}` }
    ],
    max_tokens: 1000,
  });

  return response.choices[0].message.content.trim();
};

module.exports = { generateContent };
