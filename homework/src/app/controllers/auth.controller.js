const axios = require("axios");
const { User } = require("../models");

class AuthController {
  oauth(req, res, next) {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );
  }

  async callback(req, res, next) {
    try {
      const code = req.query.code;
      const body = {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_SECRET,
        code,
      };
      const opts = { headers: { accept: "application/json" } };
      const result = await axios.post(
        "https://github.com/login/oauth/access_token",
        body,
        opts
      );
      const token = result.data.access_token;
      const instance = axios.create({
        baseURL: "https://api.github.com",
        headers: { Authorization: "Bearer " + token },
      });
      const userInfo = await instance.get("/user");
      const user = await User.findOne({ username: userInfo.data.login });
      if (!user) {
        const newUser = new User({
          username: userInfo.data.login,
          email: userInfo.data.email,
          password: userInfo.data.id,
          accessToken: token,
        });
        await newUser.save();
      } else {
        user.accessToken = token;
        await user.save();
      }
      res.redirect(`/?token=${token}`);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
