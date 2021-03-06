module.exports = {
  env: {
    es6: true,
    jasmine: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:lodash/recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
  ],
  ignorePatterns: ['pm2.*config.js', '.eslint*.js', 'jest.config.*js'],
  overrides: [
    {
      files: 'src/apps/index.js',
      rules: {
          'security/detect-non-literal-require': 1
      }
    },
    {
      files: 'database/**/*.js',
      rules: {
          'filenames/match-exported': [ 2, "kebab" ],
          'filenames/match-regex': [2, '^[0-9a-z-_]+$', true],
          'new-cap': 2,
          'sort-keys': ["error", "asc", {"caseSensitive": true, "natural": false, "minKeys": 2}],
          'no-unused-vars': ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      }
    },
    {
      files: 'src/apps/**/controllers/**/*.js',
      rules: {
          'max-len': ['error', 85],
      }
    },
    {
      files: 'src/model/**/*.js',
      rules: {
          'sort-keys': 0,
          'new-cap': 0,
      }
    },
    {
      files: 'config/**/*.js',
      rules: {
          'max-len': 0,
          'no-process-env': 0,
      }
    },
    {
      files: 'bin/*.js',
      rules: {
        'node/shebang': 0,
      },
    },
    {
      files: '.eslint*.js',
      rules: {
        'filenames/match-regex': [2, '^.[a-z_-]+$', true],
      },
    },
    {
      excludedFiles: [
        'jest.config.unit.js',
      ],
      files: 'test/**/*.js',
      rules: {
        'lodash/prefer-noop': 'off',
        'filenames/match-regex': [2, '^[0-9a-z_-]+(.test)?$', true],
        'max-len': ['error', 90],
        'node/no-extraneous-require': 0,
        'node/no-missing-require': 0,
        'node/no-unpublished-require': 0,
      },
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'filenames',
    'jest',
    'lodash',
    'mocha',
    'security',
    'sort-class-members',
    'sort-imports-es6',
    'sql-template',
  ],
  root: true,
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'off',
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: 'off',
    'comma-spacing': 'error',
    'comma-style': 'error',
    complexity: 'off',
    'computed-property-spacing': 'error',
    'consistent-return': 'off',
    'consistent-this': ['error', 'self'],
    curly: 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'smart'],
    'filenames/match-regex': [2, '^[a-z-]+$', true],
    'func-names': ['error', 'as-needed'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'generator-star-spacing': ['error', 'before'],
    'id-length': [
      'error',
      {
        max: 25,
        exceptions: ['_', 'e', 'i', 't'],
      },
    ],
    'id-match': [
      'error',
      '^_$|^[a-zA-Z][a-zA-Z0-9]*$|^[A-Z][_A-Z0-9]+[A-Z0-9]$',
      {
        onlyDeclarations: true,
        properties: true,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jest/consistent-test-it': ['error'],
    'jest/no-alias-methods': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lodash/import-scope': 'off',
    'lodash/prefer-lodash-chain': 'off',
    'lodash/prefer-lodash-method': [2, {
      'ignoreMethods': [
        'find',
        'reduce',
        'split'
      ]
    }],
    'max-depth': 'error',
    'max-len': ['error', 80],
    'max-nested-callbacks': 'off',
    'max-params': ['error', 4],
    'mocha/no-exclusive-tests': 'error',
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'error',
    'newline-before-return': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'off',
    'no-continue': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-extra-boolean-cast': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-label': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-iterator': 'error',
    'no-label-var': 'off',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-requires': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-native-reassign': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-restricted-modules': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sync': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': ['error', { allow: [ '__']}],
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'warn',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'node/exports-style': ['error', 'module.exports'],
    'node/no-extraneous-require': [
      'error',
      {
        allowModules: [],
        resolvePaths: ['database', 'src'],
        tryExtensions: [],
      },
    ],
    'node/no-missing-require': [
      'error',
      {
        allowModules: [],
        resolvePaths: ['src/'],
        tryExtensions: ['.js'],
      },
    ],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    radix: 'error',
    'require-await': 'error',
    'require-yield': 'error',
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'sort-imports-es6/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        natural: true,
      },
    ],
    "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    'sort-vars': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never' },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'sql-template/no-unsafe-query': 'error',
    strict: 'off',
    'template-curly-spacing': 'error',
    'valid-jsdoc': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: 'error',
  },
  noInlineConfig: true,
  reportUnusedDisableDirectives: false
};
