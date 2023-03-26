var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var btn = document.querySelector('#btn');
var add = function (val1, val2) {
    return val1 + val2;
};
btn.addEventListener('click', function () {
    var firstVal = input1.value;
    var secondVal = input2.value;
    console.log(add(+firstVal, +secondVal));
});
//Basic Types
// 1.String:string=>"Apple","Banana","Orange"
// 2.Number:number=>"1","2","3"
// 3.Boolean:boolean=>true,false
var person = "salman";
// const arr=["Apple","orange"];
var arr = ["Apple", "orange"];
arr.push('Banana');
var arr2 = [1, 2, 3];
