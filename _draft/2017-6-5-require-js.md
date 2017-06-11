# 모듈화

JS를 범용적으로 사용하기 위해 `모듈화`가 필요하다.
모듈화에는 `CommonJS`와 `AMD`가 있다.

## CommonJS

서버사이드 JS의 주요 쟁점

- 서로 호환되는 표준 라이브러리가 없다.
- DB에 연결할 수 있는 표준 인터페이스가 없다.
- 다른 모듈을 삽입하는 표준 방법이 없다
- 코드를 패키징해서 배포하고 설치하는 방법이 필요하다.
- 의존성 문제까지 해결하는 공통 채키지 모듈 장가 필요하다.

위 문제점을 해결하기 위해 `모듈화`가 필요하다.
CommonJS에서는 **이 모듈을 어떻게 정의하**고, **어떻게 사용할 것인가**에 대한 것이다.

## 모듈화

- 스코프 : 모든 모듈은 자신만의 독립적인 실행 영역이 있어야 한다
- 정의 : 모듈 정의는 exports 객체를 이용한다
- 사용 : 모듈 사용은 require 함수로 이뤄진다.

모듈은 자신만의 독립적인 실행 영역이 있어야한다. 따라서 전역변수와 지역변수를 분리하는 것이 매우 중요하다. 서버사이드 JS의 경우에는 파일마다 독립적인 파일 스코프가 있기 떄문에 파일 하나에 모듈 하나를 작성하면 간단히 해결된다. 즉 서버사이드 JS는 아래와 같이 작성하더라도 전역변수가 겹치지 않는다.

*fileA.js*

```javascript
var a = 3;
b = 4;
```

*fileB.js*

```javascript
var a = 5;
b = 6;
```

두 모듈 사이에 정보 교환이 필요하다면 `exports`라는 전역객체를 통해 공유하게 된다.

*fileA.js*

```javascript
var a = 3;
b = 4;
exports.sum = function(c, d){
	return a + b + c + d;
}
```

*fileB.js*

```javascript
var a = 5;
b = 6;

var moduleA = require('fileA');
moduleA.sum(a,b);
```

위의 예는 모든 파일이 로컬 디스크레 있어 필요할 떄 바로 불러올 수 있는 상황을 전제로 한다. 즉, 서버사이드 JS 환경을 전제로 한다.

하지만 이런 방식의 브라우저에서는 결정적인 단점이 있다. **필요한 모듈을 모두 내려받을 때까지 아무것도 할 수 없다.** 이 단점을 극복하기 위해 `<script>` 태그를 동적으로 삽입하는 방법이 무난하다.

### 비동기 모듈 로드 문제

JS가 **브라우저에서 동작할 때** 서버 사이드 JS와 달리 **파일 단위의 스코프가 없다.** `<script>` 태그를 이용하여 **fileA,B를 차례로 로드하면, fileB의 변수가 fileA의 변수를 모두 덮어쓰게 되는 전역변수 문제가 발생**한다.

이러한 문제를 해결하기 위해 CommonJS는

- **서버 모듈을 비동기적으로 클라에 전송할 수 있는 모듈 전송 포맷**을 추가로 정의
- 따라서, 서버사이드에서 사용하는 모듈을 브라우저에서 사용하는 모듈과 같이 전송 포맷으로 감싸면 서버 모듈을 비동기적으로 로드할 수 있게 된다.


*서버측에서 사용하는 모듈*

```javascript
// complex-number/plus-two.js
var sum = require('./math').sum;
exports.plusTwo = function(a){
	return sum(a,2);
}
```

*브라우저에서 사용하는 모듈*

```javascript
//complex-number/plus-two.js

require.define({"complex-numbers/plus-two"}: function(require, exports){
// 콜백 함수 안에 모듈을 정의한다.
var sum = require('./complex-number').sum;
exports.plusTwo = function(a){
	return sum(a,2);
};
}, ["complex-numbers/math"]);
// 먼저 로드되어야 할 모듈을 기술한다.
```

`require.define()` 함수를 통해 (함수 클로저) 전역 변수를 통제하고 있다.


## AMD

