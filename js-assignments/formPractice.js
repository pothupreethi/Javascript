const submitButton = document.getElementById("submitButton");
submitButton.onclick = () => {
    event.preventDefault();
    console.log("submit button is clicked");
}
formE1.onsubmit = (event) => {
    event.preventDefault();
    console.log("submit button is clicked");
}
