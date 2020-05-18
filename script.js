 

/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* GOAL: Click on a list item to mark it checked */

//Store element with the id "my-list" in a variable
var fullItemList = document.getElementById("my-list");

if (fullItemList) {
  // add event listener
  fullItemList.addEventListener("click", checkOffItem, false);
}

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

var actionListItem = Array.from(document.getElementsByClassName("action-li"));

function addDeleteButton(actionListItem) {
  var newSpan = document.createElement("span");
  var x = document.createTextNode("X");
  newSpan.appendChild(x);
  actionListItem.appendChild(newSpan); 
  newSpan.className = "deleteButton";
}

if (actionListItem.length > 0) {
  actionListItem.forEach(addDeleteButton);
}



/************************************************/
/*************** ADD INTERACTION ****************/
/************************************************/

/* GOAL: Click on a close button to hide the current list item */

// Create an array from our delete buttons and store them in a variable
var deleteBtns = Array.from(document.getElementsByClassName("deleteButton"));

// forEach loop
if (deleteBtns.length > 0) {
  deleteBtns.forEach(listenForDeleteClicks);
}

// Function for the forEach loop that holds the event listener
function listenForDeleteClicks(deleteBtn) {
  deleteBtn.addEventListener("click", closeListItem);
}

// Function for event listener
function closeListItem() {
  this.parentElement.style.display = "none";
}



/*
var deleteBtn = document.getElementsByClassName("deleteButton");

for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", closeListItem);
}

function closeListItem() {
  this.parentElement.style.display = "none";
}
*/


