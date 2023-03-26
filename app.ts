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
console.log(add(1,3,"-"))
