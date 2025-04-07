const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateContent = async (text) => {
    const response = await openai.createCompletion({
        model: "gpt-4",
        prompt: `Improve this resume description: ${text}`,
        max_tokens: 100,
    });
    return response.data.choices[0].text.trim();
};

module.exports = { generateContent };