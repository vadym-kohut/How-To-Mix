/** libraries used in project */
const esModules = ['@angular', '@material'];

module.exports = {
    rootDir: './',
    preset: 'jest-preset-angular',
    extensionsToTreatAsEsm: ['.ts'],
    roots: ['<rootDir>/src/'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    modulePaths: ['<rootDir>/dist'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/app/**/*.ts'
    ],
    coverageReporters: ['lcov', 'html', ['text', { skipFull: true }]],
    coverageDirectory: '<rootDir>coverage',
    moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
    transform: {
        '^.+\\.(ts|js|mjs|html|svg)$': ['jest-preset-angular', {
            useESM: true,
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$'
        }]
    },
    transformIgnorePatterns: [`<rootDir>/node_modules/(?!.*\\.mjs$|${esModules.join('|')})`]
};
