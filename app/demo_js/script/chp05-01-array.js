/**
 * Created by Neil on 2015-11-13.
 */
//var arr = new Array("Greg");
var arr = ["red","blue","green"];
//var arr = [1,2,];
//arr[99]=3;
if(arr instanceof Array) {
	console.log(Array.isArray(arr));
}
console.log(arr);
console.log(arr.toString());
console.log(arr.valueOf());

console.log("----------join----------");
console.log(arr.join("||"));

console.log("----------栈方法 先进后出----------");
var arr1 = ["red","blue","green"];
var count1 = arr1.push("yellow", "black");
console.log(arr1);
console.log(count1);
count1 = arr1.push("white");
console.log(arr1);
console.log(count1);
var item = arr1.pop();
console.log(arr1);
console.log(item);

console.log("--------------队列方法 先进先出--------------------");
var arr2 = ["red","blue","green"];
var count2 = arr2.push("yellow", "black");
console.log(arr2);
console.log(count2);
count2 = arr2.push("white");
console.log(arr2);
console.log(count2);
var item2 = arr2.shift();
console.log(arr2);
console.log(item2);

console.log("-------------反向队列-------------------------");
var arr3 = ["red","blue","green"];
console.log(arr3);
arr3.unshift("yellow", "black");
console.log(arr3);
var item3 = arr3.pop();
console.log(arr3);
console.log(item3);

arr3.sort();
console.log(arr3);

var arr4 =arr3.concat("white", ["green", "grep"]);
console.log(arr4);

var arr5 = arr4.slice(1, 5);
console.log(arr5);

console.log(arr5.indexOf("red"));

console.log("-------------------迭代方法----------------------");
var arr6 = [ 'black', 'blue', 'red', 'yellow', 'white', 'green', 'grep' ];
console.log(arr6);
var f1 = function (s) {
//	console.log(s);
	return true;//需要返回true，迭代才会继续。
};
var flag1 = arr6.every(f1);
console.log("arr6--f1:" + flag1);

var f2 = function (s) {
	if (s.slice(0, 1) == "g") {
		return true;
	} else {
		return false;
	}
};

var arr7 = arr6.filter(f2);
console.log(arr7);

var flag2 = arr6.every(f2);
console.log("arr6--f2:"+flag2);

var f3 = function (s) {
	console.log(s);
};

arr6.forEach(f3);

var map1 = arr6.map(f2);
console.log(map1);

var flag3 = arr6.some(f2);
console.log(flag3);

console.log("--------------reduce-------------------");

var arr8 = [1, 2, 3, 4, 5];
var sum = arr8.reduce(function (prev, cur, index, array) {
	return prev+cur;
});
console.log(sum);