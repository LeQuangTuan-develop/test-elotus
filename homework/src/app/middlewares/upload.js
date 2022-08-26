// import the multer module before configuring it to use the disc storage engine
const multer = require("multer");
const ApiError = require("../../utils/apiError");
const maxSize = 8 * 1024 * 1024;
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/src/resources/static/assets/tmp/");
  },
  filename: (req, file, cb) => {
    const type = file.mimetype.replace("image/", "");
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + "." + type;
    cb(null, file.fieldname + uniqueSuffix);
  },
});

function uploadFile(req, res, next) {
  const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(
          new ApiError(403, "Only .png, .jpg and .jpeg format allowed!")
        );
      }
    },
  }).single("file");

  upload(req, res, function (err) {
    try {
      if (err instanceof multer.MulterError) {
        if (err.code == "LIMIT_FILE_SIZE") {
          throw new ApiError(403, "File larger than 8MB cannot be uploaded!");
        }
      } else if (err) {
        if (err.statusCode === 403) {
          throw new ApiError(403, err.message);
        } else {
          throw new ApiError(
            500,
            `Unable to upload the file: ${req.file.originalname}. ${err}`
          );
        }
      }
      next();
    } catch (error) {
      next(error);
    }
  });
}

module.exports = uploadFile;
