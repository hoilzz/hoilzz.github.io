# FAQ 정리

## 웹 표준화의 필요성

- 유지비용 감소
- 수정, 관리 용이
- 호환성 확보
- 접근성 향상
- SEO 최적화
	- 메타 태그, 헤드, strong 등 크롤러가 이런걸로 검색 결과 보여줌


---

## display 속성


### block-level

- 한줄에 1개 표시
- 다른 inline, block 엘리먼트 포함


### inline-level

- 한 줄에 여러 개의 엘리먼트가 표싣괸다.
- inline-level element 포함 가능
- block-level element의 자식 이어야 함

- 언제 쓸까?
	- span처럼 해당 단락의 흐름을 방해하지 않은 채 텍스트로 표현
	- 주로 링크에 사용하는 span 혹은 a태그


block 안에 inline 사용가능
but, inline 안에 block 사용 ㄴㄴ

> a태그는 예외다.
html5에서 a는 인라인 요소이나 block요소를 자식으로 사용가능.
참고로 a안에 a나 button 선언 불가.

### inline-block

- 인라인처럼 흐름을 따른다.
- 하지만 block처럼 마진, 테두리, 패딩, 너비, 높이 표현 가능하다.

- 언제 쓸까?
	- 인라인 요소에서 디자인적인 표현(padding, margin)이 필요할 때 주로 사용
	- 부트스트랩의 다양한 열을 가진 그리드 레이아웃을 생각해보자.


### none

안보인다. 스크린 리더에 안읽히니까 주의해서 사용하자.


정리해보자.

|display|width|height|margin|padding|border|
|:--:|:--:|:--:|:--:|:--:|:--:|
|block| O | O | O | O| O |
|inline| X | X | 좌우만 | O | O |
|inline-block| O | O | O | O | O|


---


## 박스 모델

- width
- height
- border
- margin
- padding

> background-color는 border까지. 즉 겹쳐 있는데 border가 투명하지 않아서 그렇게 보이지 않는거다.
반대로 투명하게 하면 background color가 border와 겹쳐있는 것을 볼 수 있다.


### margin

margin은 큰값이 작은 값을 이긴다. 이것을 margin collapse 라고 한다.



---

## 스타일 초기화

- 각 브라우저마다 제공하는 기본 스타일이 다르다. 그러므로 초기화를 해야 모든 브라우저에서 동일한 화면을 보여줄 수 있다.


---

## float

특정 요소가 주변 요소와 자연스럽게 어울리도록 할 수 있다.


## clear

float로 인해 변화된 흐름을 제어하는 속성


## vertical-align

수직정렬

**인라인요소, 이미지 요소, input 요소 등에 적용**
블록 요소 안의 컨텐츠 정렬에는 영향이 없다.

---


## 웹 접근성의 지침

1. 대체 콘텐츠 제공
2. 읽고 이해하기 쉬운 환경 보장
3. 발작 유발가능한 컨텐츠 제공 금지
4. 쉽고 빠른 네비게이션 환경 제공
5. 어떠한 경우에도 정보나 구조의 손실 없어야 한다.