CommonJS와의 차이점은 `모듈 로드`에 있다.

서버측에서 필요한 파일이 모두 로커렝 있는 경우, CommonJS 명세가 AMD 방식보다 간결하다.
반면 필요한 파일을 네트워크를 통해 받아야 하는 브라우저에서는 AMD가 CommonJS보다 더 유연한 방법 제공한다.


### 정의

Require js의 바탕이 되는 AMD(Asynchronous Module Definition)를 살펴보자.
`require()`, `exports` 형태의 모듈 정의 등을 통해 CommonJS와 닮은 것을 볼 수 있다.

- `define()` 함수로 파일 스코프의 역할을 대신한다. (브라우저 환경의 JS는 파일 스코프가 따로 존재하지 않는다.)
	- 즉, 일종의 네임스페이스 역할을 하여 모듈에서 사용하는 변수와 전역변수를 분리한다.
	- 물론 `define()`은 전역함수다.

### define()

전역함수다

```
define(id?, dependencies?, factory);
```

id
- 모듈 식별하는데 사용하는 인수(option)
- id가 없으면 로더가 요청하는 `<script>` 의 `src`를 id로 설정
- 특별히 명시할 경우 아니면 사용하지 않는다.

dependencies
- 모듈의 의존성을 나타내는 배열(option)
- 반드시 먼저 로드되야 하는 모듈을 나타낸다.
- 여기서 적힌 모듈들은 세 번쨰 인수인 팩토리 함수의 인자로 넘겨진다.
- 생략하면 `['require', 'exports', 'module']` 이라는 이름이 기본 지정.

factory
- 모듈이나 객체를 인스턴스화하는 실제 구현을 담당
- 함수면 싱글톤으로 한 번 실행
- 반환되는 값이 있다면 그 값을 `exports` 객체의 속성값으로 할당
- 객체면 `exports` 객체의 속성값으로 할당


### 전역변수와 define.amd 프로퍼티

AMD 명세에서 정의하는 전역 변수

- define

CommonJS에서 사용하는

- require 객체
- exports 객체

그리고 전역 모듈을 명시적으로 가리킬 때 사용하는 `define.amd` 프로퍼티도 사용 가능하다.  그 밖에 다른 전역 변수나 메서드(or 프로퍼티)를 추가하지 말자.

### AMD로 정의한 모듈 예시

3가지 인수를 모두 사용하는 기본 AMD 모듈을 보자.

```javascript
define('alpha', ['require', 'exports', 'beta'],

	function(require, exports, beta){
		exports.verb = function(){

			// 넘겨받은 인수를 사용해도 된다.
			return beta.verb();

			// 또는 require()를 이용하여
			// 얻어 온 모듈을 사용해도 된다.
			return require('beta').verb();

		}
	})
```

alpha라는 모듈을 정의할 때, beta 모듈이 필요하다는 것을 나타낸다.

---
---
---
---

# RequireJS - AMD의 이해와 개발

RequireJS를 이용하여 라이브러리 차원에서 의존성 관리를 할 수 있다.

AMD는 동적 로딩, 의존성 관리, 모듈화에 대한 해결책을 제시한다.

## 동적 로딩

`<script>`태그는 페이지 렌더링을 방해한다.
HTTP요청, 다운로드, 파싱, 실행이 일어나는 동안 브라우저는 다른 동작을 할 수 없다.
사용자 입장에서는 화면이 느리게 보인다. 그래서 최적화 기법 중 하나로 `<script>`를 `body` 태그의 마지막 부분에 배치하는 방법이 있다.

하지만 이러한 방법은 첫 인터랙션이 가능할 때 까지의 총 시간을 줄일 순 없다.
화면이 복잡하고 AJAX를 많이 수행하는 규모에서 이 시간이 큰 폭으로 커진다.
웹앱은 AJAX로 전환되는 여러 view를 가지고 있는 경우가 흔하다. **더 최적화를 하자면 `첫 렌더링과 인터랙션에 필요한 JS만 먼저 로딩`하고 후에 `사용자의 반응에 따라 나머지를 로딩하는 점진적인 방식이 필요`하다.**

