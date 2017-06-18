# ㅈㅅ

세종대학교 컴퓨터공학과 졸업을 앞둔 정호일이라고 합니다.

웹 개발 동아리에서 ruby on rails를 통해 전반적인 웹에 대한 공부를 하였습니다. 그 결과 혼자서 프론트엔드부터 백엔드까지 jquery, mysql, ruby on rails 등을 이용하여 웹 서비스를 배포한 경험이 있습니다.

서비스를 배포하면서 유저 인터랙션에 흥미를 갖게 되어서 프론트엔드 쪽으로 공부를 하고 있습니다.

기본을 중요시하고, 기술에 관련해서는 왜? 그리고 다른 대안과 비교했을 때의 장단점을 중요시 생각합니다.

이런 생각들을 블로그에 글을 작성하여 공유하는 것을 좋아합니다. 주로 javascript나  http 기본 지식 등 웹 프론트엔드에 관한 글이나 알고리즘을 풀고 틀린것에 대해 작성합니다.







# online test

## 1. MVC를 사용한 이유는?

시험 전에 바닐라 자바스크립트로 코드를 작성하려고 했었다. 막무가내로 작성하기엔 스파게티 코드가 될것이 뻔하다고 생각했다. 그래서 가장 무난하면서 대표적인 MVC 디자인 패턴으로 코드를 작성하기로 했다. 그 이유는 각 컴포넌트를 독립적으로 개발함으로써 유지보수 및 버그 잡기 용이하기 때문이다.

## 2. 알고리즘을 구현 못했다.

### - 이유는?

일단 제 역량 부족 및 너무 안일한 대처 때문이라고 생각한다.
먼저 역량 부족은 GMT 요구 조건을 이해하는데 오래걸렸다.
안일한 대처는 온라인테스트 시험 전에 나온 요구사항에 UI나 프레임워크는 어떤 거든 사용하도 괜찮다고 해서 알고리즘 없이 화면을 구현하는 거구나 라고 생각했다. 그래서 바닐라 자바스크립트로만 짜도 되겠다 생각했는데 생각보다 코드가 길어지고 반복적인 작업이 많아졌다. 그래서 보면 중간에 제이쿼리를 급하게 집어넣은 코드를 볼 수 있다.

### - 지금 구현 할 수 있나?

구현할 수 있다.

전제조건으로 데이터는 저장할 때 마다 시작시간 기준으로 정렬되어있다.

전체 일정 데이터를 임시로 저장한다.

새롭게 추가할 일정을 전체 데이터에 추가한다.

다시 정렬한다.

새로 추가한 일정의 인덱스를 찾는다.

총 2가지를 비교해서 일정 겹치는지 여부를 파악한다.

첫번쨰는 추가한 일정의 시작시간과 바로 앞 일정의 끝시간과 비교한다.

추가한 일정의 시작시간이 끝시간보다 작으면 겹치는 것을 확인할 수 있다.

새로운 일정의 시작시간이 끝시간보다 크면 겹치지 않으므로 마지막 관문으로 간다.

마지막으로, 새로운 일정의 끝시간이 다음 일정의 시작시간보다 작으면 겹치지 않으므로 일정을 추가한다.


## 3. 모듈을 적절하게 설계하였는가?

그렇다. 모듈패턴을 이용하였다.
모듈패턴은 객체를 핸들링하기 위한 방법론 중 하나다.

JAVA와 같은 private, public 등 캡슐화를 사용하는 방법이다.

구현할 때는 중복된 name 사용으로 인한 문제를 방지 하기 위해 namespace 방법이 사용된다. global 영역에 객체 고유의 영역을 지정하고 변수나 함수 할당을 해당 namespace 하위로 두게 하여 중복된 name으로 인한 오류를 피하는 방법이다.

모듈패턴은 네임스페이스 패턴에 언어적 유효범위를 추가한 것이다.

```javascript
// namespace pattern
var myApp = myApp || {};

myApp.sayHoil = function(){
  return 'hoil'
}

myApp.helloWorld = function(){
  return 'hello World';
}

// 모듈패턴

var myApp = (function(name){
  var name = name;

  var printName = function(){
    console.log(name);
  }

  return {
    printName: printName
  }

})("hoil")
```

## 4. 클래스를 적절하게 구현하였는가?

