let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+ " ! from appna college";


let divs=document.querySelectorAll("div");
let idx=1;
for (div of divs){
  div.innerText=`new value ${idx}`;
  idx++;
}