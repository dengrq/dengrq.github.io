//animation:让指定的dom元素缓动到指定位置
function  animate(obj,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = (target - obj.offsetLeft)/10;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		obj.style.left = obj.offsetLeft + speed +"px";
		if(obj.offsetLeft==target){
			clearInterval(obj.timer);
		}
		
	},20)
}
//有一个函数：scroll().top
function scroll(){
	return {
		"top":document.body.scrollTop+document.documentElement.scrollTop,
		"left":document.body.scrollLeft+document.documentElement.scrollLeft
	}
}