MVC 디자인패턴을 구현하였다. Model, Storage, Controller, View, Template을 prototype을 이용하여 클래스화 하였다.

- 클래스란 무엇인가?

JS는 공식적으로 상속을 지원하지 않는 프로토타입 기반 객체 확장을 지원하는 언어다. ES6부터는 class, extends 키워드를 제공하여 구현가능 하다. 여튼 프로토타입 확장을 이용하여 상속과 같은 의미를 구현해낼 수 있다.


## 5. 확장성에 대한 고려

구현하지 못한 GMT 시계에 관한 것은 일정에 관한 컴포넌트와 별개로 둬야된다 생각했다.
GMT 시계 추가/삭제에 대해 폴더를 만들고 다시 MVC 디자인 패턴으로 설계하였다.


## 6. GMT 리얼 타임 시계는 어떻게 구현하였나?

먼저, Model에 GMTList를 생성해두었다.
그래서 사용자가 GMT 값을 입력시, 해당 GMT 값에 대하여 시계를 만드는 함수를 1초마다 실행되도록 setInterval과 함께 호출한다. intervalId는 setInterval을 제거하기 위해 모델에 따로 저장한다.


## 7. 메모리 얘기가 나왔는데 JS는 메모리 관리를 어떻게 하는가?

일단 싱글 스레드 기반으로 동작한다고 알려져있다. 그리고 node.js 즉 서버 환경에서는 event loop 기반 싱글 스레드라고 알려져있다.

일단 js를 해석하는 js엔진에 대해 알야아한다.

엔진은 총 3가지 영역으로 나뉜다.

스택, 힙, 이벤트 큐다. 그리고 큐를 관리하는 이벤트 루프가 있다.

스택은 함수가 실행될 때마다 call stack에 push된다. 함수 실행 종료시 pop이 된다.

Heap은 동적으로 생성된 인스턴스와 같은 객체는 heap에 저장된다.

queue는 비동기로 호출되는 함수들을 쌓는다. 비동기로 호출되는 함수는 콜스택에 쌓이지 않는다.
callstack의 모든 task종료 후, 비어있으면 event loop에 의해 deque되어 call stack에 들어가서 실행된다.

event는 while_loop에서 현재 실행 중인 task가 있는지 확인한다.


## 8. 왜 localStorage 이용하였나?

서버 환경을 구성하면 에러 핸들링 하는데 시간이 더 소요될까봐 간단한 localStorage를 이용하였다. 그리고 localStorage는 브라우저가 닫히고 다시 열어도 데이터를 유지 하기 때문이다.

### 주로 어디에서 사용?

보안 관련성이 적은 사용자 설정과 같은 정보나 지속적으로 필요한 데이터 저장시 localStorage를 이용한다.

sessionStorage는 page session 동안 저장되는데 일회성 로그인 정보와 같은 잠깐 필요한 정보 저장시 이용한다. 페이지 세션은 페이지가 리로드되는 것을 포함하여 브라우저가 열려있는 동안을 얘기한다.

쿠키와 차이점을 많이 제시하는데 쿠키는 http header를 통해 서버와 통신하는 차이점이 있다. 그리고 저장공간이 웹스토리지에 비해 많이 작다.


## 왜 user와 schedules를 나눠서 관리했나

확장성을 고려했다.

나중에 일정 등록한 적 있는 유저리스트를 쭉 보여준다고 한다고 해보자. 하나의 객체에 일정과 유저 닉네임을 모두 넣었다고 했을 때, 만약 유저 10명이 일정 500개를 등록했다면 500번 순회해야 한다.

이것은 단순히 유저라는 배열을 하나 더 선언하면 5번만 순회하면 되는 간단한 작업이다.

또한, 데이터베이스의 외래키 개념을 도입하여 일정은 유저아이디만 등록하여 유저아이디를 통해 유저 닉네임을 찾으려고 했다.

또한 추후에 어떤 모델이 추가될지 모르기 때문에 쪼개서 저장하였다. 결론적으로는 시간부족으로 user_id가 아닌 닉네임을 저장하였다.

3. 더 개선한다면?

외래키를 활용하여 스케줄과 유저 관계를 정의하고 싶다.


---
---
---

## 티몬 서비스에 대해 아는가?

생필품 몰인 슈퍼마트

