const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json([
        {
            "id": 1,
            "nama": "Adam Wisnu",
            "kelas": "TT-45-09"
        },
        {
            "id": 2,
            "nama": "Raihan Putra",
            "kelas": "TT-45-11"
        }
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});