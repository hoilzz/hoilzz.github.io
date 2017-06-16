# location.hash and History API

## window.location

read-only property다. 문서의 현재 위치에 대한 Location object를 리턴한다.


### hashChange

URL의 fragment identifier가 변경될 때 hashchange event는 발생한다.


**hash는 변경해도 서버에 페이지가 갱신되지 않는다.**

브라우저에서 URI의 host, path, query parameter를 변경하게 되면 해당 주소로 서버에 요청하고 응답을 받아서 화면이 갱신된다. 하지만 fragment identifier(hash)가 변경되어도 화면은 갱신되지 않는다. 왜냐하면 hash는 부차적인 자원에 대한 참조를 가리키기 때문이다. `<a href="#section-3.5">`와 같은 hash를 가리키는 anchor태그는 문서내의 참조이기 때문에 화면이 갱신될 필요가 없다. 이 규칙을 이용하여 SPA에서는 hash를 이용하여 라윙을 한다.

**hash를 변경하면 history에 쌓인다**

hash를 변경하여도 서버에 새로 요청을 보내거나 페이지를 갱신하지 않는다. 하지만 history는 쌓인다. (URI가 변경되면 히스토리가 쌓인다.) SPA에서는 이것을 이용하여 히스토리를 관리한다.

**hashchange, popstate event**

브라우저에서 hash가 변경될 때마다 `hashchange`, `popstate` 이벤트가 발생한다. `hashchange`는 hash가 변경될 때 이벤트, popstate는 history event가 변경되었을 경우 발생하는 이벤트다. popstate는 HTML5 에서 지원되므로 하위 브라우저에서 동작하지 않는다. 그러므로 hashchange 이벤트를 사용한다.
