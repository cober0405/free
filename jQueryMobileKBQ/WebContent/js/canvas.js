$(function(){
	var cnv = $("#cnvMain");
	var cxt = cnv.get(0).getContext('2d');
	var w = window.innerWidth / 1.2;
	var h = window.innerHeight / 1.2;
	var $tip = $('#spnTip');
	cnv.attr("width",w);
	cnv.attr("height",h);
	cnv.bind('tap',function(event){
		var obj = this;
		var t = obj.offsetTop;
		var l = obj.offsetLeft;
		while(obj = obj.offsetParent){
			t += obj.offsetTop;
			l += obj.offsetLeft;
		}
		tapX = event.pageX;
		tapY = event.pageY;
		cxt.beginPath();
		cxt.arc(tapX-1,tapY-t,5,0,Math.PI * 2,true);
		cxt.closePath();
		cxt.fillStyle = "blue";
		cxt.fill();
		//$tip.html("X:" + (tapX - 1) + "Y:" + tapY);
	})
})