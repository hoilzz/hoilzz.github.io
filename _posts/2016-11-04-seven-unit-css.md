---
layout: post
title: 당신이 모를 수도 있는 CSS 7가지 단위
description: "라는 글을 읽고 내가 또 정리한 것이다."
tags:
  - css
comments: true
share: true
date: 2016-11-04
---

[당신이 모를 수도 있는 CSS 7가지 단위](https://webdesign.tutsplus.com/ko/articles/7-css-units-you-might-not-know-about--cms-22573)를 읽고 정리한 것이다.

<hr>


## em
> `em`은 현재 엘리먼트의 부모 엘리먼트 font-size

이 때, 폰트 사이즈를 각각의 자식에 선언하면..?

부모의 폰트 사이즈를 상속받아 점점 커진다. 그래서 다음과 같이 관리하기 힘든 문제점이 발생한다.

```html
  <body>
      <div>
          Test <!-- 14 * 1.2 = 16.8px -->
          <div>
              Test <!-- 16.8 * 1.2 = 20.16px -->
              <div>
                  Test <!-- 20.16 * 1.2 = 24.192px -->
              </div>
          </div>
      </div>
  </body>
```



## rem

`em`을 사용하면 위와 같은 문제가 발생한다.

이럴 땐 기준을 정확히 한가지로 정할 수 있는 `rem` 을 사용하자.

- `rem` 은 *root element* 이라는 뜻으로, HTML 문서의 root 요소인 `<html>`을 가리킨다.


```css
  html {
      font-size: 14px;
  }
  div {
      font-size: 1.2rem;
  }
```






### 주로 언제 쓸까 ?

+ rem은 폰트에서만 사용하지 않는다.
+ 그리드 시스템 에서도 사용한다.
  + `rem`을 이용한 기본 폰트 사이즈 기반으로 만든 UI 스타일,
  - 이 때 `em`을 이용해 **특정 위치에 특별한 사이즈를 지정** 하기도 한다.

```css
  .container {
    width: 70rem; // 70*14px = 980px
  }
```




## vh와 vw
+ 반응형 웹 디자인은 상당히 `퍼센트`에 의존.
  + 하지만 CSS의 `퍼센트`가 모든 문제 해결하기엔 좋지 않음.
+ 또한, **CSS의 너비 값은 가장 가까운 부모요소에 상대적인 영향을 받음**.
+ 만약 너비와 높이를 가장 가까운 부모요소가 아닌 `뷰포트`에 맞게 사용할 수 있다면..?

`vh`는 **높이값의 100분의 1단위**. 즉, **뷰포트의 너비와 높이값에 상대적인 영향을 받는다**.



### 언제쓸까 ?

최대 높이값이나 그의 유사한 높이값의 슬라이드 제작시 사용할 수 있는 아주 간단한 CSS다.



## vmin과 vmax
`vh`와 `vw`가 뷰포트의 너비값과 높이값에 상대적인 영향을 받는다면 `vmin`과 `vmax`는 너비값과 높이값에 따라 최대, 최소값을 지정할 수 있다.
+ 예를 들어, 브라우저 1100px X 700px일 때
+ `1vmin`은 7px이 되고 `1vmax`는 11px이 됨



### 언제쓸까?

양 변에 가득차는 정사각형 요소를 만들고 싶을 때

```css
  .box {
    height : 100vmin; // 전체 브라우저의 1/100
    width : 100vmin;
  }
```

만약 커버처럼 뷰포트 화면에 보여야하는 (모든 네 변이 스크린에 꽉 차 있는) 경우 같은 값을 `vmax`로 적용하였다. 해당 링크로 접속하여 브라우저 크기를 늘였다 줄였다 하면 폰트 크기가 변하는 것을 볼 수 있다.



`vw`를 이용하여 `font-size`가 `vw`(viewport width) 비율에 따라 달라짐

<iframe height='265' width = "100%" scrolling='no' title='Demo of vw Unit' src='//codepen.io/cooking/embed/LRjRAm/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/cooking/pen/LRjRAm/'>Demo of vw Unit</a> by cooking (<a href='http://codepen.io/cooking'>@cooking</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>



## ex와 ch

`ex`와 `ch`는 `em`과 `rem`과 유사
+ ex와 ch는 **폰트의 특정 수치에 기반**
+ em과 rem은 **font-family에 의존**

## ch
+ 0의 너비값의 "고급 척도"로 정의
+ width : **40ch는 40개의 문자열을 포함**

## ex
+ 현재 폰트의 `x+높이` 값 (`x+높이값`은 소문자 x의 높이값이기도 한다)
+ 또는 em의 절반값

### 언제쓸까 ?
+ **폰트의 중간 지점을 알아내기 위해 자주 사용하는 방법**
+ 타이포그래피에서 세밀한 조정을 할 때 많이 사용
+ 예를 들어 위첨자 태그인 sup에게 position을 relative로 하고 botoom 값을 1ex라고 하면 위로 올릴 수 있다.






## 그밖에..

`px` : 이미지에 맞춰 정확히 배치해야할 때 사용하면 좋다


## 참고
- [https://webdesign.tutsplus.com/ko/articles/7-css-units-you-might-not-know-about--cms-22573](https://webdesign.tutsplus.com/ko/articles/7-css-units-you-might-not-know-about--cms-22573)
- 호환성 체크 [caniuse.com](caniuse.com)
