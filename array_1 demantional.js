/* one demenstional all of sorting,and other programe*/
console.log("array concat")
let ae=[1,2,3]
let we=0;
let ea=[-1,-2,-3]
let ew=ea.concat(we,ae)
console.log(ew)

//ex-2
var isEven=(...p1)=>{
	console.log(p1);
	return (p1%2==0)?true:false;
}
let ed=isEven(11,12,22,23,43);
if(ed==true)
{
	console.log("even")
}
else{
	console.log("odd")
}
//ex3 
var is_even=function(x){
	return(x%2==0)?true:false;
}
var number1=[2,9,8,5,6]
console.log(number1.sort())
console.log("\n")
console.log(number1.every(is_even))