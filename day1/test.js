function test(){
	console.log("test() 함수 호출 했어요");
	setTimeout(function(){
		test();
	}, 500);
}

test();