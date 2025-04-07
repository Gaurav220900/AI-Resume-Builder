const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const aiRoutes = require('./src/routes/aiRoutes');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();    
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));