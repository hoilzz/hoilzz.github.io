---
layout: post
title: "Function and Prototype Chaining(1)"
description: ""
tags:
  - "javascript"
comments: true
share: true
date: 2017-6-25
---

# 함수도 객체다.

- 일반 객체처럼 `property`들을 가질 수 있다.


## 함수는 값으로 취급된다.

다시 말하자면, 함수도 일반 객체처럼 취급될 수 있다.

- 리터럴에 의해 생성
- 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
- 함수의 인자로 전달 가능
- 함수의 리턴값으로 리턴 가능
- 동적으로 프로퍼티를 생성 및 할당 가능

이와 같은 특징 때문에 자바스크립트에서 함수는 `일급 객체(First Class)`다. 일급 객체라는 말은 앞에서 나열한 기능이 모두 가능한 객체를 일급 객체라고 부른다. 이 때문에 함수형 프로그래밍이 가능하다.

### 함수 객체의 기본 프로퍼티

일반 객체와 다르게 추가로 **함수 객체만의 표준 프로퍼티** 가 있다. 다음 예제 코드로 add() 함수의 프로퍼티에 대해 알아보자.

```javascript
function add(x,y){
	return x + y;
}
console.dir(add);
```

![function prototype chaining 1](/images/function-prototype-chaining/function-prototype-2-1.png)

ES5 명세에는 모든 함수가 `length`, `prototype 프로퍼티`를 가져야 한다고 명시 되어있다.

- length : 인자 개수
- prototype 프로퍼티 : 뒤에서 자세히 설명하자.

이외에 그림에서 보이는 `name`, `caller`, `arguments`, `__proto__` 프로퍼티를 살펴보자.

- `name` : 이름이 없는 익명 함수면 빈 문자열이다.
- `caller` : 자신을 호출한 함수, 위 코드에서는 `add()`를 호출하지 않았으므로 null값이다.
- `arguments` : 전달된 인자값을 나타낸다.
- `__proto__` : 모든 자바스크립트 객체는 자신의 프로토타입을 가리키는 내부 프로퍼티(`__proto__`)를 가진다.
	- add 함수도 객체 이므로 가지고 있다. 이를 통해 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다. 여기서는 `Function.prototype`을 가리킨다.

```javascript
add.__proto__ === Function.prototype  // true
```

> Function.prototype 객체의 프로토타입 객체는?
모든 함수들의 부모 객체는 Function Prototype 객체다. Function.prototype 을 크롬 콘솔 창에 입력하면 함수인 것을 볼 수 있다. 따라서, 함수 객체 이므로 자기 자신을 부모로 갖는 것이라고 예측할 수 있다.
하지만 ES 명세서에 예외적으로 `Function.prototype` 함수 객체의 부모는 JS의 모든 객체의 조상격인 `Object.prototype 객체`라고 설명한다.

> 여튼 `Function.prototype` 객체는 모든 함수들의 부모 역할을 하는 프로토타입 객체다. 때문에 Functino prototype 객체의 프로퍼티 및 메서드를 자신의 것처럼 상속받아 사용 가능하다. 그래서 모든 함수는 다음의 것을 상속 받아 사용할 수 있다.
- `constructor` 프로퍼티
- `toString()`
- `apply(thisArg, argArray)` 메서드
- `call(thisArg, [, arg1 [, arg2,]])`
- `bind(thisArg, [arg1, [arg2]])`

### [[Prototype]]

모든 객체가 가지고 있는 내부 프로퍼티다.

객체 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.

![function prototype chaining 1](/images/function-prototype-chaining/function-prototype-2-3.png)

### prototype 프로퍼티

모든 함수는 객체로서 prototype 프로퍼티를 갖는다.

`__proto__`와 동일한 점은 프로토타입 객체를 가리킨다는 점이다.

다른 점은

어떤 함수가 생성자로 사용될 때, 이 함수로 생성된 객체의 `__proto__`는 부모 객체를 가리킨다.
이 때, `__proto__`는 **생성자 함수의 prototype**이 가리키는 객체를 부모 객체로 결정한다.

prototype 프로퍼티는 함수가 생성될 때 만들어진다.
이 때 prototype 프로퍼티가 가리키는 prototype 객체는 constructor 프로퍼티 하나만 가지고 있다.
constructor 프로퍼티는 자신과 연결된 함수를 가리킨다.

즉, JS에서 함수 생성시, 함수 자신과 연결된 프로토타입 객체를 동시에 생성하며, 다음 그림과 같이
prototype과 constructor라는 프로퍼티로 서로를 참조한다.

![function prototype chaining 1](/images/function-prototype-chaining/function-prototype-2-2.png)


## Summary

함수는 값이자 객체다. 다음 특성을 보자.
리터럴에 의해 생성, 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능, 인자값으로 전달 가능, 리턴값으로 리턴 가능, 함수 자체에 동적으로 프로퍼티를 생성 및 할당 가능

그래서 JS에서 함수는 First Class다.

함수는 기본 프로퍼티를 갖는다.
모든 함수의 부모 객체(`__proto__`)는 `Function.prototype`이다.
prototype 체이닝을 통해 Function.prototype 객체의 프로퍼티 및 메서드를 사용할 수 있다.(bind, call, apply, toString 등..)

---

**__proto__**

- 모든 객체가 가지고 있는 내부 프로퍼티다.
- 객체 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.


**prototype 프로퍼티**

- 모든 함수는 객체로서 prototype 프로퍼티를 갖는다.
	- 이 prototype 프로퍼티는 constructor 프로퍼티만을 갖는 객체를 가리킨다.
- 생성자 함수에 의해 생성된 객체는 생성자 함수의 prototype이 가리키는 객체를 부모 객체로써 참조한다.
