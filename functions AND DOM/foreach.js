let arr =[1,2,3,4,5];

//using nor. funcn.
arr.forEach(function printVal(val) { //value at each index.
      console.log(val);
});

//by arrowfunction
arr.forEach((val, idx , arr)=>{
  console.log(val, idx, arr);
});