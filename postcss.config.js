module.exports = {
  plugins: [
    require("@tailwindcss/postcss"), // Tailwind plugin
    require("autoprefixer"),         // Adds vendor prefixes
    ...(process.env.NODE_ENV === "production"
      ? [
          require("cssnano")({ preset: "default" }) // Minify in production
        ]
      : []),
  ],
};