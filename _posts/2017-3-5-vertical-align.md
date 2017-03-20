---
  layout: post
  title: IMAGE 수직 정렬 2가지 방법
  description: img를 수직 정렬 해보자.
  tags:
    - html
    - css
  comments: true
  share: true
  date: 2017-3-4
---

다음과 같은 상황에서 `<img>`를 수직 정렬 해보자.

```html
<div class="outer">
  <div class="inner_img">
    <img src="http://cfile22.uf.tistory.com/image/2713E1345447DB2C0FC8CE" alt="" />
  </div>
  <div class="blind"></div>
</div>
```

제시해주는 2가지 전제 통해 각각 해결해보자.

## 1. position

`.outer` 부모를 기준(`position:relative`)으로 img 태그의 영역을 `position:absolute` 통해 부모 영역만큼 넓힌다. 그 다음 `margin: auto`로 쉽게 정렬할 수 있다.

```css
.outer{
  position:relative;
}

.inner_img img{
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
}
```

## 2. inline-block

`vertical-algin`을 활용해야한다. 이는 block을 제외하고 inline-block, inline 요소에 적용된다.

다음 순서대로 CSS를 적용해보자.

- .inner_img와 .blind 태그에 각각 inline-block을 주자.

- .blind 태그에 height:100% 를 주자. 부모 엘리먼트 기준으로 수직정렬 해야하기 때문이다.

- .inner_img태그에 v-align:middle 하면 현재 baseline에서 자신의 linebox 내에서 중앙 정렬을 한다. 이 때, blind는 영향을 받지 않는데, 부모 height를 100% 차지하고 있기 때문이다.
	- 반대로 blind태그에만 middle을 적용하면, 이미지가 상단에 위치하는 것을 알 수 있다.
	- 이는, 중앙에 위치된 baseline 위를 기준으로 이미지가 그려졌지만 이미지 사이즈가 크기 때문이다. (이미지 height를 5~45% 사이에 적당한 값을 계속 넣어보면 이유를 알 수 있다.)

- 여튼 이미지 중앙정렬을 위해 2가지 요소에 전부 v-align:middle을 준다.

- 여기까지 브라우저가 이미지 사이즈보다 큰 경우, 제대로 중앙정렬이 작동한다.

- 하지만 브라우저가 이미지보다 작은 경우, 이미지가 부모 엘리먼트보다 width가 커지는 경우 수직 정렬리 되지 않는다. div의 width는 기본적으로 100%다. 즉 브라우저 크기다.
	- 브라우저 width > 이미지 width : blind가 올라갈 공간이 생긴다.
	- 브라우저 width < 이미지 width : blind가 올라갈 공간이 없다.

- 근데 의문은 blind는 width:0이라 무조건 올라가야하는데 못올라간다..?
- inline-block 요소는 **기본적으로 4px정도 여백**이 생긴다.
  - `font-size:0`
  - or `margin-right:-4px` 을 통해 여백을 제거한다.

```css
.outer{
  display:inline-block;
  font-size:0;
}

.outer .inner_img{
  display: inline-block;
  vertical-align:middle;

}

.blind{
  display:inline-block;
  height:100%;
  vertical-align:middle;
}
```




## Summary

position을 이용할 경우
- position:absolute로 부모 영역만큼 영역을 늘릴 경우
  - img의 wrapper태그(div)로는 가운데 정렬할 수 없다. wrapper 태그가 붕 뜬 순간 컨텐츠 영역을 알 수 없다. 이미지 영역과는 별개로 붕 뜨니까
  - img 자체에 abs를 통해 붕 띄워줘야한다. 적어도 얘는 w,h 값을 정해주지 않아도 image 자체가 컨텐츠를 차지하고 있기 때문이다.

inline-block 이용할 경우
- inline-block의 기본 마진(4px)으로 인해 w:0, h:100%인 얘가 w:0임에도 올라가지 못한다.
  - font-size:0 이나 margin-right:-4px을 통해 올라오도록 해준다.``


<p data-height="265" data-theme-id="0" data-slug-hash="aJZWGj" data-default-tab="result" data-user="cooking" data-embed-version="2" data-pen-title="2 way vertical-align : middle " class="codepen">See the Pen <a href="http://codepen.io/cooking/pen/aJZWGj/">2 way vertical-align : middle </a> by cooking (<a href="http://codepen.io/cooking">@cooking</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


<p data-height="265" data-theme-id="0" data-slug-hash="GWJgLj" data-default-tab="result" data-user="cooking" data-embed-version="2" data-pen-title="img_like_iframe" class="codepen">See the Pen <a href="http://codepen.io/cooking/pen/GWJgLj/">img_like_iframe</a> by cooking (<a href="http://codepen.io/cooking">@cooking</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
