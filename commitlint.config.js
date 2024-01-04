const typeEnum = [
  "feat", // implement new feature
  "fix",  // some quick fix
  "style",
  "refactor",
  "test" // for test cases
];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [2, "always", "sentence-case"],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", typeEnum],
  },
  plugins: [
    {
      rules: {
        "type-enum": ({ type, subject }) => {
          if (typeEnum?.includes(type) && /^\[XPM-\d+\] /.test(subject)) {
            return [true];
          }
          return [
            false,
            !/^\[XPM-\d+\] /.test(subject)
              ? `Commit message should start with <type>(<module>, XPM-<number>): <description>`
              : !typeEnum?.includes(type) &&
              `Type should be 'feat',
                'fix',
                'style',
                'refactor',
                'test',`,
          ];
        },
      },
    },
  ],
};