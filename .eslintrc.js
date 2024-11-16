module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		// 'plugin:@typescript-eslint/recommended',
		// 'plugin:prettier/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'max-len': [
			'error',
			{
				code: 120,
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
			},
		],
		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'padded-blocks': [
			'error',
			{
				classes: 'always',
			},
		],
		'space-in-parens': [
			'error',
			'always',
			{
				exceptions: ['{}'],
			},
		],
		indent: ['error', 'tab'],
		semi: ['error', 'never'],
		yoda: ['error', 'always'],
		'import/prefer-default-export': 0,
		quotes: ['error', 'single'],
	},
}
