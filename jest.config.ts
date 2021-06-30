/* eslint-disable prettier/prettier */
import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'node',
    collectCoverage: true,
    testResultsProcessor: 'jest-sonar-reporter',
    coveragePathIgnorePatterns: ['/node_modules/']
  };
};
