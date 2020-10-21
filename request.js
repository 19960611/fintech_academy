const request = require('request');
request('http://www.naver.com', function (error, response, body) {
    //네이버에 요청을 하고 받아온 데이터는 콜백함수의 3번째 파라미터인 바디에 넘겨져있음
  console.log('body:', body); // Print the HTML for the Google homepage.
});