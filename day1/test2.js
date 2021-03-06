/*
nodejs가 스크립트이긴 하나, 기존 자바스크립트에는
없는 기능들이 있다. 그 중 전역변수와 전역함수를 학습한다.
__filename:현재 실행하고 있는 파일의 완전한 경로
__dirname:현재 실행하고 있는 파일의 디렉토리 경로

*/
//console.log("__filename은"+__filename);
//console.log("__dirname은"+__dirname);

/*
1.__filename을 이용한 경로에서 파일명만 출력하시오.
	C:\node_workspace\day1\test2.js


2.파일명과 확장자를 분리하여 출력하시오.

*/
var path=__filename;
var filename=path.substring(path.lastIndexOf("\\")+1,path.length);
console.log("추출된 파일명은"+filename);

var info=filename.split(".");//.을 기준으로 나눠진 스트링에 대한배열이 반환됨.
//info[0]="test2",info[1]="ts"
console.log(info[0]);
console.log(info[1]);
console.log(__dirname);//디렉토리 full경로만 출력
