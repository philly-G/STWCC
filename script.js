 

/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* GOAL: Click on a list item to mark it checked */

var fullItemList = document.getElementById("my-list");
fullItemList.addEventListener("click", checkOffItem, false);

function checkOffItem(clicked) {
  //find out which element triggered a specified event
  if (clicked.target.tagName == "LI") {
    //apply the CSS rule set outlined in .all-done if condition is met
    clicked.target.classList.toggle("all-done");
  }
}


/************************************************/
/****************** TRY A LOOP ******************/
/************************************************/

/* Add code to practice loops here */
/* Be sure to delete them or comment them out when you are finished with that section */


/************************************************/
/************* CREATE DELETE BUTTON *************/
/************************************************/

/* GOAL: Create a delete button [x] and append (or attach) it to each list item */

var actionListItem = document.getElementsByClassName("action-li");

for (var i = 0; i < 3; i++) {
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


/************************************************/
/************** CODE FOR EXTENSIONS *************/
/************************************************/

//UNCOMMENT TO ADD, COMPLETE, AND DELETE NEW ITEMS
/* Add new items 
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", newActionItem);

function newActionItem() {
  //Create a new "li" element to hold the action item you enter
  var newListElement = document.createElement("li");

  //Create a variable to select and store the value of what is entered into the input box
  //WHAT IS .VALUE?!! Debug alert
  var inputBoxValue = document.getElementById("task-entry-box").value;

  //Add a variable that creates a new text node containing the value of the input box
  var actionItemText = document.createTextNode(inputBoxValue);

  //Append or attach the new list text you entered to the new "li" element you created
  newListElement.appendChild(actionItemText);

  if (inputBoxValue === " ") {
    alert("Please enter your action item");
  } else {
    //Find and select the HTML ul element called my-list and attach the li
    //element containing our action item text to the end of the list
    document.getElementById("my-list").appendChild(newListElement);
  }
  //Pretty sure this will remove the text from the input box
  document.getElementById("task-entry-box").value = "";

  
  //add delete button to each new item - still need to commemnt this
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "deleteButton";
  span.appendChild(txt);
  newListElement.appendChild(span);
  
  //ability to delete all new items
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
*/
