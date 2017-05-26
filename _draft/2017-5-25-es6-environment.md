# ES6 개발환경 구축하기 with webpack and ESLint

현재 모든 브라우저가 ES6문법을 완벽하게 지원하지 못한다.
그래서 ES6으로 작성된 코드를 ES5 문법으로 transpile하여 배포해야 한다.
`babel`과 `bundle`을 제공하는 `webpack`을 활용하면 된다.
또한, `ESLint`를 이용하여 ES6에 맞는 JS 코드를 작성하자.
(`EsLint`도 Webpack을 통해 preload할 수 있다.)

> ESLint
pluggable js linter(실행하지 않고 잠재적인 오류를 찾아주는 정적 분석)로, JS Hint가 제공하는 기능과 JSCS가 제공하는 코드스타일 체크 기능 모두 제공한다. ESLint는 사용자가 원하는 지원환경 선택 가능하다. 기본적으로 ECMASCript5를 지원한다. 옵션을 바꿔 ECMAScript6 or JSX 지원환경을 만들 수 있다.

> webpack
JS를 범용적으로 사용하기 위해 모듈화가 필요하다. 모듈화는 총 3가지로 이뤄진다.
1. scope : 모든 모듈은 자신만의 독립적인 실행 영역이 있어야한다. JS 언어 특성상 전역과 지역변수를 분리하는 것이 중요하다.
2. definition : 모듈 정의는 exports 객체를 이용한다.
3. Usage : 모듈 사용은 `requrie` 함수를 이용한다.
브라우저는 모듈화를 지원하기 위해 Common JS or AMD의 스펙을 구현한 많은 라이브러리가 있다. 그 중 Require JS 대표적이다. `<script>` 태그 없이 AMD 스타일의 모듈을 구현한 스크립트를 동적으로 로드할 수 있도록 하는 라이브러리다.
Webpack은 모듈 번들러로, 의존성을 가진 모듈을 다루고, 그 모듈로부터 정적인 asset을 생성한다.
