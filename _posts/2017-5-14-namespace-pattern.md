---
layout: post
title: "Namespace pattern에 대해 알아보자."
description: "Namespace pattern"
tags:
  - "javascript"
  - "pattern"
comments: true
share: true
date: 2017-5-14
---

# Namespace Pattern

> 구분이 가능하도록 정해놓은 범위나 영역을 의미
이름 그대로, 이름 공간을 선언하여 다른 공간과 구분 지음

## 객체 리터럴 네임 스페이싱

하나의 전역 객체 생성한 다음, 함수, 객체, 변수를 이 전역객체에 추가하여 구현
이 방법은 JS 라이브러리나 서드 파티 코드와의 이름 충돌 방지.

하지만 모든 변수, 함수에 상위 객체명을 붙여야 하기 때문에 코드 양이 많아진다.
또한, 매번 객체에 접근 시 체인이 길어지고 이름이 중첩된다.

```javascript
var globalVar = {};

globalVar.num = 1;

globalVar.increaseNume = function(){
	...
}
```

## 범용 네임스페이스 함수

**이미 있는 것을 재정의하는 일을 방지하기 위해 사용**
있는 것을 체크하지 못하면 내용을 덮어쓰는 문제가 발생

```javascript
if(typeof app === "undefined") {
	var app = {};
}

var app = app || {};
```

네임 스페이스는 주로 모듈 패턴과 함께 사용된다.
