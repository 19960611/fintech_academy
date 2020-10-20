function aFunc() {
    setTimeout(function () {
      console.log("a");
         setTimeout(function () {
            console.log("b");
             setTimeout(function () {
                console.log("c"); //callback_function으로 비동기 해결 가능
             }, 500);
        }, 1000);
    }, 1700);
  }
  
  function bFunc() {
    setTimeout(function () {
      console.log("b");
    }, 1000);
  }
  
  function cFunc() {
    setTimeout(function () {
      console.log("c");
    }, 500);
  }
  
  aFunc();
  // bFunc();
  // cFunc();
  
  // a-b-c 순서로 출력될 것 같지만 비동기 방식의 경우 가장 먼저 실행이 끝나는 것 부터 출력됨
  
  //☆비동기방식을 올바르게 순서대로 처리하는 방법 3가지
  //1. callback O => 이게 callbackfunction
  //2. Promise 객체를 활용하는 방법 X (나중에 한번 검색해서 찾아보세요)
  //3. async / await 기능을 활용하는 방법 X  (나중에 한번 검색해서 찾아보세요)
  