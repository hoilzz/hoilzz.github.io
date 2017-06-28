---
layout: post
title: "Function and Prototype Chaining(3)"
description: "Prototype Chaining을 통해 OOP의 상속을 구현해보자."
tags:
  - "javascript"
comments: true
share: true
date: 2017-6-28
---

# Prototype Chaining

JS는 C++, JAVA의 객체지향 언어와 다른 prototype 기반의 객체지향이다.
이를 정확히 이해 하기 위해, OOP 상속의 근간이 되는 `프로토타입`과 `프로토타입 체이닝`에 대해 알아보자

자바는 class를 정의하고 이를 통해 객체를 생성한다.

하지만 JS는 **객체 리터럴 생성자 함수로 객체를 생성**한다.
이 때 생성된 객체의 부모 객체가 생성자 함수의 prototype 객체다. 즉, 상속 개념과 동일하게 자식객체가 부모 객체가 가진 프로퍼티 접근 및 메서드를 상속받아 호출 가능하다.
(사실 상속이 아닌 프로토타입 체이닝을 통해 접근한다)

> 기본적인 JS 객체 생성 결과를 보자.
모든 객체는 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 부모 객체로 설정한다.
이것은 `__proto__`를 통한 프로토타입 체이닝을 통해 가능하다.

예제를 보자.

```javascript
function User(name){
	this.name = name;
}

var jack = new User('jack');
```

User.prototype은 자신과 링크된 프로토타입 객체를 가리킨다. (이 프로토타입 객체는 constructor만을 가진 객체다)
이 때, `user.__proto__`는  User.prototype이다. (궁금하면 `user.__proto__ === User.prototype // true` 해보자)

결론적으로, 객체 생성은 생성자 함수가하고, 생성된 객체의 부모는 생성자.prototype 이다.

![function prototype chaining 1](/images/prototype-chaining/prototype_chaining_1.png)


## 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝

```javascript
var cat = {
	name: 'nyang2',
	speakLoudly: function(){
		console.log("nya-");
	}
}

cat.speakLoudly();
console.log(cat.hasOwnProperty('name')); //true
```

마지막 줄의 `hasOwnProperty()` 메서드 호출이 제대로 된다. 근데 존재하지 않는 메서드를 호출했다면서 **에러가 발생하지 않는 이유**는 뭘까?
일단 객체 리터럴 방식으로 생성했을 때 생성자 함수와 프로토타입 체이닝을 살펴봐야한다.

객체 리터럴로 생성시 `Object()` 생성자를 통해 생성된다. `Object()` 생성자 함수도 `prototype` 객체를 가진다.
즉, 다음 그림과 같이 cat은 Object.prototype 객체를 `cat.__proto__`로 연결한다.

![function prototype chaining 2](/images/prototype-chaining/prototype_chaining_2.png)


이제 프로토타입 체이닝을 살펴보자.
JS에서 객체의 프로퍼티나 메서드에 접근시 해당 객체에 프로퍼티 또는 메서드가 없다고 하자.
이 때, `__proto__`가 참조하는 곳을 따라 자신의 부모 객체 즉, 생성자 함수의 프로토타입 객체의 프로퍼티 및 메서드를 검색한다.

위 예제를 예로 들어보면
`cat.hasOwnProperty` 수행시, `hasOwnProperty`를 자신의 객체에서 찾는다.
없으면, cat의 `__proto__`를 따라 부모 객체로 올라간다.
`hasOwnProperty`는 Object.prototype에 포함되어있으므로 이것을 수행한다.
(만약에 여기서 없는 메서드라면 undefined다.)

## 생성자 함수로 생성된 객체의 프로토타입 체이닝

위 개념을 동일하게 적용해보자.

```javascript
function cat(name, age){
	this.name = name;
	this.age = age;
}

var nyang2 = new Cat('nyang22', 5);

console.dir(nyang2.hasOwnProperty('name')); // true
```

프로토타입 체이닝의 종점은 `Object.prototype`객체다. 이를 통해 유추할 수 있는 것은 JS 객체는 프로토타입 체이닝을 통해
`Object.prototype`객체가 가진 프로퍼티와 메서드에 접근할 수 있다. 그래서 기본 데이터 타입 확장도 할 수 있다.

```javascript
String.prototype.extendTest = function(){
	console.log("내가 String에 메서드를 추가했수다!")
}
var str = "hoo hoo";
str.extendTest();
```

> NOTE
객체의 프로퍼티 읽기나 메서드 실행시에만 프로토타입 체이닝이 동작한다.
반대로 이 말은 객체에 있는 프로퍼티에 값을 **쓰려고** 한다면 프로토타입 체이닝이 일어나지 않는다.
그냥 쓰여진다.

```javascript
function Cat(name){
	this.name = name;
}
Cat.prototype.age = 10;

var cheese = new Cat('cheese');
var butter = new Cat('butter');

console.log(cheese.age); // 10
console.log(butter.age); // 10

cheese.age = 20; // 당연히 cheese의 age만 20으로 바뀐다.
```

## Summary

JS는 프로토타입 기반의 객체지향이다. 그래서 상속도 구현할 수 있다.
이것은 프로토타입 체이닝을 통해 가능하다.
