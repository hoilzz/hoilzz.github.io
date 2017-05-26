---
layout: post
title: "MVC패턴(2)-구현"
description: "SpinBox를 MVC로 구현 해보자."
tags:
  - "javascript"
  - "pattern"
comments: true
share: true
date: 2017-5-16
---

# spinbox

클라이언트 사이드 MVC 구조를 spinbox 구현을 통해 알아보자.

## 1. markup

1. +, - 버튼
2. input 하나로 결과값과 입력값을 보여주자.
3. script 순서
script 순서는 `app.js` 가 가장 뒤로 오도록 한다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>spinbox mvc</title>
</head>
<body>
    <h1>spinbox</h1>
    <form>
        <div class="form">
            <input type="text" class="result">
            <button type="button" class="btn-increase">+</button>
            <button type="button" class="btn-decrease">-</button>
        </div>
    </form>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="spinbox/spinbox.controller.js"></script>
    <script src="spinbox/spinbox.model.js"></script>
    <script src="spinbox/spinbox.view.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

## 2. mvc 구조 생성

`model.js`, `view.js`, `controller.js`, `app.js`를 생성하자.

MVC는 `module pattern`으로 만든다.

> module pattern
로직을 캡슐화하고, 전역 명칭공간의 남발을 방지하는 기법이다. 익명함수를 통해 구현할 수 있다.
익명 함수에 globals를 파라미터로 넘겨서 전역 변수를 코드에 임포트할 수 있다. 따라서 암묵적으로 글로벌을 사용할 때보다 명확하고 빠르게 동작한다. (모듈 내에서 어떤 전역변수를 가리키는지 명확해지므로 변수 탐색 시간이 줄어든다.)
```javascript
(function(exports){
    function SpinboxXXX(){
        // xxx : model, controller, view
    }
    exports.SpinBoxController = SPinboxController;
})(this);
```



## 3. 생성자 함수 구현

*Model.js*
```javascript
function SpinboxModel(value){
    value = value || 0;
    this.data = value;
}
```
- window.data에 value 값 저장.


*view.js*
```javascript
function SpinboxView(){}
```

*controller.js*
```javascript
function SpinboxController(){
    this.spinboxModel = new SpinboxModel();
    this.spinboxView  = new SpinboxView();

    this.spinboxView.render(this.spinboxModel.getData());

    $(".btn-increase").on("click", $.proxy(this.onClickIncrease, this));
    $(".btn-decrease").on("click", $.proxy(this.onClickDecrease, this));
}
```

앞의 mvc 포스팅에서 보았듯이, controller는 model과 view를 연결한다. 생성자 함수에 model과 view를 생성하고 controller 프로퍼티로 생성된 값을 참조한다. 또한, 이벤트 리스너도 추가하자.

## 메서드

view는 그리는 메서드 render를 구현하자.
model은 getter, setter와 관련된 `getData()`, `increase`, `decrease` 메소드를 구현하자.


*model.js*
```javascript
SpinboxModel.prototype = {
    increase: function(value){
        value = value || 1;
        this.data += value;
        return this.data;
    },
    decrease: function(value){
        value = value || 1;
        this.data -= value;
        return this.data;
    },
    getData: function(){
        return this.data;
    }
}
```

*view.js*
```javascript
SpinboxView.prototype = {
    render : function(value){
        $('.result').val(value);
    }
}
```

*controller.js*
```javascript
SpinboxController.prototype = {
    onClickIncrease: function(){
        this.spinboxModel.increase();
        this.spinboxView.render(this.spinboxModel.getData());
    },
    onClickDecrease: function(){
        this.spinboxModel.decrease();
        this.spinboxView.render(this.spinboxModel.getData());
    }
};
```

## summary

전체적인 구조는 다음과 같다.

![spinbox_mvc](https://drive.google.com/open?id=0Byvxi2leg4PjeEE5cmE2QzE2S2M)
