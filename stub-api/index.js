const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());


app.post('/api/upload-file', (req, res) => {
    if (!req.files) {
        return res.status(400).send({message: 'No files were uploaded.'});
    }

    if (req.files['BabelEdit-1.4.0.deb']) {
        res.status(500).send({message: 'Wrong extension!'});
        return;
    }

    res.send({message: 'File uploaded!'});
});

app.listen(5001);