Dynamic loading(lazy loading)은 페이지 렌더링에 방해하지 않으면서 필요한 파일만 로딩할 수 있다. 이를 구현하는 방법 중 하나로 `<script>` 태그의 동적 삽입이 있다. 이는 JS로 `<script>`태그를 생성하여 추가하는 방법이다. 이외에도 `XMLHttpRequest`, `document.write()`, `defer` 같은 방법이 있지만 범용적으로 사용하기에는 치명적인 단점이 하나씩은 있다. 그래서 `<script>`태그의 동적 삽입이 제일 안전하다.

```javascript
var scriptEl = document.createElement('script');
scriptEl.type = 'text/javascript';
scriptEl.src = 'example.js';
document.getElementsByTagName('head')[0].appendChild(scriptEl);
```

이를 응용하여, URL을 매개변수로 받아 범용적인 동적 로딩 함수를 만들 수 있다.
그리고 로딩 완료 이벤트 처리가 가능하므로 안전하게 해당 파일의 변수나 함수를 사용할 수 있다. 즉, 비동기로 동작하며 로딩 완료 이벤트 핸들러는 콜백 하수다.

```javascript
function loadScript(url, callback){
	var scriptEl = document.createElement('script');
	scriptEl.type = 'text/javascript';
	scriptEl.onload = function(){
		callback();
	};
	scriptEl.src = url;
	document.getElementsByTagName('head')[0].appendChild(scriptEl);
}

loadScript('example.js', function(){
	// example.js 로딩 완료 후 실행
})
```

하지만 파일이 여러개 필요하고, 그 순서를 지켜야할 경우 다음과 같은 콜백 지옥에 빠진다.

```javascript
loadScript('file1.js', function () {
    loadScript('file2.js', function () {
        loadScript('file3.js', function () {
            loadScript('file4.js', function () {
                // 콜백 지옥..
            });
        });
    });
});
```

## 의존성 관리

JS는 스크립트 간 의존성 파악이 힘들다. C처럼 `#include` 와 같은 키워드가 없다.

`loadScript()` 함수는 `#include` 함수를 따라할 수 있다. 하지만 파일 이름으로 사용하려는 함수나 객체의 이름을 유추할 수 있다는 보장은 없다.

유틸리티성 함수를 모아놓은 객체가 있다고 가정하자. 보통 그 객체를 전역 변수 util로 할당하고 사용할 것이다.
하지만 이 객체를 불러오는 강제적이고 유일한 방법을 구현해야 하므로 객체 이름과 비밀 공간에 넣을 함수가 필요하다.
그 함수를 사용하여 객체 정의하는 방식은 다음과 같다.

```javascript
defineModule('util', {
	trim: function(){

	},
	extend: function(){

	}
})

...

var util = loadModule('util');
util.trim();
```

## 모듈화

**스크립트 내부에서만 사용하는 변수, 함수들은 전역 공간에 둘 필요가 없다.**
`전역 변수 남발`과 이로 인한 충돌은 유지보수에 막대한 영향을 미친다.
스크립트의 모듈화는 이를 방지한다.

기본 모듈 패턴은 다음과 같다.
return으로 외부에서 접근할 변수와 함수만 골라서 노출할 수 있다. 외부에 노출할 필요가 없는 변수와 함수는 클로저를 이용하여 전역 공간에 노출시키지 않고 이용 가능하다.

```javascript
모듈 패턴
```


## RequireJS


### 모듈 정의와 사용

```javascript
// js/foo.js

// 모듈 정의
define([ // 의존 모듈들을 나열한다. 모듈이 한 개라도 배열로 넘기자.
	'js/util',
	'js/Ajax',
	'js/Event'
], function(util, Ajax, Event){ // 의존 모듈들은 순서대로 매개변수에 담긴다.
	//의존 모듈 로딩이 완료되면 이 함수를 실행

	var i = 0;

	function increase(){
		i++;
	}
	funtion get(){
		return i;
	}

	return {
		increase: increase,
		get: get
	}
});

// js/main.js

require([
	'js/foo'
], function(foo){
	console.log(foo.get()); // 0
	foo.increase();
	console.log(foo.get()); // 1
});
```

