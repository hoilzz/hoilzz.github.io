---
layout: post
title: "Function and Prototype Chaining(1)"
description: "함수는 객체이자 값이다."
tags:
  - "javascript"
comments: true
share: true
date: 2017-6-25
---

# 자바스크립트의 함수 (1)

일단, 자바스크립트 함수가 생성되는 3가지 방식을 알아보자.

1. 함수 선언식
2. 함수 표현식
3. Function() 생성자 함수

## 함수 정의

### 1. 함수 선언식

JS에서 함수는 일반 객체 처럼 값으로 취급된다. 때문에 객체 리터럴 방식으로 일반 객체 생성하는 것처럼 `함수 리터럴`을 이용해 함수를 생성할 수 있다.

```javascript
function add(x, y){
	return x + y;
}
```

### 2. 함수 표현식

JS에서 함수는 `하나의 값`이다. (`함수는 일급 객체다`) 따라서 함수도 숫자나 문자열처럼 변수에 할당하는 것이 가능하다.

```javascript
var add = function (x, y){
	return x + y;
}

var plus = add;
```

함수 변수 add는 함수의 참조값을 가진다. 그래서 plus 변수에도 그 값을 할당할 수 있다.

C의 포인터처럼 add와 plus는 동일한 익명함수를 가리킨다.

### 3. Function() 생성자 함수를 통한 함수 생성하기

JS의 함수도 `Function()`이라는 **기본 내장 생성자 함수로부터 생성된 객체**다.
함수 선언문, 함수 표현식은 `Function()` 생성자가 아닌 함수 리터럴 방식으로 함수를 생성한다. 하지만 결국엔 `Function()` 생성자 함수로 함수가 생성된다고 볼 수 있다.

```
new Function (arg1, arg2, ..., functionBody)
```

위의 예제를 `Function()` 생성자를 이용하여 add 함수를 생성 해보자

```javascript
var add = new Function('x', 'y', 'return x + y');
```

> 함수 호이스팅
`더글라스 크락포드의 JS good parts` 에서 함수 표현식만을 사용할 것은 권하고 있다. 그 이유 중 하나가 함수 호이스팅 때문이다.
```javascript
add(2,3);
function add(x, y){
	return x + y;
}
add(3, 4)
```
1번 라인에서 add() 함수가 정의되지 않았음에도 add 함수를 호출 할 수 있다. **함수가 자신의 위치에 상관 없이 함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다.** 이것이 함수 호이스팅이다.
더글락스 크락포드는 함수 사용 전에 반드시 함수 선언해야 하는 규칙을 무시하므로 구조를 엉성하게 만든다고 지적하며, `함수 표현식`을 사용할 것을 권장했다.


## Summary
자바스크립트에서 함수는 객체이자 값이다.
- `Function()` 이라는 기본 내장 생성자 함수로부터 생성된 객체다

자바스크립트 함수 선언 방법은 총 3가지다.
- 함수 선언문
- 함수 표현식
- Function 생성자 함수

3번째 방식은 잘 쓰이지 않는다.
1번째 방식은 함수 호이스팅 때문에 권장하지 않는다.(feat. 더글락스 크락포드)
그래서 2번째 방식을 권장한다.
