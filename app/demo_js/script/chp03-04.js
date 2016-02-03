/**
 * Created by Neil on 2015-11-11.
 */
var message = "some string";
var c;
console.log(message);
console.log(typeof message);
console.log(typeof (message));
console.log(typeof 99);
console.log(typeof 1 == 0);
console.log(typeof c);
console.log(c);   //并未报错，返回undefined；
console.log(typeof new Object());
var car = null;
console.log(typeof car);//注意
console.log(typeof null);

var f = function () {
	//...
};
console.log(typeof f);

console.log(null == undefined);

console.log("-------------Boolean转型函数-------------");
console.log(Boolean("some string"));
console.log(Boolean(""));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(21));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(new Object()));
console.log(Boolean(null));
console.log(Boolean(undefined));