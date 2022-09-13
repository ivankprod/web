module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"ignorePatterns": [
		"src/fonts/*",
		"src/images/*",
		"src/styles/*"
	],
	"rules": {
		"react/jsx-key": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/ban-types": [
			"error",
			{
				"types": {
					Function: false
				}
			}
		]
	}
};
