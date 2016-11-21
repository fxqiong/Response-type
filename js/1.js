$(function(){
	function lunboNude(obj){
	var lunbotu=obj;
//	var left=$(".lunbo-left",lunbotu)[0];
//	var right=$(".lunbo-right",lunbotu)[0];
	var imgBox=$(".bigbox",lunbotu)[0];
	var width=parseInt(getStyle($(".lunbo-lis",lunbotu)[0],"width"));
	var t=setInterval(move,1500);
	function move(){
		animate(imgBox,{left:-width},1000,function(){
			
				var imgfirst=getFirst(imgBox);
				imgBox.appendChild(imgfirst);
				imgBox.style.left="0px";
		});
	}


//	left.onclick=function(){
//		
//		var last=getLast(imgBox);
//		var first=getFirst(imgBox);
//		insertBefore(last,first);
//		
//		
//		imgBox.style.left=-width+"px";
//		animate(imgBox,{left:0},1000);
//	}
//
//	right.onclick=function(){
//		move();
//	}
}


	lunboNude($(".lunbotu")[0]);
	lunboNude($(".lunbotu")[1]);

})