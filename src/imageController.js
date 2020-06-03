function uploadImage(req, res) {
    try {
        // By not the multer middleware on line 27 should have done the upload.
        // You can do other stuff with the uploaded image here. Perhaps proper storage of the image

        res.status(201).json({
            success: true,
            message: 'Image uploaded successfully',
            image_url: `http://localhost:4000/image/${req.file.originalname}`
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            success: false,
        });
    }
}

function getImage(req, res) {
    try {
        // You might want to do further checks before this. i.e: That the image exists.
        res.status(200).sendFile(
            `${__dirname}/uploads/${req.params.filename}`
        );
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            success: false,
        });
    }
}

module.exports = {
    uploadImage,
    getImage,
}
