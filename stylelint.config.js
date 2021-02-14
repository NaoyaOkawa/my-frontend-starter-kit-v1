module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-recess-order",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "block-no-empty": false,
  },
};
