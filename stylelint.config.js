module.exports = {
  plugins: ["stylelint-scss", "stylelint-order"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-recess-order",
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "extend",
          "layer",
          "include",
          "mixin",
          "function",
          "return",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "block-no-empty": false,
  },
};
