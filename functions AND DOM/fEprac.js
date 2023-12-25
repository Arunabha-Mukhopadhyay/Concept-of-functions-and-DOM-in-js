let num=[1,2,3,4,5];

num.forEach((val)=>{
  console.log(val**2);
});

//OR
let calcSqrt= (val)=>{
  console.log(val**2);
}
num.forEach(calcSqrt);