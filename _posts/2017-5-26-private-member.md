---
layout: post
title: "private, public in Javascript"
description: "JAVA의 private, public을 Javascript로 구현해보자"
tags:
  - "javascript"
  - "pattern"
comments: true
share: true
date: 2017-5-26
---

# 비공개 프로퍼티와 메서드

JS는 자바처럼 `private`, `protected`, `public` 프로퍼티와 메서드를 나타내는 문법이 없다.
객체의 모든 멤버는 `public` 상태다.

```javascript
var myobj = {
	myprop:1,
	getProp: function(){
		return this.myprop;
	}
}

console.log(myobj.myprop); // 'myprop'에 공개 접근 가능
console.log(myobj.getProp()); // getProp() 함수도 공개되어있다.
```

```javascript
function Gadget(){
	this.name = 'iPod',
	this.stretch = function(){
		return 'iPad';
	}
}
var toy = new Gadget();

console.log(toy.name);
console.log(toy.stretch());
```

## private member

`클로저`를 사용해서 구현 가능하다.
생성자 함수 안에서 클로저를 만들면, 클로저 유효범위안의 변수는 생성자 함수 외부에서 노출되지 않는다.
하지만 공개 메서드 안에서는 사용 가능하다.
즉, 생성자에서 객체를 반환시 객체의 메서드를 정의하면, 이 메서드 안에서 비공개 변수에 접근 가능하다.

위 예시를 클로저로 구현하여 private 변수를 만들자.

```javascript
function Gadget(){
	var name = 'iPod';
	this.stretch = function(){
		return name;
	}
}

var toy = new Gadget();
console.log(toy.name);  // undefined
console.log(toy.stretch());  // "iPod" 공개메서드는 name에 접근 가능
```

## 특권 메서드

비공개 멤버에 접근 권한을 가진 공개 메서드를 가리킨다. `getName()`은 비공개 프로퍼티인 `name`에 접근하지만 `특별한` 접근 권한을 가지고 있기 때문에 특권 메서드라고 볼 수 있다.

## 비공개 멤버의 허점

위 예시에서 특권 메서드는 `stretch()`다.
해당 함수가 비공개 변수의 값을 바로 반환시
**이 변수가 객체나 배열이라면 값이 아닌 `참조`가 반환되기 때문에 외부 코드에서 비공개 변수 값을 수정할 수 있다.**

```javascript
function Gadget(){
	// 비공개 멤버
	var specs = {
		screent_width:320,
		color: '#eee'
	};

	// 공개 함수
	this.getSpecs = function(){
		return specs;
	}
}

var toy = new Gadget(),
		specs = toy.getSpecs();
specs.color = "black";
specs.price = "free";
console.log(toy.getSpecs()); // 바뀐 값이 출력된다.
```

여기서 `getSpecs()` 메서드가 `specs 객체에 대한 참조`를 반환하는게 문제다.
specs는 감춰진 비공개 멤버처럼 보이지만 Gadget 사용자에 의해 변경될 수 있다.


위와 같은 해결책은 참조를 전달할 때 주의를 기울이는 수밖에 없다.
첫번째 해결책으로는 `getSpecs()`에서 **새로운 객체를 만들어** 사용자에게 필요한 데이터 일부만 담아 반환하는 것이다.
다 필요하면, 객체를 복사하는 범용 함수를 만들어 specs 객체의 복사본을 만들어서 반환하자.

대표적으로, 객체의 최상위 프로퍼티만을 복사(shallow copy), 모든 중첩 프로퍼티를 재귀적으로 복사(deep copy)가 있다.

### 객체 리터럴과 비공개 멤버

지금까지는 비공개 멤버 만들 때 `생성자`를 사용하는 방법만 봤다.
만약 `객체 리터럴`로 객체 생성한 경우엔 어떻게 할까? 이 경우에도 비공개 멤버를 구현할 수 있을까?

걍 똑같이 비공개 데이터를 함수로 감싸면 된다.
**따라서 객체 리터럴에서는 `익명 즉시 실행 함수`를 추가하여 `클로저`를 만든다.**

```javascript
var myobj;

(function(){
	// 비공개 멤버
	var name = "hoil";

	myobj = {
		getName: function(){
			return name;
		}
	}
})();
myobj.getName(); // hoil
```
익명 함수 내에서 myobj 초기화시, `var`를 사용하지 않았다.

`module` pattern으로 구현해보자.

```javascript
var myobj = (function(){
	var name = "hoil";
	return {
		getName: function(){
			return name;
		}
	}
});
myobj.getName();
```

## 프로토타입과 비공개 멤버

생성자를 사용하여 비공개 멤버를 만들 경우, 생성자를 호출하여 새로운 객체를 만들 때마다 비공개 멤버가 매번 재생성되는 문제가 있다.
생성자 내부에서 `this`에 멤버를 추가하면 항상 동일한 문제가 발생한다.
이러한 중복을 없애고 메모리 절약하려면 공통 프로퍼티와 메서드를 생성자의 `prototype` 프로퍼티에 추가해야 한다.
이렇게 하면 동일한 생성자로 생성된 모든 인스턴스가 공통된 부분을 공유하게 된다.

```javascript
function Gadget(){
	// 비공개 함수
	var name = 'iPod';
	// 공개 함수
	this.getName: function(){
		return name;
	}
}

Gadget.prototype = (function(){
	var browser = "Mobile Webkit";

	return {
		getBrowser: function(){
			return browser;
		}
	}
})();

var toy = new Gadget();
console.log(toy.getName()); // 객체 인스턴스의 특권 메서드
console.log(toy.getBrowser()); // 프로토타입의 특권 메서드
```

## Summary

- JS는 자바처럼 `private`, `protected`와 같은 문법 없다. 직접 구현해야 한다.
- `Closure`를 사용하면 구현 가능하다.
	- 생성자 함수에서 객체 반환시 객체의 메서드를 정의하고, 이 메서드 안에서 비공개 변수(this가 아닌 var로 선언한 변수)에 접근가능하다.

- 생성자로 비공개 멤버 만들 경우, 생성자 호출할 때마다 비공개 멤버가 만들어져서 메모리 낭비하는 문제가 발생한다.
- `prototype` 프로퍼티에 추가하자.
