
//插入固定在右边的悬浮按钮
$(function() {
	//<a class="release-zb"><label></label><p>发布众包</p></a><a class="add-fixed"><label></label><p>提交</p></a>
	/*$("body").append('<div class="fixed_box"><a class="load-fixed"><label></label><p>下载</p></a><a class="official"><label></label><p>官方微信</p><div class="official_pop"><p></p><span>扫一扫体验小程序</span></div></a><a class="look_telephone"><label></label><p>手机访问</p><div class="telephone_pop"><p></p><span>扫一扫体验小程序</span></div></a><a class="to_top"><label></label></a></div>');*/
	var wWidth = $(window).width();
	var wHeight = $(window).height();
	var imgLeft = 0;
	var scrollTop = 0;
	if($(this).scrollTop() > 200) {
		$(".fixed_box .to_top").show()
	} else {
		$(".fixed_box .to_top").hide()
	}
	$(window).scroll(function() {
		scrollTop = $(this).scrollTop()
		if($(this).scrollTop() > 200) {
			$(".fixed_box .to_top").fadeIn()
		} else {
			$(".fixed_box .to_top").fadeOut()
		}
	});

	$(".fixed_box").css("bottom", "100px");
	if(wWidth < 980) {
		imgLeft = (wWidth - 980) - 140;
	} else {
		imgLeft = (wWidth - 980) / 2 - 140
	}
	$(".fixed_box").css("right", imgLeft);
	$(window).resize(function() {
		wWidth = $(window).width();
		wHeight = $(window).height();
		if(wWidth < 980) {
			imgLeft = (wWidth - 980) - 140;
		} else {
			imgLeft = (wWidth - 980) / 2 - 140;
		}
		$(".fixed_box").css("bottom", "100px")
		$(".fixed_box").css("right", imgLeft);
	})
		//二维码显示
	$(".look_telephone").hover(function() {
		$(".telephone_pop").stop(true,true).fadeIn();
	}, function() {
		$(".telephone_pop").stop(true,true).fadeOut();
	})
	$(".official").hover(function() {
		$(".official_pop").stop(true,true).fadeIn();
	}, function() {
		$(".official_pop").stop(true,true).fadeOut();
	})
	//	回到顶部
	$(".to_top").click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 200);
		})
});
// $(function(){
// 	// 首页 banner轮播
// 	var k=0
// 	$(".banner p").hide().eq(0).show();
// 	$(".banner p").removeClass("active").eq(0).addClass("active");
// 	$(".dot span").removeClass("active").eq(0).addClass("active");
// 	$(".b-pre").click(function(){
// 		clearInterval(autoSlide)
// 		k--;
// 		if(k<0){
// 			k=$(".banner p").length-1;
// 		}
// 		move()
// 	})
// 	$(".b-next").click(function(){
// 		clearInterval(autoSlide)
// 		k++;
// 		if(k>$(".banner p").length-1){
// 			k=0;
// 		}
// 		move()

// 	})
// 	$(".dot span").mouseenter(function(){
// 		k=$(this).index()
// 		move()
// 	})
// 	var autoSlide=setInterval(function(){
// 		k++;
// 		if(k>$(".banner p").length-1){
// 			k=0;
// 		}
// 		move()
// 	},5000)

// 	$(".banner").mouseenter(function(){
// 		clearInterval(autoSlide)
// 	})
// 	$(".banner").mouseleave(function(){
// 		autoSlide=setInterval(function(){
// 			k++;
// 			if(k>$(".banner p").length-1){
// 				k=0;
// 			}
// 			move()
// 		},5000)
// 	})
// 	function move(){
// 		$(".banner p").fadeOut().eq(k).show();
// 		$(".banner p").removeClass("active").eq(k).addClass("active");
// 		$(".dot span").removeClass("active").eq(k).addClass("active")
// 	}
// });

