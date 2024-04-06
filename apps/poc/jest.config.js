module.exports = {
  displayName: 'poc',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.(html|svg)$',

      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageReporters: [['lcov', { projectRoot: '../../' }]],
  coverageDirectory: '../../coverage/apps/poc',

  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'reports/test',
        outputName: 'poc.xml',
        reportedFilePath: 'absolute',
      },
    ],
  ],

  transform: { '^.+\\.(ts|js|html)$': 'jest-preset-angular' },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
