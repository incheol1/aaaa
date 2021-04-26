$(function(){
	//section위에서 마우스 휠을 움직이면
	$("section").on("mousewheel",function(event, delta){
		var i = $(this).index();	// 마우스 휠을 움직이기 전 현재 보이는 화면의 인덱스 번호
		
		if(delta > 0){	//마우스 휠을 올렸을 때
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
			var prev = $(this).prev().offset().top;
			//문서 전체를 prev에 저장된 위치로 이동
			$("html, body").stop().animate({ "scrollTop":prev},1400);
		} else if ( delta < 0){	//마우스 휠을 내렸을 때
			//변수 next에 현재 휠을 움직이 section에서 이전 section의 offset().top위치 저장
			var next = $(this).next().offset().top;
			//문서 전체를 next에 저장된 위치로 이동
			$("html, body").stop().animate({ "scrollTop":next},1400);
		}	
	});	//$("section").on("mousewheel",function(event,delta){ 끝
	
	// #menu
	$(window).on("scroll", function(){ 
		var winScrollTop = $(window).scrollTop();
		//console.log(winScrollTop);
		$("#menu").stop().animate({top:winScrollTop+"px"},1000 );
	});
	
	$("#menu li").click(function(){
		n = $(this).index();
		$("html, body").stop().animate({ scrollTop:n*800},1400);
	});
});	