개인적으로 유려한 디자인과 부드러운 애니메이션에 생각보다 놀랐다.


B2B 서비스인 티몬플러스에 관심이 갔다. 관리자 서비스나 데이터 시각화에 관심이 많기 때문이다.

그리고 사실 내가 지원한 기업이 1300억원이나 투자 받는 것에 놀랍고 기뻤다.


---

프로젝트
*아뭐듣지*, *http요청*

---


---

NTS에서 배운것?

접속자가 많은 서비스에서 접근성은 굉장히 중요하다. 사회적 약자를 위해 시멘틱한 마크업과 이미지에 대체 텍스트 등에 대한 중요성을 배웠다.

마크업은 정말 어렵다.

혼자서 일하는 것이 아닌 협업 및 유지보수를 위해 코딩 컨벤션은 정말 중요하다.

또한, 다양한 기기와 여러 환경을 가진 사용자들에게 조금이라도 더 빠른 인터랙션을 제공하기 위한 웹 성능 최적화에 대해 배웠다.

http 요청 최소화
cdn 이용
응답헤더에 cache-control을 통해 요청하지 않아도 되면 요청하지 않도록, 데이터 변경점이 없으면 응답 데이터 주지 않음으로써 성능 개선

스타일시트는 문서의 위쪽에
스크립트는 문서의 아래쪽에 왜냐하면 브라우저의 스레드는 하나다. 스크립트 다운로드 되는 동안 렌더링은 멈춘다. 스크립트를 아래 위치시킴으로써 사용자 인터랙션할 수 있는 시간을 앞당길 수 있다.
dns 검색 최소화

js와 css의 크기를 minify, uglify를 통해 작게 하자.

ETag를 이용하자

ajax도 캐싱할 수 있게 하자

`@import`는 http 요청 개수를 늘린다. 사용금지.

이미지 최적화
css 스프라이트 최적화
favicon.ico 파일 작게 캐싱되게


---

fe 문제 (한국어 번역)

## 호이스팅이란

js 엔진이 실행 컨텍스트를 생성하면서 scope 정의시 기술된 순서에 상관없이 선언부에 대한 처리를 먼저 해석하여 끌어올리는 것을 의미.

코드 순서를 무시한다.

더글라스 크록포드는 예상치 못한 동작을 야기할 수 있으니 호이스팅 되지 않은 함수 표현식을 사용하라고 한다.


## 이벤트 버블링

1. 이벤트 발생
2. 이벤트 발생 객체를 찾기 위하여 하위 탐색(캡처)
3. 이벤트 발생 객체 도달
4. 하위 탐색의 역순으로 복귀(버블링)

IE는 캡션 단계를 지원하지 않는다.

## Document Load와 Ready의 차이

Ready는 DOM트리가 만들어지면 발생. 즉 리소스 다운로드 상태와는 상관없이 Element 구조를 형성하게 되면 발생한다. 이 때 사용자가 리소스 핸들링을 위한 이벤트 발생시 오류를 뱉는다.

load는 페이지에 정의된 모든 리소스의 다운로드가 완료될 경우 발생.

## URL에서 파라미터 얻기

`document.location.split('?')`

## 다음 코드 동작하게 해보자

```javascript
[1,2,3,4,5].duplicator();

Array.prototype.duplicator = function(){
  var self = this;
  return self.concat(self);
}
```


## 익명함수 언제 사용?

```javascript
var items = document.getElementsByTagName("div");

for(var i=0; i < items.length; i++) {
  items[i].onmouseover = function(event) {
    console.log("My Sequence is " + (idx+1));
  }
}
```

전 이 코드로 테스트해봤는데 페이지의 div 수만 출력하게 되는군요.
**익명 함수로 감싸줘야만 이벤트핸들러마다 자신의 시퀀스를 출력할 수 있습니다..**

**만일 익명 함수를 쓰지 않는다면 li의 click 이벤트 핸들러에서는 언제나 같은 스코프로 클로저를 생성합니다.**
그 스코프에는 i 와 idx가 있는데 그 둘은 결국 계속 length 값까지 갱신되고, 같은 결과를 낼 겁니다.

**익명 함수로 감싸주게 되면 이벤트 핸들러마다 새로운 클로저를 참조하게 되서 계속 같은 변수를 참조하는 일이 일어나지 않습니다.**