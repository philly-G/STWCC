 

/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* GOAL: Click on a list item to mark it checked */

var fullItemList = document.getElementById("my-list");
/*fullItemList.addEventListener("click", checkOffItem, false);*/

//Ken: Added a safety check here, we have script.js on pages that don't have a my-list
fullItemList && fullItemList.addEventListener("click", checkOffItem, false);

function checkOffItem(clicked) {
  //find out which element triggered a specified event
  if (clicked.target.tagName == "LI") {
    //apply the CSS rule set outlined in .all-done if condition is met
    clicked.target.classList.toggle("all-done");
  }
}


/************************************************/
/*************** PRACTICE ARRAYS ****************/
/************************************************/

/* Add code to practice loops here */
/* Be sure to delete them or comment them out when you are finished with that section */

/* Create a array to store two animals and a number */
var animals = ['panda', 'hippo', 7];     

/* Print all the animals to the console*/
console.log(animals);

/* Create an array using Array.from */
var myLetters = Array.from('panda');
console.log(myLetters);


/* Print each animals individually to the console using its index position
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
*/

/* .length */
console.log('Length = '+ animals.length);

/* forEach */
function sayHello(animalItem){
  console.log('Well, hello there ' + animalItem);
}

animals.forEach(sayHello);



/************************************************/
/************* CREATE DELETE BUTTON *************/
/************************************************/

/* GOAL: Create a delete button [x] and append (or attach) it to each list item */

var actionListItem = document.getElementsByClassName("action-li");

for (var i = 0; i < actionListItem.length; i++) {
  var newSpan = document.createElement("span");
  var x = document.createTextNode("X");
  newSpan.appendChild(x);
  actionListItem[i].appendChild(newSpan);
  
  newSpan.className = "deleteButton";
}


/************************************************/
/*************** ADD INTERACTION ****************/
/************************************************/

/* GOAL: Click on a close button to hide the current list item */

var deleteBtn = document.getElementsByClassName("deleteButton");

for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", closeListItem);
}

function closeListItem() {
  this.parentElement.style.display = "none";
}



