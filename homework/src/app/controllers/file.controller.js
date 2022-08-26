const { Gallery } = require("../models");
const FileService = require("../services/file.service");

class FileController {
  async upload(req, res, next) {
    try {
      const newImg = await FileService.uploadFile(req.file);
      res.status(200).send({
        message:
          "The following file was uploaded successfully: " +
          req.file.originalname,
        data: newImg,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new FileController();
