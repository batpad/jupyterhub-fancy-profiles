module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/react-in-jsx-scope': "off",
        'react/jsx-uses-react': "off",
        // Temporarily turn off prop-types
        "react/prop-types": "off",
        'no-unused-vars': [
            'error',
            { 'args': 'after-used' }
        ]
    },
    "ignorePatterns": [
        "kubespawner_dynamic_building_ui/static/*.js", "webpack.config.js"
    ]
}