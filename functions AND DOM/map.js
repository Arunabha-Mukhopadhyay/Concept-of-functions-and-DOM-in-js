//MAP
let num=[1,2,3,4,5];

let newArr= num.map((val)=>{
  return val**2;
})
console.log(newArr);

//FILTER
let nums=[1,2,3,4,5,6,7,8];

let evenArr= nums.filter((val) => {
  return val%2 === 0;
});
console.log(evenArr);

//REDUCE
let arr=[1,2,3,4];

let output=arr.reduce((res,curr)=>{
  return res+curr;
});
console.log(output);

let max=arr.reduce((prev,curr)=>{
  return prev>curr ? prev:curr;
});
console.log(max); 