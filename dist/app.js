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
// console.log(add(1,3,"-"))
//Tuples
let gender = ["Male", "Female"];
gender.push("Other");
let admin = [1, "salman"];
let error = [404, "Not Found"];
//Class
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
// const product1=new Product(1,"Apple",100);
// product1.name="Banana";
// console.log(product1.name);
class ClothingProduct extends Product {
    constructor(id, name, price, _color, _size) {
        super(id, name, price);
        this._color = _color;
        this._size = _size;
    }
    getDiscountRates() {
        return this.price * 0.9;
    }
}
class ElectronicsProduct extends Product {
    constructor(id, name, price, _brand, _model) {
        super(id, name, price);
        this._brand = _brand;
        this._model = _model;
    }
    getDiscountRates() {
        return this.price * 0.5;
    }
}
class Util {
    constructor() {
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Util();
        }
        return this.instance;
    }
}
const tshirt = new ClothingProduct(1, "T-Shirt", 100, "Red", "XL");
const utlInst = Util.getInstance();
const utlInst2 = Util.getInstance();
//# sourceMappingURL=app.js.map