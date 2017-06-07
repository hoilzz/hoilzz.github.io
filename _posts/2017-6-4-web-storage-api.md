---
layout: post
title: "Web Storage API"
description: "aka localStorage, sessionStorage"
tags:
  - "frontend"
  - "web storage"
comments: true
share: true
date: 2017-6-4
---

# Web Storage API

> web storage API는 브라우저가 쿠키를 사용하는 것보다 훨씬 더 직관적인 방법으로 안전하게 `key: value`로 데이터를 저장할 수 있도록 도와준다.

## 개념

Web Storage는 HTML5 표준이다.

Web Storage는 대표적으로 2가지 메커니즘이 있다. 비슷한 역할을 하는 쿠키와 비교해보자.

### Cookie

- 서버와 클라측에서 쿠키 데이터를 사용하는 API가 존재
- 저장공간이 약 4kb다. (웹 스토리지에 비해 작다)
- `Expires`로 데이터 만료일을 설정한다.

### WebStorage

- 오직 클라에서만 동작한다. 즉, 쿠키처럼 요청마다 헤더에 포함되어 전송되지 않는다.
- 저장공간이 약 5MB다.
- 세션 스토리지에서 세션 유지 기간동안 사용가능한 API를 제공한다.

1. `localStorage`는 브라우저가 닫히고 다시 열려도 데이터를 유지한다.

2. `sessionStorage` 는 `page session`(페이지가 reload되고 restore되는 것을 포함하여 브라우저가 열려 있는한) 동안 이용가능하다. 세션 쿠키의 동작과는 달리 새 탭이나 윈도우에서 페이지를 열게 되면 새로운 세션 생성된다.

- 두 스토리지 모두 `window` 객체 안에 들어있고, `Storage` 객체를 상속받기 떄문에 메소드가 동일하다. 이외의 차이점은 데이터의 영구성 뿐이다.


## 사용 방법

Storage Object는 단순한 `key: value` 데이터를 저장한다. `key: value`는 모두 문자열이다. (key와 boolean, Number, null, undefined 등으로 된 값들은 모두 스트링으로 변환된다.)

> 객체 저장시 마찬가지로 String으로 변환(`.toString()`) 후 저장한다. 즉, [object 생성자] 형으로 저장된다. 이것을 피하기 위해 `JSON.stringify(obj)`를 이용하면 된다.

저장된 값은 object로 접근하거나 `Storage.get/setItem()` 으로 저장 및 접근 가능하다.

```javascript
localStorage.colorSetting = '#a4509b';
localStorage['colorSetting'] = '#a4509b';
localStorage.setItem('colorSetting', '#a4509b');
```

## Summary

- Web Storage는 String으로 저장된다.
- 보안과 관련성이 적은 사용자 설정과 같은 정보 및 자동 로그인과 같은 지속적으로 필요한 데이터를 저장할 때는 데이터가 영구적으로 보관되는 `localStorage`를 이용하자.
- `sessionStorage`는 `page session`동안 저장된다. 일회성 로그인 정보와 같은 잠깐 필요한 정보 저장시 이용하자.
