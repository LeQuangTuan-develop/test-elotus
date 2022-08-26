const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallerySchema = new Schema(
  {
    contentType: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    size: {
      required: true,
      type: Number,
    },
    fileName: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Gallery", GallerySchema);
