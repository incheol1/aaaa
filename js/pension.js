$(function(){
/* popUp */
	$(".popBottom a").click(function(a){
		a.preventDefault();
		$("#popUp").hide();
	});
		
/* header */
	$(".mainMenu").mouseover(function(){
		$(this).find(".subMenu").stop().slideDown();
	});
	
	$(".mainMenu").mouseout(function(){
		$(this).find(".subMenu").stop().slideUp();
	});
	
	$(window).scroll(function(){
		var docScroll = $(this).scrollTop();
		if(docScroll >= 630){
			$("#header").css({ backgroundColor:"rgba(244,244,223,0.8)" });
			$(".gnb li a").css({ color:"#544437" });
			$(".subMenu").css({ backgroundColor:"#cdceab" });
		} else {
			$("#header").css({ backgroundColor:"rgba(50,65,88,0.5)" });
			$(".gnb li a").css({ color:"#fff" });
			$(".subMenu").css({ backgroundColor:"#9ba2ac" });
		}
	});

/* top */
	$(".one, .one+span").click(function(){
		$(".season img:nth-of-type(1)").fadeIn();
		$(".season img:nth-of-type(1)").siblings("img").hide();
		$(".spring").fadeIn();
		$(".summer, .fall, .winter").hide();
		$(".topImg").css({ backgroundColor:"#000" });
		$("#top span").css({ color:"#fff" });
		$(".one").css({ backgroundColor:"#fff" });
		$("#top span:nth-of-type(1)").css({ color:"pink" });
	});
	
	$(".two, .two+span").click(function(){
		$(".season img:nth-of-type(2)").fadeIn();
		$(".season img:nth-of-type(2)").siblings("img").hide();
		$(".summer").fadeIn();
		$(".spring, .fall, .winter").hide();
		$(".topImg").css({ backgroundColor:"#000" });
		$("#top span").css({ color:"#fff" });
		$(".two").css({ backgroundColor:"#fff" });
		$("#top span:nth-of-type(2)").css({ color:"#4996a2" });
	});
	
	$(".three, .three+span").click(function(){
		$(".season img:nth-of-type(3)").fadeIn();
		$(".season img:nth-of-type(3)").siblings("img").hide();
		$(".fall").fadeIn();
		$(".spring, .summer, .winter").hide();
		$(".topImg").css({ backgroundColor:"#000" });
		$("#top span").css({ color:"#fff" });
		$(".three").css({ backgroundColor:"#fff" });
		$("#top span:nth-of-type(3)").css({ color:"#9e5656" });
	});
	
	$(".four, .four+span").click(function(){
		$(".season img:nth-of-type(4)").fadeIn();
		$(".season img:nth-of-type(4)").siblings("img").hide();
		$(".winter").fadeIn();
		$(".spring, .summer, .fall").hide();
		$(".topImg").css({ backgroundColor:"#000" });
		$("#top span").css({ color:"#fff" });
		$(".four").css({ backgroundColor:"#fff" });
		$("#top span:nth-of-type(4)").css({ color:"blue" });
	});

/* sideMenu */
	$("#sideMenu i").mouseover(function(){
		$(this).next().addClass("add");
	});
	
	$("#sideMenu i").mouseout(function(){
		$(this).next().removeClass("add");
	});
	
	$("#sideMenu").click(function(){ /*클릭시 맨 위페이지로 이동*/
		var aa = $("#wrapper").offset().top; 
		//console.log(aa);
		$("html,body").animate({"scrollTop":aa},500);
	});
	
	$(window).on("scroll", function(){ 
		var winScrollTop = $(window).scrollTop();
		//console.log(winScrollTop);
		$("#sideMenu").stop().animate({top:winScrollTop+"px"},1000 );
		
	});

/* room */
	// roomOne
	$(".roomOne ul li").each(function(aa){
		$(this).css({ left:aa*270 });
	});
	
	setInterval(function(){
		$(".roomOne ul li").each(function(){
			var left = parseInt($(this).css("left"));
			var movePos = left-270;
			$(this).animate({ left:movePos },1000, function(){
				if(movePos == -270){
					$(this).css({ left:"540px" });
				}
			});
		});
	},3000);
	
	var i = 1;
	setInterval(function(){
		$(".circleOne li img").each(function(){
			i++;
			var circleImg = "images/circle" + i + ".png";
			$(this).attr( "src", circleImg );
			if(i == 3 ){
			i = 0;
			};
		});
		
	},3000);
	
	// roomTwo
	$(".roomTwo ul li").each(function(aa){
		$(this).css({ left:aa*270 });
	});
	
	setInterval(function(){
		$(".roomTwo ul li").each(function(){
			var left = parseInt($(this).css("left"));
			var movePos = left-270;
			$(this).animate({ left:movePos },1000, function(){
				if(movePos == -270){
					$(this).css({ left:"540px" });
				}
			});
		});
	},3000);
	
	var j = 1;
	setInterval(function(){
		$(".circleTwo li img").each(function(){
			j++;
			var circleImg = "images/circle" + j + ".png";
			$(this).attr( "src", circleImg );
			if(j == 3 ){
			j = 0;
			};
		});
		
	},3000);
	
	// roomThree
	$(".roomThree ul li").each(function(aa){
		$(this).css({ left:aa*270 });
	});
	
	setInterval(function(){
		$(".roomThree ul li").each(function(){
			var left = parseInt($(this).css("left"));
			var movePos = left-270;
			$(this).animate({ left:movePos },1000, function(){
				if(movePos == -270){
					$(this).css({ left:"540px" });
				}
			});
		});
	},3000);
	
	var k = 1;
	setInterval(function(){
		$(".circleThree li img").each(function(){
			k++;
			var circleImg = "images/circle" + k + ".png";
			$(this).attr( "src", circleImg );
			if(k == 3 ){
			k = 0;
			};
		});
		
	},3000);
	
	// roomFour
	$(".roomFour ul li").each(function(aa){
		$(this).css({ left:aa*270 });
	});
	
	setInterval(function(){
		$(".roomFour ul li").each(function(){
			var left = parseInt($(this).css("left"));
			var movePos = left-270;
			$(this).animate({ left:movePos },1000, function(){
				if(movePos == -270){
					$(this).css({ left:"540px" });
				}
			});
		});
	},3000);
	
	var l = 1;
	setInterval(function(){
		$(".circleFour li img").each(function(){
			l++;
			var circleImg = "images/circle" + l + ".png";
			$(this).attr( "src", circleImg );
			if(l == 3 ){
			l = 0;
			};
		});
		
	},3000);
	
/* special */
	// categoryOne
	$(".categoryOne li:nth-of-type(1) a").click(function(e){
		e.preventDefault();
		$(".oneImg img:nth-of-type(1)").slideDown();
		$(".oneImg img:nth-of-type(1)").siblings().slideUp();
		$(this).text("테라스 바베큐 >");
		$(".categoryOne li:nth-of-type(2) a").text("스키 - 보드");
		$(".categoryOne li:nth-of-type(3) a").text("스파");
		$(this).css({ fontWeight:"bold", color:"#6d5e40"});
		$(".categoryOne li:nth-of-type(1)").siblings("li").children("a").css({ fontWeight:"normal", color:"#000" });
		
	});
	
	$(".categoryOne li:nth-of-type(2) a").click(function(e){
		e.preventDefault();
		$(".oneImg img:nth-of-type(2)").slideDown();
		$(".oneImg img:nth-of-type(2)").siblings().slideUp();
		$(this).text("스키 - 보드 >");
		$(".categoryOne li:nth-of-type(1) a").text("테라스 바베큐");
		$(".categoryOne li:nth-of-type(3) a").text("스파");
		$(this).css({ fontWeight:"bold", color:"#02c3e2"});
		$(".categoryOne li:nth-of-type(2)").siblings("li").children("a").css({ fontWeight:"normal", color:"#000" });
	});
	
	$(".categoryOne li:nth-of-type(3) a").click(function(e){
		e.preventDefault();
		$(".oneImg img:nth-of-type(3)").slideDown();
		$(".oneImg img:nth-of-type(3)").siblings().slideUp();
		$(this).text("스파 >");
		$(".categoryOne li:nth-of-type(1) a").text("테라스 바베큐");
		$(".categoryOne li:nth-of-type(2) a").text("스키 - 보드");
		$(this).css({ fontWeight:"bold", color:"#8c3a3a"});
		$(".categoryOne li:nth-of-type(3)").siblings("li").children("a").css({ fontWeight:"normal", color:"#000" });
	});
	
	// categoryTwo
	$(".categoryTwo li:nth-of-type(1) a").click(function(e){
		e.preventDefault();
		$(".twoImg img:nth-of-type(1)").slideDown();
		$(".twoImg img:nth-of-type(1)").siblings().slideUp();
		$(this).text("눈썰매 >");
		$(".categoryTwo li:nth-of-type(2) a").text("불꽃축제");
		$(".categoryTwo li:nth-of-type(3) a").text("실내 커피숍");
		$(this).css({ fontWeight:"bold", color:"#02c3e2"});
		$(".categoryTwo li:nth-of-type(1)").siblings("li").children("a").css({ fontWeight:"normal", color:"#000" });
	});
	
	$(".categoryTwo li:nth-of-type(2) a").click(function(e){
		e.preventDefault();
		$(".twoImg img:nth-of-type(2)").slideDown();
		$(".twoImg img:nth-of-type(2)").siblings().slideUp();
		$(this).text("불꽃축제 >");
		$(".categoryTwo li:nth-of-type(1) a").text("눈썰매");
		$(".categoryTwo li:nth-of-type(3) a").text("실내 커피숍");
		$(this).css({ fontWeight:"bold", color:"#eabc00"});
		$(".categoryTwo li:nth-of-type(2)").siblings("li").children("a").css({ fontWeight:"normal", color:"#000" });
	});
	
	$(".categoryTwo li:nth-of-type(3) a").click(function(e){
		e.preventDefault();
		$(".twoImg img:nth-of-type(3)").slideDown();
		$(".twoImg img:nth-of-type(3)").siblings().slideUp();
		$(this).text("실내 커피숍 >");
		$(".categoryTwo li:nth-of-type(1) a").text("눈썰매");
		$(".categoryTwo li:nth-of-type(2) a").text("불꽃축제");
		$(this).css({ fontWeight:"bold", color:"#a68e7b"});
		$(".categoryTwo li:nth-of-type(3)").siblings("li").children("a").css({ fontWeight:"normal", color:"#000" });
	});
	
/* finish */
});