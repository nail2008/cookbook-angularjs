window.onload = function () {
	waterfall('main','pin');

	var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
	window.onscroll = function () {
		if(checkscrollside()){
			var oParent = document.getElementById('main');
			for(var i=0;i<dataInt.data.length;i++) {
				var oPin = document.createElement('div');
				oPin.className = 'pin';
				oParent.appendChild(oPin);
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oPin.appendChild(oBox);
				var oImg = document.createElement('img');
				oImg.src = './images/'+dataInt.data[i].src;
				oBox.appendChild(oImg);
			}
			waterfall('main', 'pin');
		}
	};

};

function waterfall(parent,pin){
	var oParent = document.getElementById(parent);
	var aPin = getClassObj(oParent, pin);
	var iPinW = aPin[0].offsetWidth;  //offsetWidth是Document属性
	//http://www.w3school.com.cn/xmldom/dom_document.asp
	//下面要注意两点，一点是documentELement对象在这里指HTML标签，document的root其实是body
	//第二点是clientWidth值可见区域，不包括滚动条，具体更新信息看http://blog.sina.com.cn/s/blog_6f1f9ead0100n1f6.html
	var num = Math.floor(document.documentElement.clientWidth / iPinW);
	oParent.style.cssText='width:'+iPinW*num+'px;margin:0 auto;';

	var pinHArr=[];
	for(var i=0;i<aPin.length;i++){
		var pinH = aPin[i].offsetHeight;
		if(i<num){
			pinHArr[i]=pinH;
		}else{
			//apply的第一个参数传递作用域，第二个参数传递数组。
			//Math.min.apply(null, [1, 2, 3]) 等价于 Math.min(1, 2, 3)
			var minH =Math.min.apply(null,pinHArr);
			//var minH =Math.min.apply(Math,pinHArr);//也行
			var minHIndex=getminHIndex(pinHArr,minH);
			aPin[i].style.position = 'absolute';
			aPin[i].style.top = minH+'px';
			aPin[i].style.left = aPin[minHIndex].offsetLeft + 'px';
			pinHArr[minHIndex]+=aPin[i].offsetHeight;

		}
	}
}

function getClassObj(parent,className) {
	var obj = parent.getElementsByTagName('*');
	var pinS = [];
	for(var i=0;i<obj.length;i++){
		if(obj[i].className==className){
			pinS.push(obj[i]);
		}
	}
	return pinS;
}

/****
 *获取 pin高度 最小值的索引index
 */
function getminHIndex(arr,minH){
	for(var i in arr){
		if(arr[i]==minH){
			return i;
		}
	}
}

function checkscrollside(){
	var oParent = document.getElementById('main');
	var aPin = getClassObj(oParent, 'pin');
	var lastPinH = aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var  documentH = document.documentElement.clientHeight;
	return (lastPinH<scrollTop+documentH)?true:false;
}