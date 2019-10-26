window.onload=function(){
	/*标题滚动*/
	var msg="凡客VANCL-互联网快时尚品牌,服装,鞋,配饰,网上购物货到付款网站,7天无条件退货 ";
	var tiAn=function(){
		msg=msg.substring(1,msg.length)+msg.substring(0,1);
		document.title=msg;
	}
	setInterval(function(){tiAn()},300);
	var miaosha=function(){
		var newdate=new Date(); 
		var hmiaoshu=newdate.getTime();// 现在的毫秒数
		// console.log(newdate.getTime())
		var enddate=new Date('2019/10/23 16:40:00');
		var endhmaoshu=enddate.getTime();// 结束的毫秒数
		var jiange=parseInt((endhmaoshu-hmiaoshu)/1000);// 秒数
		var shi=parseInt(jiange/60/60%24); // 小时数
		var fen=parseInt(jiange/60%60); // 分钟数
		var miaoshu=parseInt(jiange%60);
		function getClas(clas){
			return document.getElementsByClassName(clas)[0];
		};
		getClas('shi').innerHTML=shi;
		getClas('feng').innerHTML=fen;
		getClas('miao').innerHTML=miaoshu;
		if(jiange<=0){
			// console.log('aaa')
			getClas('shi').innerHTML='00';
			getClas('feng').innerHTML='00';
			getClas('miao').innerHTML='00';
			clearInterval(miaoshaTime);
		}
	}
	miaoshaTime =setInterval(miaosha,1000);

	
}
$(function(){
	//头部 
	/*显示隐藏微信二维码*/
	$('.wxerWma').css('display','none');
	$('.WX').mouseover(function(){$('.wxerWma').show()})
	$('.WX').mouseleave(function(){$('.wxerWma').hide()})
	// 显示/隐藏二级菜单
	$('.menubar-ul>li').hover(
		function(){
			$(this).children('.menubar-chaid').slideDown(100)
		},
		function(){
			$(this).children('.menubar-chaid').slideUp(100)
		}	
	)
});

// 轮播图
$(function(){
	var num=0; // 记录索引
	var timer=null;
	var timeout=null;
	    // 设置鼠标悬浮在按钮切换事件
	    $(".lisde-yuan").mouseenter(function(event){
	        //设置定时器前应先判断有没有定时器，有就清除
	        if(timeout){
	            clearTimeout(timeout);
	            timeout=null;
	        }
	        num=$(this).parent().index();
	        //设置悬浮时500毫秒时切换，不足500毫秒时不会切换
	        timeout=setTimeout(changgeMg,1000);
	        return false;// 阻止事件冒泡
	    })
	    //悬浮在窗口时停止轮播
	    $(".slideshow-div").mouseenter(function(){
	        //清除定时器
	        clearInterval(timer);
	    })
	    //鼠标移除窗口时开始轮播
	    $(".slideshow-div").mouseleave(function(){
	        //设置一个3秒的自动轮播定时器
	        timer=setInterval(changeTab,3000);
	    })
	    //点击左切换
	    $(".arrow-left").click(function(){
			$(this).css('cursor','pointer');
	        //设置定时器前应先判断有没有定时器，有就清除
	        if(timeout){
	            clearTimeout(timeout);
	            timeout=null;
	        }
	        if(num<5){
	            num++;
	        }else{
	            num=0;
	        }
	        //设置点击后500毫秒去切换，如果点击间隔小于500毫秒不停点击则不会切换
	        timeout=setTimeout(changgeMg,1000);
	        //不让a元素去默认跳转
	        return false;
	    })
	    //点击右切换
	    $(".arrow-right").click(function(){
			$(this).css('cursor','pointer');
	        if(timeout){
	            clearTimeout(timeout);
	            timeout=null;
	        }
	        if(num>0){
	            num--;
	        }else{
	            num=5;
	        }
	        //设置点击后500毫秒去切换，如果点击间隔小于500毫秒不停点击则不会切换
	        timeout=setTimeout(changgeMg,1000);
	        return false;
	    })
	    //轮播定时器
	    timer=setInterval(changeTab,1000);
	    //移动盒子和给当前索引上色
	    function changgeMg(){
	        var movePx=num*-1200+"px";
	        $(".slideshow-img").animate({"marginLeft":movePx},500);
	        $(".slide-yuans").eq(num).find("a").addClass("active").parent().siblings().removeClass("active");
	    }
	    //定时器函数
	    function changeTab(){
	        if (num<5){
	            num++;
	        }else{
	            num=0;
	        }
	        changgeMg();
	    }
})


