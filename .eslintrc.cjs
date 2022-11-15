module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['codex/ts'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    rules: {},
}
