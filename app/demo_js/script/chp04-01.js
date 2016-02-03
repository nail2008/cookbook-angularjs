/**
 * Created by Neil on 2015-11-11.
 */
//复制变量值
var num1 = 5;
var num2 = num1;
console.log(num2);
num1 = 7;
console.log(num1);
console.log(num2);

var obj1 = {};
obj1.name = "LaLa";
var obj2 = obj1;
console.log(obj2.name);

var f = function (obj) {
	obj.name = "Neo";
	obj = new Object();
	obj.name = "GG";
};
var person = new Object();
f(person);
console.log(person.name);

console.log("============= instanceof ===============")

