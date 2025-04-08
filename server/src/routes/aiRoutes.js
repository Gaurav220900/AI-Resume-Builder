const express = require("express");
const { generateContent } = require("../utils/openai");
const router = express.Router();

router.post("/suggest", async (req, res) => {
    try {
        const { summary } = req.body;
        const improvedText = await generateContent(summary);
        res.status(200).json({ improvedText });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
