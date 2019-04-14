module.exports = {
  root : true,
  env  : {
    browser : true,
    es6     : true,
  },
  plugins       : ['vue'],
  extends       : ['plugin:vue/strongly-recommended'],
  parserOptions : {
    ecmaVersion : 2018,
    sourceType  : 'module',
  },
  rules: {
    'no-console'                  : 'off',
    'no-debugger'                 : 'off',
    'no-unused-vars'              : 'warn',
    quotes                        : ['warn', 'single', { avoidEscape: true }],
    semi                          : ['warn', 'never'],
    indent                        : ['warn', 2],
    'comma-dangle'                : ['warn', 'always-multiline'],
    'brace-style'                 : ['warn', 'stroustrup'],
    'space-before-function-paren' : ['warn', 'always'],
    'no-trailing-spaces'          : ['warn'],
    'space-before-blocks'         : 'error',
    'keyword-spacing'             : ['warn', { after: true }],
    'space-infix-ops'             : ['warn'],
    'no-multi-spaces'             : [
      'error',
      {
        exceptions: {
          VariableDeclarator : false,
          ImportDeclaration  : false,
          Property           : true,
        },
      },
    ],
    'key-spacing': [
      'error',
      {
        align: {
          beforeColon : true,
          afterColon  : true,
          on          : 'colon',
          mode        : 'strict',
        },
      },
    ],
  },
  globals: {
    process: true,
  },
}