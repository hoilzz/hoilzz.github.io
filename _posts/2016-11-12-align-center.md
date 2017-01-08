---
  layout: post
  title: 가운데 정렬
  description: "내용 정렬, 가로 중앙 정렬, 세로 중앙 정렬에 대해 알아보자-"
  tags:
    - css
  comments: true
  share: true
  date: 2016-11-12
---


[CSS 가운데(중앙)정렬](http://webdir.tistory.com/31)모던 브라우저 위주(IE8 이상)을 참고하여 작성하였습니다.

<hr>

## 내용 정렬
`<p>`와 같은 `block`에서 가운데 정렬

```html
<div style ="width : 100px; height: 100px; background:yellow">
  <div style ="width : 50px; height:50px; background:blue;">
  </div>
</div>
```

```html
.align-center {
  text-align : center;
}
<!-- 된다. -->
<p class ="align-center"> stackedit </p>

<!-- 된다. -->
<div class ="align-center">
  <span>stack edit </span>
</div>

<!-- 된다. -->
<div class ="align-center">
  <div>stack edit</div>
</div>

<!-- 안된다. 내용이 아닌 구조 블록요소다. -->
<div style ="width : 100px; height: 100px; background:yellow" class = "align-center">

  <div style ="width : 50px; height:50px; background:blue;" class = "align-center"></div>

</div>
```

- 1~3번째 예제와 같은 내용이 든 종결 블록요소는 적용이 된다.
- 4번째 예제와 같이 `내용`이 아닌 `블록 요소`는 `test-align`으로 중앙 정렬 되지 않는다.

## 가로 중앙 정렬

### 고정 폭의 블럭 요소 중앙 정렬
`auto`값은 요소 안의 마진 여백이 왼쪽 마진과 오른쪽 마진 사이에서 대등하게 나눠짐을 의미

```css
p {
  width:100px;
  margin : 0 auto;
}
```

```css
margin: auto; /* box is horizontally centered, 0 margin on top and bottom */

margin: 1em auto;          /* 1em margin on top and bottom, box is horizontally centered */
```

- `marging : auto` : horizontally centered, 0 margin on top and bottom
- horizontal centering하기 위해 modern browser에서는 `display:flex` `justify-content:center;`를 사용해도 된다.

## vertically align까지 해주려면..?
```css
.parentBox{
  position:absolute;
}
.childBox{
  position:relative;
  left:25%;
  top:25%
}
```


## 포지션이 absolute일때 너비가 고정되지 않은 경우

`transform` 속성을 활용하여 요소의 너비의 절반만큼을 이동시킬 수 있다.
```html
<style>
  .centered { position: absolute; left: 50%; transform: translateX(-50%); }
</style>

<div class="centered">transform 가운데 정렬</div>
```
- translateX의 인자 값은 엘리먼트 크기를 기준으로 %값을 갖는다.



## EXAMPLE

<iframe height='772' scrolling='no' title='XNJboz' src='//codepen.io/cooking/embed/XNJboz/?height=772&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/cooking/pen/XNJboz/'>XNJboz</a> by cooking (<a href='http://codepen.io/cooking'>@cooking</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
