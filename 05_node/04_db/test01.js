/*
    자바스크립트를 통해서 DB (mysql)을 연결
    mysql 모듈을 다운로드 npm i mysql --save
*/

const mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '111111',
    database : 'study-db'
  });

// 연결시도
  connection.connect();

//  SQL 실행하기 - 비동기적 실행처리
// 그렇기에 콜백함수 필수
  connection.query(`SELECT * from users`, function (error, results, fields) {
    if (error) throw error;
    for(row of results){
        console.log("============")
        console.log(row)
        console.log("============")
    }
  });
  // 연결종료
  // 없어도 DB 작업이 끝나면 자동 호출된다.
  connection.end();