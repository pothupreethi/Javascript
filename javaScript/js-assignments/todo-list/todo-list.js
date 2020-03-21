//Write your javascript logic here
/*let inputFromUser = document.getElementById('getInputFromUser');
let countOfTodoElements = 0;
let list = document.getElementById("myList");
let checkBox = document.getElementsByClassName("check-box");
let count0fItemsLeft = document.getElementById("itemsLeft")
let statusBar = document.getElementById("statusBar");
let all = document.getElementById("all");
let activeButton = document.getElementById("activeButton");
let completedButton = document.getElementById("completeButton");
let clearCompleted = document.getElementById("clearCompleted");
let close = document.getElementsByClassName("close");



inputFromUser.onkeypress = (event) => {
    if (event.keyCode === 13) {
        createNewElement(inputFromUser.value);

    }

}

function createNewElement(element) {
    if (element === '') {
        alert("You must write something!");
    }
    else {
        //creating list
        let creatingList = document.createElement("li");

        let checkBoxElement = document.createElement("input");
        checkBoxElement.setAttribute("type", "checkbox");
        creatingList.appendChild(checkBoxElement);
        checkBoxElement.className = "check-box";
        checkBoxElement.setAttribute("id", "checkBoxId");


        let text = document.createElement("INPUT");
        text.setAttribute("type", "text");
        text.setAttribute("value", element);
        creatingList.appendChild(text);


        let span = document.createElement("SPAN");
        let txt = document.createTextNode("×");
        span.className = "close";
        span.appendChild(txt);
        creatingList.appendChild(span);
        list.appendChild(creatingList);


        console.log(creatingList);
        countOfTodoElements = countOfTodoElements + 1;
        deleteTodoNode()
        checkBoxStatus();
        displayItemLeft(countOfTodoElements);
        displayAllItems();
        displayActiveButton();
        displayCompletedButton();
        displayClearCompleted();
        inputFromUser.value = "";

        console.log(close)

    }
}


function deleteTodoNode() {
    let i;
    //console.log(close.length);
    for (i = close.length - 1; i >= 0; i--) {
        close[i].onclick = function(event) {
            console.log(event.target);
            if (event.target.parentElement.firstElementChild.checked === false) {
                let div = event.target.parentElement;
                list.removeChild(div);
                countOfTodoElements = countOfTodoElements - 1;
                displayItemLeft(countOfTodoElements);
            }
            else {
                let div = event.target.parentElement;
                list.removeChild(div);
            }

        }
    }

}

function checkBoxStatus() {
    //alert(checkBox.length);

    for (let i = 0; i < checkBox.length; i++) {
        //  console.log(checkBox[i])
        checkBox[i].onclick = function(event) {
            let nextSiblingOfCheckBox = event.target.nextElementSibling;
            console.log(checkBox[i].checked)
            if (checkBox[i].checked) {
                nextSiblingOfCheckBox.style.textDecoration = "line-through";
                nextSiblingOfCheckBox.disabled = true;
                countOfTodoElements = countOfTodoElements - 1;
                // alert(countOfTodoElements);
            }
            else {
                nextSiblingOfCheckBox.style.textDecoration = "none";
                nextSiblingOfCheckBox.disabled = false;
                countOfTodoElements = countOfTodoElements + 1;
                // alert(countOfTodoElements);
            }
            displayItemLeft(countOfTodoElements);
        }


    }


}

function displayItemLeft(count) {
    let value = `${count} items left`;
    count0fItemsLeft.innerHTML = value;
    if (count > 0) {
        statusBar.style.display = "flex"
        // statusBar.style.display = "block";

    }
    else {

    }

}

function displayAllItems() {
    all.onclick = function(event) {
        //console.log(list.children.length);
        for (let i = 0; i < list.children.length; i++) {
            list.children[i].style.display = "flex";
            //console.log("enter");
        }
    }
}

function displayActiveButton() {
    activeButton.onclick = function(event) {
        //addEventAllItems();
        for (let i = 0; i < list.children.length; i++) {
            // console.log(list.children[i].firstChild);
            if ((list.children[i].firstChild).checked === true) {
                list.children[i].style.display = "none";
            }
            else {
                list.children[i].style.display = "flex";
            }
        }
    }
}

function displayCompletedButton() {
    completedButton.onclick = function() {
        // addEventAllItems();
        for (let i = 0; i < list.children.length; i++) {
            //console.log(list.children[i].firstChild);
            if ((list.children[i].firstChild).checked === true) {
                list.children[i].style.display = "flex";
            }
            else {
                list.children[i].style.display = "none";
            }
        }
    }
}

function displayClearCompleted() {
    clearCompleted.onclick = function() {
        let list = document.querySelectorAll('li');
        for (let i = 0; i < list.length; i++) {
            let elements = list[i].querySelector('*');
            if (elements.checked) {
                list[i].parentNode.removeChild(list[i]);
                // countOfTodoElements = countOfTodoElements - 1;

            }
        }

    }
}

// function displayClearCompleted() {
//     clearCompleted.onclick = function() {
//         //addEventAllItems();

//         //alert(list.children.length);
//         let i;
//         for (i = 0; i < list.children.length; i++) {
//             console.log(list);
//             if ((list.children[i].firstChild).checked === true) {
//                 list.parentNode.removeChild(list.children[i]);

//                 //countOfTodoElements -= 1;


//             }
//             //alert(i);
//         }
//         //displayItemLeft(countOfTodoElements);

//     }
// }
*/
let inputFromUser = document.getElementById('getInputFromUser');
let countOfTodoElements = 0;
let list = document.getElementById("myList");
let countOfItemsLeft = document.getElementById("itemsLeft")
let statusBar = document.getElementById("statusBar");



