# 모듈 패턴

코드를 구조화하고 정리하는데 도움이 되기 때문에 널리 쓰이는 패턴이다.
모듈 패턴을 이용하여 개별적인 코드를 느슨하게 결합시킬 수 있다.
따라서, 각 기능을 블랙박스처럼 다루면서 SW 개발 중에 요구 사항에 따라 기능을 추가 교체 삭제가 용이하다.

모듈패턴을 다음 패턴들 여러개를 조합한 것이다.

	- Namespace pattern
	- 즉시 실행 함수
	- 비공개 멤버와 특권 멤버
	- 의존 관계 선언

1. namespace 설정

```javascript
MYAPP.namespace('MYAPP.utilities.array');
```

2. 모듈 정의하기
**공개 여부를 제한해야 한다면 `즉시 실행 함수`를 사용해 `비공개 유효범위`를 만든다.**
**즉시 실행 함수는 모듈이 될 객체를 반환**한다.
이 객체에는 모듈 사용자에게 제공할 공개 인터페이스가 담기게 된다.

```javascript
MYAPP.utilities.array = (function(){
	return {
		// 객체 내용 구현..
	}
})
```

3. 공개 인터페이스에 메서드를 추가해보자.

```javascript
MYAPP.utilities.array = (function(){
	return {
		inArray: function(needle, haystack){

		}...
	}
})
```
즉시 실행 함수의 비공개 유효범위를 사용하면, 비공개 프로퍼티와 메서드를 마음껏 선언할 수 있다.
즉시 실행 함수가 반환하는 최종 결과는 `모듈의 공개 API를 담은 객체`다.

```javascript
MYAPP.namespace('MYAPP.utilities.array');

MYAPP.utilities.array = (function(){
	// 의존관계
	var uobj = MYAPP.utilities.object,
	 	 ulang...;
		 	// 비공개 프로퍼티
	var array_string = "[object Array]",...
	// 비공개 메서드들

	// 공개 API
	return {
		inArray: function(needle, haystack){
			return array_string;
		}
	}
})
```

모듈 패턴은 점점 늘어나는 코드 정리시 널리 사용된다.

## 생성자를 생성하는 모듈

```javascript
MYAPP.utilities.Array = (function(){
	// 비공개 프로퍼티 메서드 선언

	Constr = function(o){
		this.elements = this.toArray(o);
	}
	Constr.prototype = {
		constructor: MYAPP.utilities.Array,
		toArray: function(obj){...}
	}
	// 생성자 함수를 반환
	// 이 함수가 새로운 네임스페이스에 할당
	return Constr;
});

var arr = new MYAPP.utilities.Array(obj);
```

## 모듈에 전역 변수 가져오기

이 패턴의 흔한 변형 패턴으로는, 모듈을 감싼 즉시 실행 함수에 인자를 전달하는 형태가 있다.
어떠한 값이라도 가능하지만, **보통 `전역 변수에 대한 참조` 또는 `전역 객체 자체`를 전달한다.**

즉시 실행 함수 내에서 지역 변수로 전역 변수를 사용하면 탐색 작업이 좀더 빨라진다.

```javascript
MYAPP.utilities.module = (function (app, global){
	// 전역 객체에 대한 참조
	// 전역 애플리케이션 네임스페이스 객체에 대한 참조가 지역변수화
})(MYAPP, this);
```