$(function(){
	//批量切换
	var page = 0;
	var pageTotal = Math.ceil($('.office-inner span').length/4);
	$('.next').click(function(){
		if( page >= pageTotal-1 )return;
		page++;
		move();
	});
	$('.pre').click(function(){
		if( page <= 0 )return;
		page--;
		move();
	});
	function move(){
		$('.office-inner').stop().animate({
			left: -(page * $('.office-wrapper').width() + 12)
		}, 500);
	}

	//大图查看
	var index = 0;
	$('.office-inner span').click(function(){
		index = $(this).attr('index');
		$('.lightbox-inner img').attr('src', ($('.office-inner span').eq(index).find('img').attr('src')));
		$('.office-lightbox').fadeIn();
	});
	$('.office-lightbox .left').click(function(){
		if( index <= 0 )return;
		index--;
		changeSrc();
	});
	$('.office-lightbox .right').click(function(){
		if( index >= $('.office-inner span').length-1 )return;
		index++;
		changeSrc();
	});
	function changeSrc(){
		$('.lightbox-inner img').attr('src', ($('.office-inner span').eq(index).find('img').attr('src')));
	}
	$('.office-lightbox').click(function(e){
		if($(e.target).hasClass('office-lightbox')){
			$('.office-lightbox').fadeOut();
		};
	});
	$('.office-lightbox .close').click(function(){
		$('.office-lightbox').fadeOut();
	});

	footFix();
});

//分享
function _jiathis() {
	var wWidth = $(window).width();
	var wHeight = $(window).height();
	if (wWidth < 1160) {
		$('.jiashare').hide();
	} else {
		$('.jiashare').css('left', Math.floor((wWidth - 1000)/2) - 120 + 'px').show();
	}
}

//底部菜单
function footFix(){
	if( $('.main-wrapper').outerHeight() < $(window).height() - $('.nav-wrapper').height() - $('.foot-wrapper').outerHeight() - 60 ){
		$('.foot-wrapper').css({
			'width': '100%',
			'position': 'fixed',
			'bottom': 0,
			'left': 0,
			'z-index': 100
		});
	}else{
		$('.foot-wrapper').removeAttr('style');
	}
}

//处理图片的宽高
function setImgWH(obj) {
	if(obj.width > obj.height) {
		$(obj).css('height', '100%');
	} else {
		$(obj).css('width', '100%');
	}
}

$(function() {
	//弹窗
	var H_ture = $(".switchbox .content").height();
	var flag = true;
	if(H_ture > 36) {
		$(".switchbox .content").css("height", "36px")
		$(".slideBtn a").click(function() {
			if(flag) {
				$(".switchbox .content").animate({
					"height": H_ture
				})
				$(this).addClass("active")
			} else {
				$(".switchbox .content").animate({
					"height": "36px"
				})
				$(this).removeClass("active")
			}
			flag = !flag;
		})
	}
	//			点击标签的效果
	$(".switchbox .content a").click(function() {
		$(".switchbox .content a").removeClass("active")
		$(this).addClass("active")
	})
});
/*------------↓-------------2017-05-02 以后------------↓-------------*/


$(function(){
	// 导航栏 选中滑动
	$('.nav-menu .nav-item.active').each(function(){
		setLineLeft($(this));
	})
	$('.nav-menu .nav-item').hover(function(){
		$(this).siblings('.line').show();
		setLineLeft($(this))
	})
	$('.nav-menu').mouseleave(function(){
		setLineLeft($(this).find('.nav-item.active'))
		setTimeout(function(){
			$(this).siblings('.line').hide();
		},300)
	})
	function setLineLeft(d1){
		var formLeft =d1.position().left,
			w = d1.outerWidth();
		var $line = d1.siblings('.line');
		var dis = formLeft+(w/2)-$line.width()/2;
		$line.css('left',dis)
	}
	$('.nav-menu.b_n .nav-item').click(function(){
		$('.nav-menu.b_n .nav-item').removeClass('active');
		$(this).addClass('active');

		$('.show-content').css('display','none')
		$('.show-content').eq($(this).index()).css('display','block')
	})
});

