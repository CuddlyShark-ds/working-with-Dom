const topLvParent = document.body;

/*  Create a p tag and add text */
let pTag = document.createElement("p");
pTag.textContent = "Hey I'm red!";

topLvParent.appendChild(pTag);

/*  Create an h3 tag add text and change text color */
let hThreeTag = document.createElement("h3");
hThreeTag.textContent = "I'm a blue h3!";
hThreeTag.style.cssText = "color: blue;";

topLvParent.appendChild(hThreeTag);

/*  create a parent div */
let parentDiv = document.createElement("div");
parentDiv.style.cssText = "background-color: pink; border: 2px solid black";

/*  create an h1 and p tag to be added to the div parent */
let hOne = document.createElement("h1");
hOne.textContent = "I'm in a div";

let childP = document.createElement("p");
childP.textContent = "ME TOO!"

parentDiv.appendChild(hOne);
parentDiv.appendChild(childP);
topLvParent.appendChild(parentDiv);