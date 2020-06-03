const express = require('express');
const cors = require('cors');

const imageController = require('./imageController');
const upload = require('./multerMiddleware');

app = express();

app.use(cors());
app.use(express.json());

// Upload an image
app.post(
    '/upload',
    upload.single('image'), // Multer middleware to handle the multipart for upload for you.
    imageController.uploadImage,
);

// Get the uploaded images
app.get(
    '/image/:filename',
    imageController.getImage,
);

app.get('*', (req, res) => {
        res.status(404).json({
        message: 'Route not found',
        success: false,
    });
});

module.exports = app;
