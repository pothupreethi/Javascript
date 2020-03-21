/*global fetch*/

/*fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => console.log(json));*/

//code starts from here

/*fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
  return response.json();
}).then(json => {
  json.forEach(event => {
    //creatingElementForPostApp(event.title, event.body);
    document.getElementById("loader").style.display = "none";
  })
})
*/



/*function creatingElementForPostApp(titleContent, bodyContent) {
  let div = document.createElement("div");
  div.setAttribute("class", "div-class");
  //console.log(div);
  let h3 = document.createElement("h3");
  let postBody = document.createElement("p");
  h3.innerHTML = titleContent;
  postBody.innerHTML = bodyContent;
  appendElementsToBody(div, h3, postBody);
}

function appendElementsToBody(div, h3, postBody) {
  div.appendChild(h3);
  div.appendChild(postBody);
  //document.body.appendChild(div);
}*/

let dropdown = document.getElementById("dropdown");
let userId;
let userDetails = document.getElementById('userDetails');
fetch('https://5e68646fd426c00016b7cf48.mockapi.io/api/v1/users').then((response) => {
  return response.json();
}).then(json => {
  json.forEach(event => {
    //console.log(event.userId);
    createTheDropDownElement(event.name);
    document.getElementById("loader").style.display = "none";
  })

})

function createTheDropDownElement(name) {
  let option = document.createElement("option");
  option.innerHTML = name;
  dropdown.appendChild(option);
}


dropdown.onchange = (event) => {
  userDetails.innerHTML = "";
  document.getElementById("loader").style.display = "flex";
  let name = event.target.value;
  fetch('https://5e68646fd426c00016b7cf48.mockapi.io/api/v1/users').then((response) => {
    return response.json();
  }).then(json => {
    json.forEach(event => {
      if (event.name === name) {
        userId = event.userId;
        createDivision(userId);
      }
    })
  })

}

function createDivision(userId) {
  fetch(`https://5e68646fd426c00016b7cf48.mockapi.io/api/v1/users/${userId}/posts`).then((response) => {
    return response.json();
  }).then(json => {
    console.log(json.length);
    //console.log(json[0].title, json[0].body, json[0].noOfComments);
    createTheDivisionElement(json[0].title, json[0].body, json[0].noOfComments);
  })
}

function createTheDivisionElement(title, body, noOfComments) {
  //creating div element 
  let div = document.createElement("div");
  div.setAttribute("class", "div-class");

  //creating h3 element
  let titleOfSelectedUser = document.createElement("h3");
  titleOfSelectedUser.setAttribute("class", "header-of-division");

  //creating paragraph element
  let bodyOfTheSelectedUser = document.createElement("p");
  bodyOfTheSelectedUser.setAttribute("class", "content-of-division");

  //creating span element
  let span = document.createElement("span");
  span.setAttribute("class", "comments");

  titleOfSelectedUser.innerHTML = title;
  bodyOfTheSelectedUser.innerHTML = body;
  span.innerHTML = `${noOfComments} Comments`;
  appendElementsToBody(div, titleOfSelectedUser, bodyOfTheSelectedUser, span);
}

function appendElementsToBody(div, titleOfSelectedUser, bodyOfTheSelectedUser, span) {
  div.appendChild(titleOfSelectedUser);
  div.appendChild(bodyOfTheSelectedUser);
  div.appendChild(span);
  //console.log(div);
  userDetails.appendChild(div);
  document.getElementById("loader").style.display = "none";
}
