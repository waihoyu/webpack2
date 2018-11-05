module.exports = {
    "env": {
        "browser": true,
        "node":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error"
        ],
        "linebreak-style": "off",
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
