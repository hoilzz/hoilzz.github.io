---
layout: post
title: "Scope chain에 대해서"
description: "그림 예제와 함께 쉽게 알아보자-"
tags:
  - "javascript"
comments: true
share: true
date: 2017-6-12
---

# Scope Chain

얘를 이해해야

- 변수에 대한 메커니즘
- 현재 사용되는 변수가 어디에서 선언된 변수

인지 알 수 있다.

Javascript에도 유효 범위가 존재한다.

C코드를 또 예로 들어보자.
`{}`로 묶여 있는 범위 안에서 선언된 변수는 블록이 끝나는 순간 사라진다.
if, for, 함수 에서 한 블록으로 묶여 그 안에서 선언된 변수는 밖에서 접근이 불가능하다.

하지만 Javascript에서는 `{}` 블록은 for, if 문과 같은 구문에서 유효 범위가 없다.
오직 `함수` 만이 유효 범위의 한 단위가 된다.

이 유효 범위를 나타내는 스코프가 `[[scope]]` 프로퍼티다.

**함수 객체 내에서 연결 리스트 형식으로 관리 된다.**
이를 `스코프 체인`이라고 한다.

이러한 스코프 체인은 다음과 같이 각 실행 컨텍스트의 VO가 구성 요소인 리스트와 같다.

|index|스코프체인|
|:--:|:-------:|
|3|...|
|2|VO 2|
|1|VO 1|
|0|VO 0|

**각각의 함수는 `[[scope]]` 프로퍼티로 `자신이 생성된 실행 컨텍스트의 스코프 체인을 참조`한다.**

함수가 실행되는 순간 실행 컨텍스트가 만들어지고,

이 실행 컨텍스트는 실행된 함수의 `[[scope]]` 프로퍼티를 기반으로 새로운 스코프 체인을 만든다.

예제 3가지를 보자.

## 1. 함수를 호출한 경우 생성되는 실행 컨텍스트의 스코프 체인

```javascript
var a=1;
var b=2;

function func(){
  var a = 10;
  var b = 20;
  console.log(a); // 10
  console.log(b); // 20
}

func();
console.log(a); // 1
console.log(b); // 2
```

이 예제 실행시

- 전역 실행 컨텍스트 생성
  - func() 함수 객체 생성

이 함수 객체의 `[[scope]]`는 ?

함수 객체 생성시 그 함수 객체의 `[[scope]]`는 현재 실행되는 컨텍스트의 VO에 있는 `[[scope]]`를 그대로 가진다.
따라서, func 함수 객체의 `[[scope]]`는 전역 변수 객체가 된다.

```javascript
func();
```

함수 실행하였으므로 새로운 컨텍스트가 생성된다.

이 컨텍스트의 스코프 체인은 실행된 함수의 `[[scope]]` 체인을 복사한 후, 현재 생성된 변수 객체를 스코프 체인의 맨 앞에 추가한다.

![scope chain 1](/images/scope-chain/scope_chain_1.png)


## 함수 안에서 함수를 선언

```javascript
var a = "global";

function printStr(){
  var a = "not global";

  function getStr(){
    return a;
  }
  console.log(getStr());
}
printStr();
```

![scope chain 2](/images/scope-chain/scope_chain_2.png)

## 전역객체에서 함수 2개 선언 후, 함수 내부에서 함수 실행

```javascript
var a = "global";

function getStr(){
  return a;
}

function printStr(func){
  var a = "not global";
  console.log(func());
}
printStr(getStr);
```

이 예제는 각 **함수 객체가 처음 생성될 당시**  실행 컨텍스트가 무엇인지 생각해야 한다.

각 함수 객체가 **처음 생성시** `[[scope]]`는 전역 객체의 `[[scope]]`를 참조한다.
따라서 **각 함수가 실행될 때** 생성되는 실행 컨텍스트의 스코프 체인은 전역 객체와 새롭게 만들어진 VO가 추가된다.
그래서 앞의 예제와 다른 출력값이 된다.

![scope chain 3](/images/scope-chain/scope_chain_3.png)


## Summary

스코프체인은 두 차례에 걸쳐서 만들어진다.

1. 함수 객체 생성시
  - 현재 실행되는 컨텍스트의 VO에 있는 `[[scope]]` 객체를 가진다.

2. 함수 객체가 실행시
  - 현재 실행되는 함수 객체의 `[[scope]]` 프로퍼티를 복사한다. (이게 헷갈리는데 1번의 `[[scope]]` 프로퍼티를 말한다.)
  - 복사하고, 새롭게 생성된 변수 객체를 해당 체인의 제일 앞에 추가한다.
