const path = require("path");
const fs = require('fs')
class MySimpleCleanPlugin {
  constructor() {}
  apply(compiler) {
    if (!compiler.options.output || !compiler.options.output.path) {
      console.warn("no output path !");
      return;
    }
    const hooks = compiler.hooks;
    const outputPath = compiler.options.output.path;
    hooks.emit.tap("my-smiple-clean-plugin", (compilation) => {
      if (fs.statSync(outputPath).isDirectory()) {
        this.deleteFiles(outputPath)
      }
    });
  }
  deleteFiles(curPath) {
    if (fs.statSync(curPath).isDirectory()) {
      const files = fs.readdirSync(curPath)
      files.forEach((f) => {
        this.deleteFiles(path.resolve(curPath, f));
      });
      fs.rmdirSync(curPath)
    } else {
      fs.rmSync(curPath);
    }
  }

}

module.exports = MySimpleCleanPlugin;
