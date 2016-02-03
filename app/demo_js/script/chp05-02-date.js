/**
 * Created by Neil on 2015-11-13.
 */
var now = new Date();
console.log(now);

var now1 = new Date("May 25,2004");
console.log(now1);

var now2 = new Date(Date.parse("May 25,2004"));
console.log(now2);

var now3 = new Date("2015-04-01T00:00:00");
console.log(now3);

var now4 = new Date("09/10/2015");
console.log(now4);

var utc1 = new Date(Date.UTC(2000,0,5,14,30,3,3));
console.log("这是GMT时间："+utc1);

var utc2 = new Date(2000,0,5,14,30,3,3);
console.log("这是本地时间："+utc2);


console.log("-------------Date.now()-----------------");
console.log(Date.now());

console.log("---------------日期格式化----------------------");
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());    //ECMAScript推荐写法