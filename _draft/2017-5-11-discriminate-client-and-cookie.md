# 클라이언트 식별과 쿠키

컴퓨터 네트워크에서 웹 프로그램 보안상태나, 분석하기 위해 사용했던 로컬 프록시 프로그램
버프수트를 사용했었다. 각 요청 및 응답마자 잡히는 쿠키에 대해 찾아보고 정리한 글이다.

	1. 개별접촉
	2. HTTP 헤더
	3. 클라이언트 IP 주소
	4. 사용자 로그인
	5. 뚱뚱한 URL
	6. 쿠키
		6.1 쿠키의 타입
		6.2 쿠키 동작 방법
		6.3 쿠키 : 클라이언트 측 상태
		6.4 사이트마다 다른 쿠키들
		6.5 쿠키 구성 요소
		6.6 Version 0(넷스케이프) 쿠키
		6.7 쿠키와 세션 추적
    6.8 쿠키와 캐싱
		6.9 쿠키, 보안 그리고 개인 정보

## 1. 개별 접촉

HTTP는 익명으로 사용하며 상태가 없고(stateless) `요청`과 `응답`으로 통신하는 프로토콜이다.

현대의 웹 서비스는 개인화된 서비스를 제공하고 싶어한다. 네트워크로 연결된 사용자들에 대해 더 많은 것을 알고 싶어 하고 사용자들이 브라우징하는 것을 기록하고 싶어한다.

### 세션 추적

HTTP 트랜잭션(이란 요청부터 응답까지)은 상태가 없다.
각 요청 및 응답은 **독립적으로** 일어난다. 많은 웹 서비스에서 사용자가 사이트와 상호작용할 수 있게 사용자의 상태를 남긴다. (예를 들어 장바구니). 이렇게 상태를 유지하려면, HTTP 트랜잭션을 식별할 방법이 필요하다.

HTTP 식별하는데 사용하는 기술은 다음과 같다.

- 사용자 식별 관련 정보를 전달하는 HTTP 헤더들
- 클라이언트 IP 주소 추적으로 알아낸 IP 주소로 사용자를 식별
- 로그인 인증을 통한 식별
- URL에 식별자를 포함하는 기술인 FAT URL
- 식별 정보를 지속해서 유지하는 강력하면서도 효율적인 쿠키