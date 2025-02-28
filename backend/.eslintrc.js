module.exports = {
  env: {
    node: true, // Node.js environment
    es2021: true, // Use ES2021 features
  },
  extends: [
    "eslint:recommended", // ESLint recommended rules
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
    "plugin:import/recommended", // Import rules
    "plugin:import/typescript", // Import rules for TypeScript
    "plugin:prettier/recommended", // Prettier recommended rules (must be last)
  ],
  parser: "@typescript-eslint/parser", // TypeScript parser
  parserOptions: {
    ecmaVersion: "latest", // Use the latest ECMAScript version
    sourceType: "module", // Use ES modules
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    // Custom rules
    "prettier/prettier": "error", // Enforce Prettier formatting
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always", // Add newlines between import groups
        alphabetize: {
          order: "asc", // Alphabetize imports
          caseInsensitive: true,
        },
      },
    ],
    "no-console": "warn", // Warn on console.log
    "no-unused-vars": "off", // Disable default unused vars rule
    "@typescript-eslint/no-unused-vars": ["error"], // Use TypeScript's unused vars rule
    "comma-dangle": ["error", "always-multiline"], // Require trailing commas in multiline
    quotes: ["error", "single"], // Use single quotes
    semi: ["error", "always"], // Require semicolons
    "import/no-unresolved": "error", // Ensure imports are resolved
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never", // Disable .ts extension in imports
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {}, // Resolve TypeScript imports
    },
  },
};
