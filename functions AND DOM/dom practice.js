let button=document.createElement("button");
button.innerText="Click Me!";
button.style.backgroundColor="red";
button.style.color="white";

document.querySelector("body").prepend(button); 

let para =document.querySelector("p");
para.classList.add("newclass");