const path = require("path");
const multer = require('multer');

const storageHandle = (foldername) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, `../public/upload/${foldername}`));
        },
        filename: function (req, file, cb) {
            cb(
                null,
                `${file.fieldname}-${file.originalname}`
                
            )
        }
    })
    return storage;

}
const handleUpload = (folder) => {
    let upload = multer({
        storage: storageHandle(folder),
    })
    return upload;
}



module.exports = handleUpload;