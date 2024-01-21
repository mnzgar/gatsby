module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", 
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["react", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  ignorePatterns: ['node_modules', '.cache', 'public'],
  rules: {}
}
