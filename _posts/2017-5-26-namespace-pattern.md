# Namespace pattern

> JS에서는 객체 리터럴이나 생성자 함수를 사용하여 쉽게 객체를 만들 수 있다. 객체를 생성하는 다른 패턴들을 살펴보자.
JS는 간단하고 쉽다. 다른 언어에서는 namespace나 모듈 패키지, 비공개 프로퍼티, 스태틱 멤버 등의 기능이 익숙하고 당연할 수 있다. 하지만 JS는 이것들을 위한 문법이 거의 없다. 이러한 기능을 구현하거나 대체해야 한다.

네임 스페이스는 필요로 하는 전역 변수의 개수를 줄인다.
동시에 과도한 접두어를 사용하지 않고도 이름이 겹치지 않도록 한다.

수많은 함수, 객체, 변수들로 전역 유효범위를 더럽히는 대신,
`애플리케이션이나 라이브러리를 위한 전역 객체`를 하나 만들고 (단 하나 만드는게 이상적) 모든 기능을 이 객체에 추가하면 된다.

```javascript
// 현재 전역 변수 5개
// warning : anti pattern

function Parent(){}
functino Child(){}

var some = 1;

var module1 = {};
module1.data{a:1,b:2};
var module2 = {};
```

먼저, 애플리케이션 전용 전역 객체 MYAPP을 생성하자.
그 다음 모든 함수와 변수들을 전역 객체의 프로퍼티로 변경하자.

```javascript
// 변경 후, 전역 변수 1개

var MYAPP = {};

MYAPP.Parent = function(){};
MYAPP.Child = function(){};

MYAPP.some = 1;

MYAPP.modules = {};

MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a:1,b:2};
MYAPP.modules.module2 = {};
```

전역 네임스페이스 객체 이름은 보통 애플리케이션 이름 혹은 라이브러리 이름, 도메인 명 등이 있다. 전역 객체 이름은 전부 대문자로 쓰는 규칙을 이용하기도 한다. (이 규칙은 상수에도 적용된다.)

이 패턴 이용시,

- 코드에 Namespace 지정
- 코드 내의 이름 충돌 방지
- 이 코드와 같은 페이지에 존재하는 JS 라이브러리 등 서드 파티 코드와 충돌 방지

*단점*

- 모든 변수와 함수에 접두어를 붙여야 하기 때문에 전체적으로 코드량이 많아지고 다운로드해야 하는 파일 크기 증가
- 전역 인스턴스가 단 하나이기 때문에 코드 한 부분이 수정되어도 전역 인스턴스를 수정하게 된다. 즉, 나머지 기능들도 갱신된 상태를 물려받는다.
- 이름이 중첩되고 길어지므로 프로퍼티 판별하기 위한 검색 작업이 길고 느려진다. (이러한 단점을 해결하기 위해 `sandbox` pattern이 있다)

---

## 범용 Namespace 함수

프로그램이 복잡해지고 코드의 각 부분이 별개의 파일로 분리되어 선택적으로 문서에 포함된다.
이 때, 어떤 코드가 특정 네임스페이스나 그 내부의 프로퍼티를 *처음으로* 정의한다고 가정하기 *위험하다.* 네임스페이스에 추가하려는 프로퍼티가 이미 존재하거나 내용을 덮어쓸 수도 있다. 그러므로 존재 여부를 확인해야한다.

```javascript
// 넘나 위험
var MYAPP = {};

// 개선
var MYAPP = MYAPP || {}
```

근데 위와같이 일일히 확인하면 중복 코드가 많아진다. 예를 들어 `MYAPP.modules.module2` 정의하려면, 각 단계의 객체와 프로퍼티를 정의할 때마다 확인 작업을 거쳐야 하므로 코드가 총 3번 중독 된다. 따라서, 확인 작업 코드가 재사용 가능하도록 함수 만들면 편하다.

```javascript
// namespace() 함수가 확인작업 한다.
MYAPP.namespace('MYAPP.modules.module2');

// 리턴 값은  var MYAPP={modules:{modules2:{}}}와 같다.

MYAPP.namespace = function(ns_string){
	var parts = ns_string.split('.'),
	parent = MYAPP,
	i;

	// 처음에 중복되는 전역 객체명은 제거한다
	if (parts[0] === "MYAPP"){
		parts = parts.slice(1);
	}
	for(i=0; i<parts.length; i+=1){
		// 프로퍼티가 존재하지 않으면 생성
		if(typeof parent[parts[i]] === "undefined"){
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]]
	}
	return parent;
}
```

위 코드는 다음과 같이 사용가능하다.
```javascript
var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2; // true
```


## Summary

- 함수, 변수 등을 전역에서 선언하여 전역 유효범위를 더럽히지 말자.
	- 단 하나의 전역객체의 프로퍼티로 추가하자.
- namespace 패턴을 사용하면
	- 코드 내 이름 충돌 방지
	- 같은 페이지에 존재하는 JS 라이브러리 등과 충돌 방지

- 단점도 있다
	- 모든 변수 및 함수에 접두어를 붙여야 해서 코드량 증가하여 파일 크기 증가
	- 전역 인스턴스는 단 하나기 때문에 코드 한 부분이 수정될 경우 전역 인스턴스 수정한다.
	- 이름이 중첩되고 길어지므로 프로퍼티 판별하기 위한 검색작업이 길고 느려진다.
	- 코드 많아지고 프로그램 복잡해지면 특정 네임스페이스가 처음 정의한다고 가정하기 위험하다. 그래서 확인 하는 작업 필요하다.
