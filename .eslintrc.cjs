module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            files: ['vite.config.ts'],
            parserOptions: {
                project: 'tsconfig.node.json', // Usar el `tsconfig` correcto
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    settings: {
        react: {
            version: '18.2.0',
        },
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'no-empty-function': 'error',
        'no-implicit-coercion': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': [
            'error',
            {
                custom: 'ignore',
                explicitSpread: 'ignore',
            },
        ],
    },
};
