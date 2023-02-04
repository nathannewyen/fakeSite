module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testEnvironment: "jsdom",
};
