const palindromeRoute = require("./palindrome");
const path = require("path");

const constructorMethod = app => {
  app.use("/result", palindromeRoute);

  app.get("*", (req, res) => {
    res.render("layouts/main");
  });
};

module.exports = constructorMethod;