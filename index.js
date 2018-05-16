// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//
// IMPORTANT:
//
// If possible, avoid overriding of Airbnb rules!!!
// If you have to do that anyway, then also comment on why!
//
// If you really have to override an Airbnb rule or you want to enable some
// disabled Airbnb rule, copy exactly the Airbnb definition of the rule, sort
// the configuration attributes (if exists) alphabetically and enable the rule
// with 'error'. Nothing else!
//
// Airbnb rule definitions can be found in the rule files in each package here:
// https://github.com/airbnb/javascript/tree/master/packages
//
// If you want to add an additianal rule provided by a plugin, always enable it
// with 'error' and set all available configuration attributes.
//
// INTEGRITY LAST CHECK: 18.01.2018
//
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/*
 * TODO:
 * - Make 'import/extensions' work with Meteor
 *  - https://github.com/benmosher/eslint-plugin-import/issues/593
 * - Make 'import/no-extraneous-dependencies' work with Meteor
 *  - https://github.com/benmosher/eslint-plugin-import/issues/479
 * - Enable Prettier again, if it supports Styled Components
 */

module.exports = {
  'extends': [
    'airbnb',
    'plugin:meteor/recommended',
    // 'prettier',
    // 'prettier/react',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'allowImportExportEverywhere': true
  },
  'plugins': [
    'extras',
    'meteor',
    'prefer-object-spread',
    // 'prettier',
    'sort-class-members',
  ],
  'rules': {
    /*
     * Airbnb
     */
    // Overrides
    'curly': ['error', 'all'], // Changed from 'multi-line' to 'all'.
    'func-names': 'error', // Changed from 'warn' to 'error'.
    'import/extensions': 'off', // Turned off because of Meteor.
    'import/no-absolute-path': 'off', // Turned off because we use absolute paths instead of '../'.
    'import/no-extraneous-dependencies': 'off', // Turned off because of Meteor.
    'no-alert': 'error', // Changed from 'warn' to 'error'.
    'no-console': 'error', // Changed from 'warn' to 'error'.
    'no-constant-condition': 'error', // Changed from 'warn' to 'error'.
    'no-underscore-dangle': ['error', { // Make some exceptions for often used fields
      'allow': [
        '_id',
        '_aggregated',
        '_details',
      ]
    }],
    'react/jsx-filename-extension': ['error', {
      'extensions': ['.js'], // Changed from '.jsx' to '.js', because we always use JSX inside of .js files.
    }],
    'react/no-danger': 'error', // Changed from 'warn' to 'error'.
    'react/sort-comp': 'off', // Turned off because we switched to sort-class-members extension.
    'semi': ['error', 'never'], // Changed from 'always' to 'never', because we never use semicolons.
    // Additions
    'no-warning-comments': 'warn',
    'import/order': ['error', {
     'groups': [
       'builtin',
       'external',
       'internal',
       'parent',
       'sibling',
       'index',
     ],
     'newlines-between': 'never',
    }],
    // /*
    //  * Prettier
    //  */
    // 'prettier/prettier': ['error', {
    //  'arrowParens': 'always',
    //  'bracketSpacing': true,
    //  'insertPragma': false,
    //  'jsxBracketSameLine': false,
    //  'parser': 'babylon',
    //  'printWidth': 80,
    //  'proseWrap': 'preserve',
    //  'rangeEnd': Infinity,
    //  'rangeStart': 0,
    //  'requirePragma': false,
    //  'semi': false,
    //  'singleQuote': true,
    //  'tabWidth': 2,
    //  'trailingComma': 'all',
    //  'useTabs': false,
    // }],
    // // Reenable Airbnb rules diabled by eslint-config-prettier.
    // // See: https://github.com/prettier/eslint-config-prettier#special-rules
    // 'curly': ['error', 'all'], // Changed from 'multi-line' to 'all'.
    // 'lines-around-comment': 0, // Remains disabled...
    // 'max-len': ['error', 80, 2, { // Changed from 100 to 80.
    //   'ignoreComments': false,
    //   'ignoreRegExpLiterals': true,
    //   'ignoreStrings': true,
    //   'ignoreTemplateLiterals': true,
    //   'ignoreUrls': true,
    // }],
    // 'no-confusing-arrow': 'off', // Must remain disabled.
    // 'no-mixed-operators': 'off', // Must remain disabled.
    // 'no-tabs': 'error',
    // 'no-unexpected-multiline': 'off', // Must remain disabled.
    // 'quotes': 'off', // Remains disabled due to redundancies.
    /*
     * Extentions
     */
    'extras/sort-named-imports': 'error',
    "meteor/template-names": [
      2,
      "pascal-case"
    ],
    'prefer-object-spread/prefer-object-spread': 'error',
    'sort-class-members/sort-class-members': ['error', {
      'accessorPairPositioning': 'getThenSet',
      'order': [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'state',
        '[static-properties]',
        '[static-methods]',
        '[properties]',
        '[conventional-private-properties]',
        'constructor',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        '/^get(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        '[getters]',
        '/^set(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        '[setters]',
        '/^handle.+$/',
        '/^on.+$/',
        '[methods]',
        '[conventional-private-methods]',
        '[everything-else]',
        '/^render.+$/',
        'render',
      ],
      'stopAfterFirstProblem': false,
    }],
  },
  'settings': {
    'import/resolver': 'meteor',
  },
}
