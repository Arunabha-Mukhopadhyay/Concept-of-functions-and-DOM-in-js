//filering maks greater than 90.

let arr=[97,85,90,100,91,66,79,95,97];
let moreMarks=arr.filter((val)=>{
  return val>90;
});
console.log(moreMarks);

//taking sum and product of an array
let n=prompt("enter a no you wish for an array");
let num=[];
for(let i=1;i<=n;i++){
  num[i-1]=i;
}
let sum=num.reduce((prev,curr)=>{
  return prev+curr;
});
console.log(num);
console.log(sum);

let factorial=num.reduce((prev,curr)=>{
  return prev*curr;
});
console.log(factorial);