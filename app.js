var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var btn = document.querySelector('#btn');
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
var arr2 = [1, 2, 3];
var person = {
    name: "salman",
    age: 20,
    hobbies: ["Sports", "Study"]
};
var persons = [];
persons.push({
    name: "Hussain",
    age: 25,
    hobbies: ["Sports", "Gaming"]
});
// const add=function(val1:number,val2:number, cb:(x:string)=>void):number{
//    cb("hello");
//     return val1+val2;
// let func:(x:number,y:number,z:(x:string)=>void)=>number;
var func; // func=add;
var add = function (val1, val2, calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    }
    else if (calc === "subtract" || calc === "-") {
        return val1 - val2;
    }
};
console.log(add(1, 3, "-"));
