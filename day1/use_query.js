/*
nodejs의 내장 객체 중 query string 내장모율를 학습한다
*/

var query=require("querystring");

var result=query.parse("http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0008548934&isYeonhapFlash=Y");
console.log(result);