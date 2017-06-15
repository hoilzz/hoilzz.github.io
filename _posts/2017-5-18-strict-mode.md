---
layout: post
title: "Strict Mode"
description: "Strict Mode 왜쓰고, 헷갈렸던 부분에 대해 알아본다."
tags:
  - "javascript"
  - "strict mode"
comments: true
share: true
date: 2017-5-18
---

# strict mode

JS가 묵인했던 에러들에 대해 에러를 발생시킨다.

- 암시적으로 선언한 변수 사용
- 읽기 전용 속성에 값을 할당
- 확장할 수 없는 개체에 속성 추가

와 같은 코드에 에러를 발생시킨다.

이렇게하면 JS 엔진이 최적화 작업을 하는 데에 어렵게 만드는 실수들을 고칠 수 있다.

## 개념

**use strict**에서 프로그램이나 함수는 `Strict Context`에서 동작한다.

- Global 객체에 접근하는 것과 같은 덜 안전한 행위에 대해 에러를 던진다.
- 불명확하고 미숙한 기능은 제거된다.
- 일반적인 코딩 실수 발견시 예외가 발견된다.

즉 개발자에게 더 자세한 정보를 제공하여 꼼꼼한 코드를 짜도록 도와준다.

### Variables and Properties

#### Varaibles

`foo = bar`와 같은 표현은 사용할 수 없다. 이와 같은 표현식은 기존에 `window.foo`에 할당되었지만 이제는 예외를 던진다. 까다로운 버그를 만들어 내기 때문이다.

#### properties

`writable: false`, `configurable: false`, `extensible: false`에서 각각 프로퍼티 값을 변경 / 프로퍼티 삭제 / 객체에 프로퍼티 추가 불가능하다. strict mode에서 시도시 에러 발생한다.

```javascript
var foo = "test";
function test(){}
delete foo; // Error
delete test; // Error

function test2(arg) {
  delete arg; // Error
}
```

> delete는 오브젝트의 property를 제거한다.
- 만약 프로퍼티가 non-configurable 이라면 strict-mode에서 Global_object/SyntaxError를 던진다.

### eval

`'eval'`을 사용하여 뭔가 만들 수 없다.

eval로 정의하는 것도 안된다.

### Functions

arguments 객체에 뭔가 할당할 수 없다.

```javascript
arguments = [...] // not allowed
```

동일한 이름을 가진 인자 2개를 만들 수 없다.

특정 함수의 arguments와 caller 프로퍼티에 접근 불가능하다. 이 프로퍼티를 만들지 못하도록 금지됐다.

```javascript
function outerFunc(){
	function innerFunc(){
		outerFunc.arguments = ...; // Error
		innerFunc.caller = ...; // Error
	}
}
```

`arguments.callee`에 접근시 예외를 던진다. 함수에 이름을 지정하여 참조하자.

> arguments.callee는 arguments의 프로퍼티다. 현재 실행 중인 함수를 참조하는데 쓰인다. 익명 함수에서 유용하다.

[arguments.callee는 왜 es5 strict mode에서 제외 됐을까 From mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee)

## Securing JS

Strict mode는 `secure` JS를 쓰기 쉽게 만들어준다.

몇몇 웹사이트는 유저가 JS를 쓸 수 있는 방식을 제공한다. 브라우저에서 JS는 유저의 private 정보에 접근할 수 있다. 그래서 금지된 함수에 접근하는 것을 감지하기 위해 JS는 실행되기 전에 부분적으로 변형되어야 한다. JS의 유연성은  런타임에서 확인 없이 그것을 효과적으로 불가능하도록 한다. 특정 언어의 함수는 너무 pervasive 해서 런타임 체크를 수행하는 것이 고려할만한 퍼포먼스 비용을 가진다.

첫째로, strict mode에서 `this`로 전달된 값은 강제로 객체가 되지 않는다.(a.k.a. "boxed")

평범한 함수의 경우, 이것은 항상 객체다: object의 값 this로 호출한다면

normal function에서, `this`는 항상 object다:either the provided object if called with an object-valued this; the value, boxed, if called with a Boolean, string, or number this; or the global object if called with an undefined or null this. (특정 `this`를 명시하기 위해 `call`, `apply`, or `bind`를 사용해라).

*automatic boxing* 은 퍼포먼스 비용 뿐만 아니라 브라우저에서 전역 객체를 노출시키는 것은 보안상의 위험이 있습니다. 왜냐하면 global object는 `secure` JS 환경에서는 제한해야만 하는 함수에 대해 접근 가능하게 한다. 따라서 strict mode function의 경우, 명시된 `this`는 객체가 아니고 만약 명시가 안되있다면 `this`는 `undefined`다.

```javascript
"use strict";
function fun() { return this; }
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
```

strict mode function에서 `this`를 통해 브라우저에서 더이상 `window` object를 참조할 수 없다.

**결론은 `this`값을 `call`, `apply`, `bind`를 통해 명시하지 않고 global로 빠져나가게 구현했을 경우 global이 할당되지 않고 undefined가 된다.**

이걸 굳이 해석한 이유는 내가 실제로 이것때문에 하루종일 고생해서다...

## 예제


*Controller.js has model*
```javascript
Controller.prototype.showAll = function(){
	var self = this;
	this.model.read(function(data){
		this.view.render('showLists', data);
	})
}
```

*Model.js has Storage*
```javascript
Model.prototype.read = function(callback){
	this.storage.findAll(callback);
}
```

*storage.js*
```javascript
Storage.prototype.findAll = function(callback){
	callback = callback || function(){};
	callback(JSON.parse...);
}
```

일단 에러는 마지막 storage.js의 callback 실행시 발생한다.
왜냐하면 `callback`은 첫번째 코드의 `this.view.render(..)`이다.

`this`는 어떤 오브젝트의 프로퍼티로 된 함수에서 실행시 그 오브젝트를 가리킨다. 만약 함수명으로 단독으로 실행시 `this`는 window(global)이다. 그래서 `this`값은 Window다. 여튼 이걸 해결 하기 위해서는 첫번째 코드에서 self를 자유변수로 활용한 클로저를 이용해야 한다.

그리고 문제는!!!

3번째 코드에서 callback 수행시 this는 window를 가리켜야하지만 undefined를 가리킨다.

원인은 `strict mode`에서 this는 global로 빠져나가는 상황이면 undefined가 할당된다. 이유는 위에 나와 있듯이 접근 제한해야 하는 함수에 대한 접근 권한을 줄 수 있기 때문이다.


## 참고

[strict mode in mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)
