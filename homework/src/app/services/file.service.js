const fs = require("fs");
const { Gallery } = require("../models");
const ApiError = require("../../utils/apiError");

class FileService {
  async uploadFile(file) {
    if (file == undefined) {
      throw new ApiError(403, "Please upload a file!");
    }
    var img = fs.readFileSync(file.path);
    var encode_image = img.toString("base64");

    // Define a JSONobject for the image attributes for saving to database
    var finalImg = {
      contentType: file.mimetype,
      image: new Buffer.from(encode_image, "base64"),
      size: file.size,
      fileName: file.filename,
    };
    const newGallery = new Gallery(finalImg);
    await newGallery.save();

    return newGallery;
  }
}

module.exports = new FileService();
