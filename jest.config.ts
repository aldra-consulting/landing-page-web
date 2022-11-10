import type { Config } from 'jest';

const configuration: Config = {
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.{ts,js}']
};

export default configuration;
