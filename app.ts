const input1=document.getElementById('num1')! as HTMLInputElement;
const input2=document.getElementById('num2')! as HTMLInputElement;
const btn=document.querySelector('#btn')!;

const add=function(val1:number,val2:number){
    return val1+val2;
}
btn.addEventListener('click',function(){
    const firstVal=input1.value;
    const secondVal=input2.value;
    console.log(add(+firstVal,+secondVal));
})

//Basic Types
// 1.String:string=>"Apple","Banana","Orange"
// 2.Number:number=>"1","2","3"
// 3.Boolean:boolean=>true,false
let person="salman"
const arr:string[]=["Apple","orange"];
arr.push('Banana');

const arr2:number[]=[1,2,3];



