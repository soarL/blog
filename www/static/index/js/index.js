//分类效果
$(function(){
	$(".fenlei").mouseenter(function(event) {
		$(".menu-mainnav").show();
	}).mouseleave(function(event) {
		$(".menu-mainnav").hide();
	});

	$(".menu-mainnav .hr").mouseenter(function(){
		console.log('123');
		$(".menu-mainnav .hr").find(".navsonbox").hide();
		$(this).find(".navsonbox").show();
	})
})

//大轮播图
$(function(){
	$('.swiper-conterll-left').click(function(event) {
		$(".swiper-box .swiper-img-box:first").animate({"opacity":0.1},500, function() {
			$(".swiper-box .swiper-img-box:last").after($(".swiper-box .swiper-img-box:first"));
			$(".swiper-box .swiper-img-box:last").css("opacity",1);
		});
	});

	$('.swiper-conterll-right').click(function(event) {
		$(".swiper-box .swiper-img-box:first").animate({"opacity":0.1},500, function() {
			$(".swiper-box .swiper-img-box:last").after($(".swiper-box .swiper-img-box:first"));
			$(".swiper-box .swiper-img-box:last").css("opacity",1);
		});
	});

	var timer = setInterval(function(){
		$(".swiper-box .swiper-img-box:first").animate({"opacity":0.1},500, function() {
			$(".swiper-box .swiper-img-box:last").after($(".swiper-box .swiper-img-box:first"));
			$(".swiper-box .swiper-img-box:last").css("opacity",1);
		});
	},3000)
	$(".swiper-img-box").mouseenter(function(event) {
		clearInterval(timer);
	});

	$(".swiper-img-box").mouseleave(function(event) {
		clearInterval(timer);
	});

})

//小轮播图
$(function(){
	setInterval(function(){
		$(".small-swiper-img-box:first").animate({"opacity":0.4},500, function() {
			$(".small-swiper-img-box:last").after($(".small-swiper-img-box:first"));
			$(".small-swiper-img-box:last").css("opacity",1);
		});
	},4000)
})