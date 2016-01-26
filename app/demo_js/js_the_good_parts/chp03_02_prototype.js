/**
 * Created by Neil on 2015-11-18.
 */
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shelby", "Court"];
}

Person.prototype = {
	constructor: Person,
	sayName: function () {
		console.log(this.name);
	}
};

var p = new Person("Neil", 34, "coder");
p.sayName();