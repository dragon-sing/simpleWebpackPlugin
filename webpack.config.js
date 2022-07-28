const path = require("path");
const MySimpleCleanPlugin = require("./MySimpleCleanPlugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  plugins: [new MySimpleCleanPlugin()],
};
