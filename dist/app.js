"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const btn = document.querySelector("#btn");
// const add=function(val1:number,val2:number):number{
//     return val1+val2;
// }
// btn.addEventListener('click',function(){
//     const firstVal=input1.value;
//     const secondVal=input2.value;
//     console.log(add(+firstVal,+secondVal));
// })
//!Basic Types
// 1.String:string=>"Apple","Banana","Orange"
// 2.Number:number=>"1","2","3"
// 3.Boolean:boolean=>true,false
// let person="salman"
// const arr:string[]=["Apple","orange"];
// arr.push('Banana');
// const arr2: number[] = [1, 2, 3];
// !Objects
// type Person = {
//   name: String;
//   age: Number;
//   hobbies: String[];
//   email?: string; // optional field ky liey ? lagaty hy
// };
// let person: Person = {
//   name: "salman", //key:value
//   age: 20,
//   hobbies: ["Sports", "Study"],
// };
// const persons: Person[] = [];
// persons.push({
//   name: "Hussain", //key:value
//   age: 25,
//   hobbies: ["Sports", "Gaming"],
// });
// const add=function(val1:number,val2:number, cb:(x:string)=>void):number{
//    cb("hello");
//     return val1+val2;
// let func:(x:number,y:number,z:(x:string)=>void)=>number;
// let func: (x: number, y: number, calc: number) => number; // func=add;
// type Cals = "add" | "subtract" | "+" | "-";
// const add = function (val1: number, val2: number, calc: Cals) {
//   if (calc === "add" || calc === "+") {
//     return val1 + val2;
//   } else if (calc === "subtract" || calc === "-") {
//     return val1 - val2;
//   }
// };
// console.log(add(1,3,"-"))
//!Tuples
let gender = ["Male", "Female"];
gender.push("Other");
let admin = [1, "salman"];
let error = [404, "Not Found"];
//!Class
// class Student{
//   private skills:string[]=[];
//     constructor(public name:string,public readonly rollNo:number){
//         this.name=name;
//         this.rollNo=rollNo;
//         this.skills=[];
//     }
//     addSkills(skill:string){
//         this.skills.push(skill);
//     }}
// const student1=new Student('Salman',1123)
// student1.addSkills("react")
// console.log(student1)
class Product {
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (!value) {
            throw new Error(" Name is required");
        }
        this._name = value;
    }
    get price() {
        return this._price;
    }
}
function add(x, y) {
    if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        throw new Error("Invalid input, Type did not match");
    }
}
const value = add("Salman", "Khan"); //as string;
const value2 = add(5, 4); //as number;
console.log(value.split(" "));
console.log(value2);
//# sourceMappingURL=app.js.map