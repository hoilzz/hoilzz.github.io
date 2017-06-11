# require js

가장 대표적인 `define()`과 `require()` 번역과 예제를 다룬 글입니다.

## define a moduleA

module은 전통적인 script file과 다르다.
이것은 global namespace를 더럽히지 않는 well-scoped object를 정의한다. global objects에 대한 참조할 필요 없이 의존성을 다룰 수 있고 그것의 의존성을 명시적으로 리스트화 할 수 있다. 대신에 모듈을 정의하는 함수로 dependencies를 인자로 받을 수 있다.

RequireJS에서 모듈은 `Module Pattern`의 확장판이다. (다른 모듈을 참조하기 위해 global을 필요로 하지 않는 이점을 가진다.)

디스크의 파일당 1개의 모듈이 있어야만 한다. 모듈은 최적화 툴에 의해 최적화된 번들로 그루핑될 수 있다.


*simple name/value pairs*

만약 모듈이 의존성을 가지지 않고 name/value pair collection이면 걍 오브젝트 리터럴로 define() 정의해라

```javascript
// my/shirts.js
define({
	color:'black',
	size:'unisize'
})
```

*definition functions*

만약 모듈이 의존성을 가지지 않지만 setup work를 하기 위해 함수 사용해야 한다면, define()에 함수 전달해라.

```javascript
define(function(){
	return{
		color:'black',
		size:'unisize'
	}
})
```

*definition functions with dependencies*

만약 모듈이 의존성을 가지면,
- 첫번쨰 인자는 의존성 이름들의 배열이어야한다.
- 2번째 인자는 함수 정의 해야한다.
	- 함수는 모든 의존성 모듈이 로드된 후, 모듈을 정의하기위해 호출된다.
	- 의존성 모듈은 정의 함수의 함수 인자로 전달된다. 의존성 배열의 순서와 동일하게 리스트를 작성하자.

```javascript
// my/shirt.js는 의존성을 가진다.
// cart 와 invenroty 모듈이다.
define(["./cart", "./inventory"], function(cart, inventory) {
  //return an object to define the "my/shirt" module.
  return {
    color: "blue",
    size: "large",
    addToCart: function() {
        inventory.decrement(this);
        cart.add(this);
    }
  }
}
);
```

요약하자면
`define`은 말 그대로 모듈을 정의하는 것이다. 이 때, dependencies을 가진다면 필요한 dependencies를 먼저 로드한 후, 3번째 인자의 콜백 함수에 인자로 전달되어 모듈 정의를 할 수 있다.
