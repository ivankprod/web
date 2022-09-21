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
	"rules": {
		"react/jsx-key": "error",
		"@typescript-eslint/no-var-requires": "off",
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
