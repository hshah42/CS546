const storyRoutes = require("./story");
const educationRoutes = require("./education");
const aboutRoutes = require("./about");

const constructorMethod = app => {
    app.use("/story", storyRoutes);
    app.use("/education", educationRoutes);
    app.use("/about", aboutRoutes)

    app.use("*", (req, res) => {
      res.status(404).json({ error: "Not found" });
    });
  };
  
  module.exports = constructorMethod;