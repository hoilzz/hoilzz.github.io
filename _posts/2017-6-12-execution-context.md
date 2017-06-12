# 실행 컨텍스트

javascript가 실행될 때 생성되는 하나의 실행 단위인 `실행 컨텍스트`, `변수의 유효범위`에 대해 알아보자.


## 실행 컨텍스트

C언어의 call stack과 비교해서 알아보자.
함수 호출시 해당 함수의 호출 정보가 차곡차곡 쌓여가는 스택을 의미한다. 자바스크립트도 이와 비슷한 방식을 가진다.

실행 컨텍스트는 콜 스택에 들어가는 실행 정보와 비슷하다.
ECMAScript에서는 실행 컨텍스트를 `실행 가능한 코드를 형상화하고 구분하는 추상적인 개념`으로 기술한다.
call stack과 연관지어 정의하면, `실행 가능한 js 코드 블록이 실행되는 환경`이다.
여기서 말하는 **`실행 가능한 코드 블록`은 대부분 `함수`다.**

ECMAScript에서는 실행 컨텍스트가 형성되는 경우를 3가지로 규정한다.

1. 전역코드
2. eval()
3. 함수 안의 코드를 실행하는 경우

대부분 함수로 실행 컨텍스트를 만들고, 실행 컨텍스트가 생성되면 스택 안에 하나씩 쌓인다.
제일 위에 위치하는 실행 컨텍스트가 현재 실행되는 컨텍스트다.

간단한 예제를 보자.

```javascript
console.log("global context");

function ExContext1(){
	..
}
function Excontext2(){
	..
	ExContext1();
}

ExContext2();
```

여기까지는 쉽다.

---

## 실행 컨텍스트 생성 과정

- AO(활성 객체), VO(변수 객체)
- Scope Chain

다음 예제 실행시 실행 컨텍스트가 어떻게 만들어 지는지 보자.

```javascript
function execute(params1, params2){
	var a = 1, b = 2;
	function func(){
		return a+b;
	}
	return param1 + param2 + func();
}
execute(3,4);
```

### AO(활성 객체) 생성

실행 컨텍스트 생성시 JS 엔진은 `해당 컨텍스트가 가진 정보를 담을 객체`를 생성한다.
이를 AO(활성 객체)라고 한다.
사용자가 정의한 변수 및 객체를 저장한다.

그림
![실행 컨텍스트 1](/images/execution-context/execution_context_1.png)

### arguments 객체 생성

AO는 arguments 프로퍼티로 arguments 객체를 참조한다.

![실행 컨텍스트 2](/images/execution-context/execution_context_2.png)


### Scope 정보 생성

현재 컨텍스트의 유효 범위를 나타내는 스코프 정보를 생성한다.
현재 컨텍스트에서 특정 변수에 접근해야 할 경우, 이 리스트를 활용한다.
이 스코프 정보는 현재 실행 중인 실행 컨텍스트 안에서 연결 리스트와 유사한 형식으로 만들어진다.

요약하면, 이 리스트로 현재 컨텍스트의 변수 혹은 상위(global까지) 실행 컨텍스트의 변수에 접근 가능하다.
이 리스트에서 찾지 못한 변수는 정의되지 않는 변수에 접근하는 것으로 간주한다.
이 리스트를 `Scope Chain`이라고 한다. `[[scope]]`프로퍼티로 참조된다. `scope chain` 포스팅을 다시 다룰거다.
여튼 이게 생성된다.

![실행 컨텍스트 1](/images/execution-context/execution_context_3.png)

### 변수 생성

현재 실행 컨텍스트에서 사용되는 지역 변수를 생성한다.

여기 예시대로 하면
- var a,b
- function func(){}

가 생성된다. 여기서 주의할 점은 변수나 내부 함수를
**단지 메모리에 생성**하고 **초기화**는 표현식이 실행되기 전까지 이루어지지 않는다.
(표현식의 실행은 하나의 실행 컨텍스트 생성 및 변수 객체가 만들어진 후에 이루어진다.)

여튼 결론적으로 변수 a,b에는 undefined가 할당된다.


![실행 컨텍스트 1](/images/execution-context/execution_context_4.png)

### this 바인딩

this 키워드를 사용하는 값이 할당된다.
this에 어떤 값이 들어가는지는 검색을 통해 알아보자.

![실행 컨텍스트 1](/images/execution-context/execution_context_5.png)

### 코드 실행

실행 컨텍스트 생성되고, 변수 객체가 만들어진 후에 표현식 실행이 이뤄진다.
변수의 초기화 및 연산, 또 다른 함수 실행 등이 이뤄진다.

> 참고로 전역 실행 컨텍스트는 일반적인 실행 컨텍스트오 ㅏ다르다.
- arguments 객체가 없다.
- 전역 객체 하나만을 포함하는 스코프체인이 있다.
- 변수 객체 및 함수 객체는 전역 객체이자 전역 객체의 프로퍼티다.


## Summary

실행컨텍스트는 실행 가능한 javascript 코드 블록이 실행되는 환경이다.
실행 가능한 javascript 코드 블록이란 대부분 함수인데, 이게 실행되면 실행 컨텍스트가 생성된다.

실행 컨텍스트의 생성 과정에서 중요한 것은 AO, VO, Scope Chain이다.
AO 생성 후,

- arguments 객체 생성
- Scope Chain(`[[scope]]`) 생성
- 변수 생성(메모리에 추가, but not 초기화)
- this 바인딩
- 코드 실행(변수 초기화, 연산 및 함수 실행)
