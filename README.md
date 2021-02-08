# Web_StringParsing

### Parsing
- API를 통해 가져온 데이터를 가공하는데 쓰임
- C++ / JavaScript 메소드 비교
  - index 검색 : find(C++) vs indexOf(java script)
  - 구간 자르기 : substr(C++) vs substr/substring(java script)
  - 문자열 붙이기 : + 연산자
  - 특정 위치 문자열 추가 : insert(C++)
  - 특정 위치 문자열 제거 : erase(C++)
  - replace : replace(java script)
  - split : split(java script)
  - 문자열을 숫자로 : stoi(C++) vs Number(java script)
  - 숫자를 문자열로 : to_string(C++) vs String(java script)
- [실습1](https://github.com/KimUJin3359/Web_Parsing/blob/master/001.js)
  - 세 문자열 입력받기(띄어쓰기로 구분/배열에 하나씩 넣고 alert 출력)
- [실습2](https://github.com/KimUJin3359/Web_Parsing/blob/master/002.js)
  - 문자열의 값이 같은지를 판단해 각각의 결과 출력
- [실습3](https://github.com/KimUJin3359/Web_Parsing/blob/master/003.js)
  - 문자열을 +로 연결하여, 마지막 글자부터 짝수 index의 문자 배열 생성 및 출력

### Parsing Method
- indexOf('찾을 문자열', 검색시작 index);
  - 못 찾는 경우 -1 리턴
  - 대/소문자 구분
  - [실습1](https://github.com/KimUJin3359/Web_Parsing/blob/master/004.js)
   - C가 처음 발견되는 index 및 존재하는 모든 index 출력
  - [실습2](https://github.com/KimUJin3359/Web_Parsing/blob/master/006.js)
    - 문자열에서 ABC가 몇 개인가
  - [실습3](https://github.com/KimUJin3359/Web_Parsing/blob/master/007.js)
   - 5개의 문자열 중 가장 많이 등장하는 문자열 출력
- substr(시작 index, 글자수)
  - 특정 index부터 글자 수 만큼 문자열을 얻는 메소드
- substring(시작 index, 끝 index)
  - 특정 index부터 끝 index 전까지 문자열을 얻는 메소드
  - [실습4](https://github.com/KimUJin3359/Web_Parsing/blob/master/008.js)
    - 숫자 2개를 입력받아 x ~ y까지의 문자열을 뽑아내서 출력
  - [실습5](https://github.com/KimUJin3359/Web_Parsing/blob/master/009.js)
    - 대괄호 안에 있는 숫자 + 1의 값을 출력
  - [실습6](https://github.com/KimUJin3359/Web_Parsing/blob/master/010.js)
    - 대괄호 안에 있는 모든 숫자들의 합 구하기
- insert(전체문자열, 넣을 index, 넣을문자열)
  - [실습7](https://github.com/KimUJin3359/Web_Parsing/blob/master/011.js)
- erase(전체문자열, start index, 지울 글자수)
  - [실습8](https://github.com/KimUJin3359/Web_Parsing/blob/master/012.js)
- replace(/문자열/g, "바꿀 문자열")
  - [실습9](https://github.com/KimUJin3359/Web_Parsing/blob/master/013.js)
- split()
  - split("") : 한 글자씩 Array로 저장
  - split("|") : Bar를 구분기호로 Array로 저장
  - [실습10](https://github.com/KimUJin3359/Web_Parsing/blob/master/014.js)
- [실습11](https://github.com/KimUJin3359/Web_Parsing/blob/master/015.js)
  - co.kr / .com을 모두 .net으로 변경
  - \|\| 구분 기호로 분류
  - id만 추출하여 배열에 넣기 및 출력

### Object와 Class
- 변수 총 여덟가지 타입
  - Primitive Type(7개)
    - Number
    - String
    - Boolean
    - Null 등
  - Object Type(1개)
    - array
    - **function**
    - new + primitive type
- Object의 범위
  - OOP 개념에서 모든 변수는 객체
  - JavaScript 개념에서 **Object Type으로 만들어진 변수는 객체**
  - 여러 Type들을 넣을 수 있는 집합(타 언어의 class)
  - 함수 : property(속성)에 영향을 주지 않을 경우 / 메소드 : property에 영향을 주는 경우
  - Object 객체 
    - 모든 객체의 부모(단군)
    - 객체를 만들 때, 자동으로 Object라는 객체를 상속받음
    - __proto__속성으로 부모 객체에 접근
    - Object 객체의 메서들을 사용할 수 있음
  - 객체는 선언없이 속성 추가 가능 
    ```
    let example = {
      content : "None"
    };
    example.made = "210209";
    
### Prototype
- JavaScript는 프로토타입 기반 언어
  - class 기반 : C++ / Java / C# / Python
  - prototype 기반 : JavaScript / Lua / R / Perl
- 함수를 만드는 방법
  ```
  func = function () {
  };
  
  function func() {
  };
  ```
  - func는 함수 이름이자 객체 이름
- 함수 역시 객체이므로, 속성을 추가할 수 있음
- 함수와 Prototype Object는 한 세트

### 생성자(constructor)
- Prototype 객체를 생성시킨 함수객체를 뜻함
- 여기서 생성자는 class의 생성자와 다른 의미
- prototype 객체에서 constructor 속성을 이용하여 function 객체에 접근 가능

![Image Pasted at 2021-2-8 22-59](https://user-images.githubusercontent.com/50474972/107246992-2dad1300-6a74-11eb-969e-4a0fde97d911.png)

### Class
- 속성(멤버 변수)는 constructor에서만 추가 가능
  - [실습1](https://github.com/KimUJin3359/Web_Parsing/blob/master/020.class.html)
    - batman Instance 만들기(showHP, run)
- class 상속
  - extends 키워드를 이용하여 다른 클래스 상속
  - [실습2](https://github.com/KimUJin3359/Web_Parsing/blob/master/021.heritance.html)


  
