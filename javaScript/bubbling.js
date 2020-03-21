const firstElement = document.getElementById("one");
const secondElement = document.getElementById("two");
//console.log(firstElement);
firstElement.addEventListener("click", () => {
    console.log("first div")
    console.log(event.currentTarget);
    console.log("log1>>>>>>>>>>");
}, true)
/*
secondElement.onclick = (event) => {
    console.log("second-div");
    console.log(event.currentTarget);
    console.log('log2>>>>>>>>');
    //event.stopPropagation();
}
*/
secondElement.addEventListener("click", () => {
    console.log("second-div");
    console.log(event.currentTarget);
    console.log('log2>>>>>>>>');

});
