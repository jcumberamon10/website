module.exports = {
  open: true,
  server: {
    baseDir: "./",
    serveStaticOptions: {
      extensions: ["html"]
    }
  },
  files: ["./*.html", "./assets/**/*.{css,js}"], // watch only your files
  ignore: ["./node_modules/**/*"]                // ignore node_modules
};