const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const btn = document.querySelector("#btn")!;

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
let gender: [string, string] = ["Male", "Female"];
gender.push("Other");

let admin: [number, string] = [1, "salman"];
let error: [number, string] = [404, "Not Found"];

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

abstract class Product {
  constructor(
    private _id: number,
    private _name: string,
    private _price: number
  ) {}
  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (!value) {
      throw new Error(" Name is required");
    }
    this._name = value;
  }
  get price(): number {
    return this._price;
  }
  abstract getDiscountRates(): number;
}
// const product1=new Product(1,"Apple",100);
// product1.name="Banana";
// console.log(product1.name);
// class ClothingProduct extends Product{
//     constructor(id:number,name:string,price:number,
//         private _color:string,private _size:string){
//         super(id,name,price);
//     }
//     getDiscountRates() {
//                 return this.price * 0.9;
//               }
// }
// class ElectronicsProduct extends Product {
//     constructor(
//         id: number,
//         name: string,
//         price: number,
//         private _brand: string,
//         private _model: string
//       ) {
//         super(id, name, price);
//       }
//       getDiscountRates() {
//         return this.price * 0.5;
//       }
//     }
//     class Util {  // Singletons
//         private static instance: Util;
//         private constructor () {

//         }

//         static getInstance() {
//             if(!this.instance) {
//                 this.instance = new Util();
//             }
//             return this.instance;
//         }
//     }
// const tshirt=new ClothingProduct(1,"T-Shirt",100,"Red","XL");
// const utlInst = Util.getInstance();
// const utlInst2 = Util.getInstance();

// type Animal={
//     name: string,
//     ruuningSpeed: number
// }
// type Bird={
//     name: string,
//     flyingSpeed: number
// }
// type Creature=Animal|Bird; //Union Type

// const tiger: Creature={
//     name:"Tiger",
//     ruuningSpeed:100
// }
// console.log(tiger);

//!Intersection types
// type Creature2=Animal&Bird;

// const cockroach:Creature2={
//     name:"Cockroach",
//     ruuningSpeed:100,
//     flyingSpeed:300
// }

// !Interfaces
// interface Animal{
//     name:string;
//     ruuningSpeed:number;
// }
// interface Bird{
//     name:string;
//     flyingSpeed:number;
// }

// interface Creature extends Animal,Bird{
// }

// const tiger:Creature={
//     name:"Tiger",
//     ruuningSpeed:100,
//     flyingSpeed:30
// }

// interface Animal{
//     name:string;
//     ruuningSpeed:number;
//     eat(food:string):void;
// }
// class Tiger implements Animal{
//     constructor(public name:string,public ruuningSpeed:number){
//         // super(name,ruuningSpeed);
//     }
//     eat(food:string) {
//         return "eating food"
//     }
// }
// console.log(Tiger.prototype.eat("meat"));

//!Type Guards
// type Animal={
//     name: string,
//     ruuningSpeed: number
// }
// type Bird={
//     name: string,
//     flyingSpeed: number
// }
// type Creature=Animal|Bird;

// function log(creature:Creature){
//     if("runningSpeed" in creature){//Type Guards
//         console.log(creature.runningSpeed)
//     }
// }

//!Type Casting

// const input = document.getElementById("input") as HTMLInputElement;
// const input01 = <HTMLInputElement>document.querySelector("#input1");

//!Generic

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise is resolved");
//   }, 2000);
// });
// const promise = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Promise is resolved");
//       }, 2000);
//     });
//   };
// promise().then((data) => {
//   console.log(data.split(" "));
//  });

// function merge<T extends object,U extends object>(objA:T,objB:U){
//     return {...objA,...objB};
// }
// const merged=merge({name:"Salman"},{id:123})
// console.log(merged.name)

//!Decorators

// function Logger(template:String){   //Decorator Factory
//     return function(constructor:Function){
//       console.log("Logging....")
//       console.log(template)
//     }
// }
// function FillHtml(template:string,elemId:string){
//   return function(constructor:any){
//     console.log(constructor)
//     const elem=document.getElementById(elemId);
//     const p=new constructor();
//     if(elem){
//       elem.innerHTML=template;
//       elem.querySelector("h1")!.innerText=p.name;
//     }
//   }
// }
// @Logger("calling from person")
// @FillHtml("<h1>Hello</h1>","app")
// class Person{
//   name : string="Salman";
//   constructor(){
//   }
// }

// @Logger("Calling from Animal")
// class Animal {
//     name = "Cat";
//     constructor() {
//     }
// }

// !Function overloading

type Combined=string|number;
function add(x:number,y:number):number;
function add(x:string,y:string):string;
function add(x:Combined,y:Combined){
  if(typeof x==="string" && typeof y==="string"){
    return x+y;
  }else if(typeof x==="number" && typeof y==="number"){
    return x+y;
  }else{
    throw new Error("Invalid input, Type did not match");
  }
    
}
const value=add("Salman","Khan"); //as string;
const value2=add(5,4); //as number;
console.log(value.split(" "));
console.log(value2);