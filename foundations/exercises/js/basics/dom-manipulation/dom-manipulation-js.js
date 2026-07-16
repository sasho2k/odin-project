// Manipulate the DOM using only JS and DOM Methods
const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);


// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);


/* 
a <div> with a black border and pink background color with the following elements inside of it:
    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
    Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p = document.createElement("p");
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p);

container.appendChild(div);