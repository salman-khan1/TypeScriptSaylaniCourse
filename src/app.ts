const input1=document.getElementById('num1')! as HTMLInputElement;
const input2=document.getElementById('num2')! as HTMLInputElement;
const btn=document.querySelector('#btn')!;

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

const arr2:number[]=[1,2,3];

// Objects 

type Person={
    name:String;
    age:Number;
    hobbies:String[];
    email?:string;// optional field ky liey ? lagaty hy
};

let person:Person={
    name:"salman", //key:value
    age:20,
    hobbies:["Sports","Study"]
};

const persons:Person[]=[];
persons.push({
    name:"Hussain", //key:value
    age:25,
    hobbies:["Sports","Gaming"]
});
// const add=function(val1:number,val2:number, cb:(x:string)=>void):number{
//    cb("hello");
//     return val1+val2;
// let func:(x:number,y:number,z:(x:string)=>void)=>number;
let func:(x:number,y:number,calc:number)=>number;// func=add;
type Cals="add"|"subtract"|"+"|"-"
const add=function(val1:number,val2:number,calc:Cals){
   if(calc==="add"||calc==="+"){
       return val1+val2
   }else if(calc==="subtract"||calc==="-"){
    return val1-val2;
   }
}
// console.log(add(1,3,"-"))
//Tuples
let gender:[string,string]=["Male","Female"];
gender.push("Other")

let admin:[number,string]=[1,"salman"];
let error:[number,string]=[404,"Not Found"];


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

abstract class Product{
    constructor(private _id:number,private _name:string,private _price:number){

    }
     get id():number{
        return this._id;
    }
    get name():string{
    return this._name;
    }
    set name(value:string){
        if(!value){
            throw new Error(" Name is required");
        }
        this._name=value;
    }
     get price():number{
        return this._price;
    }
      abstract getDiscountRates(): number;

}
// const product1=new Product(1,"Apple",100);
// product1.name="Banana";
// console.log(product1.name);
class ClothingProduct extends Product{
    constructor(id:number,name:string,price:number,
        private _color:string,private _size:string){
        super(id,name,price);
    }
    getDiscountRates() {
                return this.price * 0.9;
              }
}
class ElectronicsProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        private _brand: string,
        private _model: string
      ) {
        super(id, name, price);
      }
      getDiscountRates() {
        return this.price * 0.5;
      }
    }
    class Util {  // Singletons
        private static instance: Util;
        private constructor () {
    
        }
    
        static getInstance() {
            if(!this.instance) {
                this.instance = new Util();
            }
            return this.instance;
        }
    }
const tshirt=new ClothingProduct(1,"T-Shirt",100,"Red","XL");
const utlInst = Util.getInstance();
const utlInst2 = Util.getInstance();