/**
 * 轮播
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($){
	$.fn.nswiper = function(options){
		return this.each(function(){
			var self = $(this),
				$ul = self.children('.swiper'),
				$li = $ul.children('li'),
				$prv = self.children('.prv'),
				$next = self.children('.next'),
				$dot = self.children('.dot'),
			    icurr = 0,
			    size = $li.length,
			    timerId = null,//循环ID
			    dotHtml = '<span class="active"></span>',
			    slideSwitch = true;

			 $li.eq(0).css('display','block');
			 for(var i=0;i<size-1;i++){
			 	dotHtml+='<span></span>'
			 }
			 $dot.append(dotHtml)
			 
			 function prv(){
			 	icurr--
			 	if(icurr==-1){
			 		icurr = size-1;
			 		$li.eq(0).fadeOut();
			 	}
			 	slideSwitch = false;
			 	$li.eq(icurr+1).fadeOut();
			 	$li.eq(icurr).fadeIn(500,function(){
			 		slideSwitch = true;
			 	});
			 	cDot(icurr)
			 }
			 function next(){
			 	icurr++
			 	if(icurr==size){
			 		icurr=0;
			 		$li.eq(size-1).fadeOut();
			 	}
			 	slideSwitch = false;
			 	$li.eq(icurr-1).fadeOut();
			 	$li.eq(icurr).fadeIn(500,function(){
			 		slideSwitch = true;
			 	});
			 	cDot(icurr)
			 }
			 function cDot(idx){
			 	$dot.find('span').removeClass('active');
			 	$dot.find('span').eq(idx).addClass('active');
			 }
			 $prv.click(function() {
			 	if(slideSwitch) prv();
			 });
			 $next.click(function() {
			 	if(slideSwitch) next();
			 });
			 timerId = setInterval(function(){
			 	next()
			 },3000)
			 self.hover(function() {
			 	clearInterval(timerId)
			 },function(){
			 	timerId = setInterval(function(){
			 		next()
			 	},3000)
			 });
			 $dot.find('span').mouseover(function() {
			 	var idx = $(this).index();
			 	cDot(idx);
			 	$li.eq(icurr).fadeOut();
			 	$li.eq(idx).fadeIn();
			 	icurr = idx;
			 });
		})			      
	}
})(jQuery);

/**
 * 断点轮播
 * @spaceBetween  {number} li项之间的距离
 * @time {number}  动画速度
 */
(function($){
	$.fn.slidebp = function(options){
		return this.each(function(){
			var self = $(this),
				$slide = self.find('.slide-bp ul'),
				$slide_item = self.find('.slide-bp li'),
				$prv = self.children('.slide-bp-prv'),
				$next = self.children('.slide-bp-next'),
				iCurr = 0,
				m    //单个移动距离

			$slide.append($slide_item.clone());
			var $slide_item = self.find('.slide-bp li');
			var size = $slide_item.length;

			m = $slide_item.width()+options.spaceBetween;
			$slide.css('width',size*m)
			$slide_item.css('margin-right',options.spaceBetween);
			function movePrv(){
				iCurr--;
    	        if(iCurr==-1){
    	            $slide.css({left:-(size/2)*m});
    	            iCurr=size/2-1;
    	        }
            	$slide.stop().animate({left:-m*iCurr},options.time);
			}
			function moveNext(){
				iCurr++;
		        if(iCurr==size/2+1){
		            $slide.css({left:0});
		            iCurr=1;
		        }
            	$slide.stop().animate({left:-m*iCurr},options.time);
			}
            $prv.click(function() {
    			movePrv()
            });
            $next.click(function() {
				moveNext()
            });
		})			      
	}
})(jQuery);
