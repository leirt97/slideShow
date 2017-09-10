$(function(){
	var curImg=0;
	var nextImg;
	var a=1;
	var changeImg=function(nextImg){
//		$($('img')[curImg]).removeClass('show');
//		$($('img')[curImg]).addClass('hide');
//		$($('img')[nextImg]).addClass('show');
		$('img')[curImg].className='hide';
		$('img')[nextImg].className='show';
		$('li')[curImg].className='';
		$('li')[nextImg].className='active';
		if(a<$('img').length){
			$('span').each(function(i,v){
			v.className='';
			});
			$('span')[nextImg].className='move';
		}else{
			$('span')[nextImg].className='spanActive';
		}
		
		a=a+1;
		$($('img')[nextImg]).css({
			"z-index":a
		});
//		$($('img')[curImg]).attr('class','show');
//		$($('img')[nextImg]).attr('class','hide');
		curImg=nextImg;
	};
	var handler=setInterval(function(){
		if(curImg+1>=$('img').length){
			nextImg=0;
			changeImg(nextImg);
			clearInterval(handler);
		}else{
			nextImg=curImg+1;
			changeImg(nextImg);
		}
//		changeImg(curImg+1>=$('img').length?0:curImg+1);
	},3500);
//	$('#banner').mouseover(function(){
//		clearInterval(handler);
//	});
//	$('#banner').mouseout(function(){
//		handler=setInterval(function(){
//			changeImg(curImg+1>=$('img').length?0:curImg+1);
//		},4500);
//	});
		$('li').click(function(){
			if(a>=3){
				changeImg($(this).index());
			}
		});
	
});
