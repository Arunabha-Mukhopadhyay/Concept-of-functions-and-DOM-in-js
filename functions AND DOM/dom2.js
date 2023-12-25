let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.dir(newBtn);

let para=document.querySelector("p");
para.after(newBtn);

let newHeading=document.createElement("h2");
newHeading.innerHTML="<i> This is a new heading</i>";
document.querySelector("body").prepend(newHeading);

para.remove();