---
layout: post
title: "HTTP Header : Accept VS Content-Type"
description: "Accept와 Content-Type의 차이가 뭘까"
tags:
  - "http"
  - "http-header"
comments: true
share: true
date: 2017-6-11
---

# Accept VS Content-Type

일단 내가 대충 알고 있던 개념은..

`Accept`는 클라가 서버에게 요청 보낼 때  "내가 허용하는 MIME-type은 이거야" 라고 말하는 것이다. (plain text, html, json, etc.)

`Content-Type`은 서버가 response를 보낼 때 브라우저에게 "나는 이런 type 리턴할거야" 라고 말하는 것이다.

라고 알고 있었는데, request에 `Content-Type`이 포함된 경우도 있다.

뭐지?? 이번 기회에 제대로 정리해보자.

## Accept

HTTP client가 Accept header를 통해 클라이언트가 서버에게 말한다.
**"내(클라이언트)가 accept하는 content type의 종류는 이거야"**

## Content-Type

클라이언트가 어떤 컨텐츠 타입을 실제로 보내는가를 기록한다.

`put`, `post`는 request와 response에도 `Content-Type`이 포함된다.

---

**그러나, HTTP requests는 `Content-Type`헤더에 포함한다.**

**왜때문일까..?**

`POST`나 `PUT` request를 생각해보자. 얘네의 경우, 클라이언트가 실제로 많은 데이터를 보낸다. 그리고 `Content-Type` header는 서버에게 데이터가 실제로 무엇인지 말한다. (그리고나서 서버가 그것을 파싱하는 방법을 결정한다.)

특히, POST 요청의 경우에 HTML form 제출 결과, 요청의 `Content-Type`은 standard form Content-Type 중 하나가 될 것이다. (`<form>`태그의 `enctype` attribute에 의해 명시된 것처럼)

	- application/x-www-form-urlencoded : 파일 업로드 지원하지 않는다. 기본값이고, 간단한 ASCII text의 작은양에 대해 적은 오버헤드
  - multipart-form-data : file upload를 지원한다. 큰 사이즈의 non-ASCII text나 binary data에 대해 효율적이다.


## Summary

`Accept`는 클라가 서버에게 특정 media type으로 달라고 요청하는 거다.

`Content-Type`은 클라이언트가 request에 보내는 body(데이터)의 media type을 알려준다. 왜냐하면 서버는 이걸 보고 파싱 방법을 결정해야 하기 때문이다.


## 참고

[https://slipp.net/questions/224](https://slipp.net/questions/224)

[https://webmasters.stackexchange.com/questions/31212/difference-between-the-accept-and-content-type-http-headers](https://webmasters.stackexchange.com/questions/31212/difference-between-the-accept-and-content-type-http-headers)

[RFC-Accept](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.1

[RFC-Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17)
