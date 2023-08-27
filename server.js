const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('DentalChat backend is running');
});

app.post('/analyze', (req, res) => {
    const symptom = req.body.symptom;
    // A very simple mock analysis
    const result = symptom ? "Possible issue: Cavity" : "No symptom provided";
    res.json({ analysis: result });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
