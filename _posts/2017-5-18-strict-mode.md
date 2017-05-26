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
또한, *JS 엔진이 최적화 작업을 하는 데에 어렵게 만드는 실수들을 고친다.* 이게 뭔소릴까?


## Strict mode for global



## Strict mode for functions


## 엄격한 모드 변경

구문과 런타임 동작을 모두 변경한다.


### 실수를 에러로 바꾸기

1. 글로벌 변수 생성 금지.

```javascript
"use strict";

mistypedVar = 17;
```

global 변수가 존재하는 것으로 가정하고, 해당 라인은 ReferenceError을 던진다.



2. *할당되지 않은 과제를 유발할 수 있는 과제를 만든다?*

```javascript
"use strict";

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // throws a TypeError
```

3. undeletable 속성을 삭제한다.

... 등등

### Securing JS

Strict mode는 `secure` JS를 쓰기 쉽게 만들어준다. 몇몇 웹사이트는 유저가 JS를 쓸 수 있는 방식을 제공한다. 브라우저에서 JS는 유저의 private 정보에 접근할 수 있다. 그래서 금지된 함수에 접근하는 것을 감지하기 위해 JS는 실행되기 전에 부분적으로 변형되어야 한다. JS의 유연성은  런타임에서 확인 없이 그것을 효과적으로 불가능하도록 한다. 특정 언어의 함수는 너무 pervasive 해서 런타임 체크를 수행하는 것이 considerable performance cost를 가진다. 소수의 strict mode
*Certain language functions are so pervasive that performing runtime checks has considerable performance cost. A few strict mode tweaks, plus requiring that user-submitted JavaScript be strict mode code and that it be invoked in a certain manner, substantially reduce the need for those runtime checks.*

첫째로, strict mode에서 `this`로 통과된 값은 강제로 객체가 되지 않습니다. normal function에서, `this`는 항상 object다:either the provided object if called with an object-valued this; the value, boxed, if called with a Boolean, string, or number this; or the global object if called with an undefined or null this. (특정 `this`를 명시하기 위해 `call`, `apply`, or `bind`를 사용해라). *automatic boxing* 은 퍼포먼스 비용 뿐만 아니라 브라우저에서 전역 객체를 노출시키는 것은 보안상의 위험이 있습니다. 왜냐하면 global object는 `secure` JS 환경에서는 제한해야만 하는 함수에 대해 접근 가능하게 한다. 따라서 strict mode function의 경우, 명시된 `this`는 객체가 아니고 만약 명시가 안되있다면 `this`는 `undefined`다.

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
