const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Corrigido: .ts ao invés de .js
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",

  // Corrigido: moduleNameMapping -> moduleNameMapping
  moduleNameMapping: {
    // Handle module aliases
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

  // Configurações adicionais que podem ser úteis
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  // Para resolver problemas com ES modules
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
