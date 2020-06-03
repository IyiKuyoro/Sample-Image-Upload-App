const multer = require('multer');

// Find help about using multer here: https://www.npmjs.com/package/multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/uploads`);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

module.exports = upload;
