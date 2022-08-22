// eslint-disable-next-line import/no-commonjs
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["import"],
    "rules": {
        "import/no-unresolved": 2,
        "import/no-commonjs": 2,
        "import/extensions": [2, "ignorePackages"]
    }
}
