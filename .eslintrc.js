module.exports = {
  // eslint의 동작환경을 지정
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 기본적인 룰셋을 지정
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:functional/lite'
  ],
  // 특정 파일에만 다른 룰을 지정
  overrides: [],
  // 사용환경을 최신 자바스트립트로 가정
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // extends 옵션으로 지정한 룰셋을 덮어씌운다
  rules: {
    // var는 사용할 수 없다
    'no-unused-vars': ['error'],
    // 선언한 표현식은 반드시 사용해야 한다
    'no-unused-expressions': ['error'],
    // 불필요한 반복문은 사용할 수 없다
    'no-unreachable-loop': ['error'],
    // 도달하지 못하는 코드는 사용할 수 없다
    'no-unreachable': ['error'],
    // 파라미터는 읽기 전용이다
    'no-param-reassign': ['error'],
    // 선언하지 않은 코드를 사용할 수 없다
    'no-use-before-define': ['error'],
    // if ~ else 중첩은 허용하지 않는다
    'max-depth': [
      'error',
      {
        max: 1,
      },
    ],
    // return 문 이전에는 반드시 빈 줄이 있어야 한다
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // 삼항연산자를 허용하지 않는다
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    // 문자열 선언에는 홑따옴표를 사용한다
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // 중첩된 object 앞뒤에는 공백이 있어야 한다.
    'object-curly-spacing': ['error', 'always'],
    // 중첩된 배열 앞뒤에는 공백이 있으면 안된다
    'array-bracket-spacing': ['error', 'never'],
    // 중괄호의 스타일을 통일
    'brace-style': ['error'],
    // statemnet는 반드시 중괄호로 감싸야 하고 1줄 이상으로 작성해야 한다
    curly: ['error', 'multi-line', 'consistent'],
    // debugger 는 사용을 권장하지 않는다
    'no-debugger': ['warn'],
    // no-alert 룰과 충돌하므로 끔
    'no-restricted-globals': ['off'],
    // alert, confirm, prompt 는 사용을 권장하지 않는다
    'no-alert': ['warn'],
    // console.log 는 사용할 수 없다
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
