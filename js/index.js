$(function(){
	$(".anv li.pos").mouseover(function(){
		$(this).children(".yin").css("display","block");	//获取.val它的子元素有.val_down的，就把它显示
		$(this).css("background","#79BE0B")
		$(this).children("a").css("color","#fff");	
	})

	$(".anv li.pos").mouseout(function(){
		$(this).children(".yin").css("display","none");
		$(this).css("background","#fff")
		$(this).children("a").css("color","#000").eq("index").css("color","#fff");	
//		$(this).firstChild("a").css("color","#fff");	
	})
	
	
	
	
	$("li.pos ul.yin li.cang").mouseover(function(){
		$(this).children(".yin2").css("display","block");	//获取.val它的子元素有.val_down的，就把它显示
		$(this).children("a").css({"background":"#f7f7f7","color":"#79BE0B"});	
	})

	$("#header .pos ul.yin li.cang").mouseout(function(){
		$(this).children(".yin2").css("display","none");
		$(this).children("a").css({"background":"#fff","color":"#828282"});		
	})
	
	
	
	
	$(".down .daohang li").click(function(){
		var index=$(this).index();
		$(".down .p .tab1").css("display","none").eq(index).css("display","block");		
		$(this).addClass("yi").siblings().removeClass("yi");
	})

	
	
	$(document).ready(function(){
//  var guess=$(".guess")[0];
    var you=$(".you");
    console.log(you)
    var guess_main=$(".bigbox");
    var imgBox=$(".lunbo");
    var width=$(".lunbo-lis").width();
    var t=setInterval(move,3000);

    function move(){
		animate(imgBox,{left:-width},2000,function(){
			var imgfirst=$(".lunbo").children(":first");
			imgBox.append(imgfirst);
			imgBox.css("left","0")
		});
	}
    you.click=function(){
        move();
    }

})

	
	
})