inputFromUser.onkeypress = (event) => {
    if (event.keyCode === 13) {
        createNewElement(inputFromUser.value);

    }

}

function createNewElement(element) {
    if (element === '') {
        alert("You must write something!");
    }
    else {
        //creating list
        let creatingList = document.createElement("li");
        creatingList.setAttribute("Id", "listId");
        let checkBoxElement = document.createElement("input");
        checkBoxElement.setAttribute("type", "checkbox");
        creatingList.appendChild(checkBoxElement);
        checkBoxElement.className = "check-box";
        checkBoxElement.setAttribute("id", "checkBoxId");


        let text = document.createElement("INPUT");
        text.setAttribute("type", "text");
        text.setAttribute("value", element);
        creatingList.appendChild(text);


        let span = document.createElement("SPAN");
        let txt = document.createTextNode("×");
        span.className = "close";
        span.appendChild(txt);
        creatingList.appendChild(span);
        list.appendChild(creatingList);



        console.log(creatingList);
        countOfTodoElements = countOfTodoElements + 1;
        let checkBox = document.getElementsByClassName("check-box");
        let all = document.getElementById("all");
        let activeButton = document.getElementById("activeButton");
        let completedButton = document.getElementById("completeButton");
        let clearCompleted = document.getElementById("clearCompleted");
        let close = document.getElementsByClassName("close");

        deleteTodoNode(close)
        checkBoxStatus(checkBox);
        displayItemLeft(countOfTodoElements);
        displayAllItems(all);
        displayActiveButton(activeButton);
        displayCompletedButton(completedButton);
        displayClearCompleted(clearCompleted);
        inputFromUser.value = "";

        console.log(close)

    }
}


function deleteTodoNode(close) {
    let i;
    //console.log(close.length);
    for (i = close.length - 1; i >= 0; i--) {
        close[i].onclick = function(event) {
            //console.log(event.target);
            if (event.target.parentElement.firstElementChild.checked === false) {
                let div = event.target.parentElement;
                list.removeChild(div);
                countOfTodoElements = countOfTodoElements - 1;
                displayItemLeft(countOfTodoElements);
            }
            else {
                let div = event.target.parentElement;
                list.removeChild(div);
            }

        }
    }

}

function checkBoxStatus(checkBox) {
    //alert(checkBox.length);

    for (let i = 0; i < checkBox.length; i++) {
        //alert(checkBox.length);
        //  console.log(checkBox[i])
        checkBox[i].onclick = function(event) {

            //console.log(checkBox[i].checked)
            //alert(checkBox[i].checked);
            if (event.target.checked) {
                let nextSiblingOfCheckBox = event.target.nextElementSibling;
                nextSiblingOfCheckBox.style.textDecoration = "line-through";
                nextSiblingOfCheckBox.disabled = true;
                countOfTodoElements = countOfTodoElements - 1;
                // alert(countOfTodoElements);
            }
            else {
                let nextSiblingOfCheckBox = event.target.nextElementSibling;
                nextSiblingOfCheckBox.style.textDecoration = "none";
                nextSiblingOfCheckBox.disabled = false;
                countOfTodoElements = countOfTodoElements + 1;
                // alert(countOfTodoElements);
            }
            displayItemLeft(countOfTodoElements);
        }


    }


}

function displayItemLeft(countOfTodoElements) {
    let value = `${countOfTodoElements} items left`;
    countOfItemsLeft.innerHTML = value;
    if (countOfTodoElements > 0) {
        statusBar.style.display = "flex";
        // statusBar.style.display = "block";

    }
    else if (countOfTodoElements === 0 && list.children.length === 1) {
        statusBar.style.display = "none";
    }
    console.log(list.children.length);
}

function displayAllItems(all) {
    all.onclick = function(event) {
        //console.log(list.children.length);
        let list = document.querySelectorAll('li');
        console.log(list);
        for (let i = 0; i < list.length; i++) {
            let elements = list[i].querySelector('*');
            elements.parentElement.style.display = "flex";
            //console.log("enter");
        }
    }
}

function displayActiveButton(activeButton) {
    activeButton.onclick = function(event) {
        let list = document.querySelectorAll('li');
        for (let i = 0; i < list.length; i++) {
            // console.log(list.children[i].firstChild);
            let elements = list[i].querySelector('*');
            if (elements.checked === true) {
                elements.parentElement.style.display = "none";
            }
            else {
                elements.parentElement.style.display = "flex";
            }
        }
    }
}

function displayCompletedButton(completedButton) {
    completedButton.onclick = function() {
        let list = document.querySelectorAll('li');
        for (let i = 0; i < list.length; i++) {
            let elements = list[i].querySelector('*');
            if (elements.checked === true) {
                elements.parentElement.style.display = "flex";
            }
            else {
                elements.parentElement.style.display = "none";
            }
        }
    }
}

function displayClearCompleted(clearCompleted) {
    clearCompleted.onclick = function() {
        let list = document.querySelectorAll('li');
        for (let i = 0; i < list.length; i++) {
            let elements = list[i].querySelector('*');
            if (elements.checked) {
                list[i].parentNode.removeChild(list[i]);
                count += 1;
                //console.log(count);
                // countOfTodoElements = countOfTodoElements - 1;

            }
        }

    }
}

// function displayClearCompleted() {
//     clearCompleted.onclick = function() {
//         //addEventAllItems();

//         //alert(list.children.length);
//         let i;
//         for (i = 0; i < list.children.length; i++) {
//             console.log(list);
//             if ((list.children[i].firstChild).checked === true) {
//                 list.parentNode.removeChild(list.children[i]);

//                 //countOfTodoElements -= 1;


//             }
//             //alert(i);
//         }
//         //displayItemLeft(countOfTodoElements);

//     }
// }