- 모듈 이름 명시적 정의 가능하지만 **이름 없는 모듈로 정의 하는 것 권장**
	- 개발시 파일명, 위치는 자주 변경 되므로 유연한 상태로 두자

- 배열로 의존 모듈을 나열하지만 로딩순서를 보장하진 않는다.
- 순서에 상관 없이 병렬로 네트워크를 통해 다운로드 되거나 브라우저의 캐시에서 꺼내진다.
- 어떤 모듈이 먼저 로딩되어 실행 될지 모른다.
- 따라서 로딩 순서가 중요하다면 아래와 같이 require를 중첩하자.

```javascript
require(['js/first'], function (first) {
    require(['js/second'], function (second) {
        //
    });
});
```

모듈은 첫 호출시 초기화된다.
- 모듈이 처음 호출되어 로딩이 완료되면 모듈 정의 함수를 실행하고 그 결과 값을 RequireJS 내부 비밀 공간에 저장한다.
- 이후 어디에서건 같은 모듈 호출시 저장된 결과값을 반환, 모듈 정의 함수를 매번 실행하지 않는다.
- 그래서 모듈 정의 함수가 처음 생성한 클로저로 초기화 영역 내의 변수, 함수들을 계속 사용할 수 있다. 즉 모듈의 상태는 유지된다.

```javascript
/* js/first.js */
define([
    'js/foo'
], function (foo) {
    foo.increase();

    return {
        getFooValue: function () {
            return foo.get();
        }
    };
});

/* js/second.js */
define([
    'js/foo'
], function (foo) {
    return {
        getFooValue: function () {
            return foo.get();
        }
    };
});

/* js/main.js */
require([
    'js/first'
], function (first) {
    console.log(first.getFooValue()); // 1

    require([
        'js/second'
    ], function (second) {
        console.log(second.getFooValue()); // 1
    });
});
```

foo 모듈의 상태가 유지되는 것을 볼 수 있다.
다음과 같이 인스턴스 객체를 생성할 수 있는 클래스 형태의 구현도 있을 수 있다.

```javascript
/* js/Layer.js */
define(function() {
    function Layer(el) {
        this.el = el;
    }

    Layer.prototype.open = function () {
        //
    };

    Layer.prototype.close = function () {
        //
    };

    // 객체가 아닌 생성자 함수를 반환한다.
    return Layer;
});

/* js/main.js */
require([
    'js/Layer'
], function (Layer) {
    var someLayer = new Layer(document.getElementById('some-layer'));
    someLayer.open();
});
```

만약 모듈의 상태를 유지할 필요가 없다면 객체 리터럴만으로 정의 가능하다.

```javascript
define({
	trim: function(){

	},
	extend:function(){

	}
})
```

## 설정 옵션

자주 쓰는 것만 살펴보자.

```html
<script>
	// RequireJS 설정 객체
	// require.js가 로딩되면 이 객체를 자동으로 읽어 들여 반영한다.
	var require = {
		baseUrl: '/js/app',

		// 모듈의 단축 경로 지정 및 이름에 대한 별칭(alias)
		paths:{
			'lib': '../lib' // "/js/lib"와 동일
		},

		// AMD를 지원하지 않는 외부 라이브러리를 모듈로 사용할 수 있게 한다.
    shim: {
        'modernizr': { // Modernizr 라이브러리
            exports: 'Modernizr'
        }
    },

    // 모듈 위치 URL뒤에 덧붙여질 쿼리를 설정한다.
    // 개발 환경에서는 브라우저 캐시를 회피하기 위해 사용할 수 있고,
    // 실제 서비스 환경이라면 ts값을 배포한 시간으로 설정하여 새로 캐시하게 할 수 있다.
    urlArgs : 'ts=' + (new Date()).getTime()
	}
</script>
```
RequireJS는 호출하는 모듈의 위치를 찾을 때 baseUrl과 이름을 결합하여 찾는다. baseUrl이 `/js`고, 모듈이름이 `common/util`이라면 모듈의 취
