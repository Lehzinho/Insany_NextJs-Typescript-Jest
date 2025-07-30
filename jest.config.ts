const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",

  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/redux/(.*)$": "<rootDir>/src/redux/$1",
    "^styled-components": "<rootDir>/node_modules/styled-components",
  },

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  testMatch: ["**/__tests__/**/*.(ts|tsx|js)", "**/*.(test|spec).(ts|tsx|js)"],

  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/pages/_app.tsx",
    "!src/pages/_document.tsx",
  ],

  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/coverage/",
    "/public/",
  ],

  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

module.exports = createJestConfig(customJestConfig);
