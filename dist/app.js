"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const btn = document.querySelector('#btn');
// const add=function(val1:number,val2:number):number{
//     return val1+val2;
// }
// btn.addEventListener('click',function(){
//     const firstVal=input1.value;
//     const secondVal=input2.value;
//     console.log(add(+firstVal,+secondVal));
// })
//Basic Types
// 1.String:string=>"Apple","Banana","Orange"
// 2.Number:number=>"1","2","3"
// 3.Boolean:boolean=>true,false
// let person="salman"
// const arr:string[]=["Apple","orange"];
// arr.push('Banana');
const arr2 = [1, 2, 3];
let person = {
    name: "salman",
    age: 20,
    hobbies: ["Sports", "Study"]
};
const persons = [];
persons.push({
    name: "Hussain",
    age: 25,
    hobbies: ["Sports", "Gaming"]
});
// const add=function(val1:number,val2:number, cb:(x:string)=>void):number{
//    cb("hello");
//     return val1+val2;
// let func:(x:number,y:number,z:(x:string)=>void)=>number;
let func; // func=add;
const add = function (val1, val2, calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    }
    else if (calc === "subtract" || calc === "-") {
        return val1 - val2;
    }
};
console.log(add(1, 3, "-"));
//Tuples
let gender = ["Male", "Female"];
gender.push("Other");
let admin = [1, "salman"];
let error = [404, "Not Found"];
//Class
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.skills = [];
        this.name = name;
        this.rollNo = rollNo;
        this.skills = [];
    }
    addSkills(skill) {
        this.skills.push(skill);
    }
}
const student1 = new Student('Salman', 1123);
student1.addSkills("react");
console.log(student1);
//# sourceMappingURL=app.js.map