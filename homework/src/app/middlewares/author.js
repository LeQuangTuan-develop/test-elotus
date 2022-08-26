const ApiError = require("../../utils/apiError");
const { User } = require("../models");

const author = (req, res, next) => {
  try {
    const authheader = req.header("Authorization");
    const token = authheader && authheader.split(" ")[1];

    if (!token) {
      throw new ApiError(401, "Not provide token");
    }

    const findUser = User.findOne({ accesToken: token });
    if (!findUser) {
      throw new ApiError(404, "Forbidden");
    }

    req.user = findUser;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = author;
