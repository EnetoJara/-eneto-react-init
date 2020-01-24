module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'airbnb-typescript',
        "eslint:recommended",
        "eslint-config-jsdoc",
        "plugin:promise/recommended",
        "plugin:import/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "detect"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {
                "property": "freeze",
                "object": "Object"
            },
            {
                "property": "myFavoriteWrapper"
            }
        ],
        "linkComponents": [
            "Hyperlink",
            {
                "name": "Link",
                "linkAttribute": "to"
            }
        ]
    },
    "plugins": [
        "react",
        "jsdoc",
        "promise",
        "import",
        "@typescript-eslint"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "@typescript-eslint/quotes": ["error", "double"],
        "semi": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            "always"
        ],
        "@typescript-eslint/unbound-method": 0,
        "@typescript-eslint/indent":  ["error",4],
        "no-console": 0,
        "react/jsx-indent": ["error",4],
        "max-len": ["error", 120],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/boolean-prop-naming": "error",
        "react/button-has-type": "error",
        "react/destructuring-assignment": ["error", "always"],
        "react/forbid-component-props": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-typos": "error",
    }
};