//Write your javascript logic here
let rightSideHeight = 500;
/*let changeColorBlue = (input1) => {
    document.getElementById(input1).style.backgroundColor = "blue";

}
let changeColorGreen = (input1) => {
    document.getElementById(input1).style.backgroundColor = "green";

}
let changeColorRed = (input1) => {
    document.getElementById(input1).style.backgroundColor = "red";

}*/
let moveUpwards = () => {
    if (rightSideHeight > 100) {
        rightSideHeight -= 10;
        let value = `${rightSideHeight}px`;
        document.getElementById("leftside").style.height = value;

    }
}
let onClickChangeColor = (input, color) => {
    document.getElementById(input).style.backgroundColor = color;
}
let moveDownwards = () => {
    if (rightSideHeight < 500) {
        rightSideHeight += 10;
        let value = `${rightSideHeight}px`;
        document.getElementById("leftside").style.height = value;


    }
}
let shiftLeft = () => {

    document.getElementById("leftside").style.order = "0";
}
let shiftRight = () => {

    document.getElementById("leftside").style.order = "1";
}
/*
let shiftDivision1Down = () => {
    let value = div1;
    div1 = div2;
    div2 = value;
    document.getElementById("div1").style.backgroundColor = div1;
    document.getElementById("div2").style.backgroundColor = div2;
}
let shiftDivision2Down = () => {
    //alert(div2);
    //alert(div3);

    let value = div2;
    div2 = div3;
    div3 = value;
    document.getElementById("div2").style.backgroundColor = div2;
    document.getElementById("div3").style.backgroundColor = div3;
}
let shiftDivision2Up = () => {
    let value = div2;
    div2 = div1;
    div1 = value;
    document.getElementById("div2").style.backgroundColor = div2;
    document.getElementById("div1").style.backgroundColor = div1;
}
let shiftDivision3UP = () => {
    let value = div3;
    div3 = div2;
    div2 = value;
    document.getElementById("div3").style.backgroundColor = div3;
    document.getElementById("div2").style.backgroundColor = div2;
}*/
function shiftColorDivision(input1, input2) {
    let color1 = document.getElementById(input1).style.backgroundColor;
    let color2 = document.getElementById(input2).style.backgroundColor;
    document.getElementById(input1).style.backgroundColor = color2;
    document.getElementById(input2).style.backgroundColor = color1;
}
let resetTheRgbApp = (input1, input2, input3, input4) => {


    document.getElementById(input1).style.backgroundColor = "green";
    document.getElementById(input2).style.backgroundColor = "green";
    document.getElementById(input3).style.backgroundColor = "green";
    document.getElementById(input4).style.backgroundColor = "green";



}
let addAnotherDivision = (input1) => {
    document.getElementById("div1").style.height = "90px"
    document.getElementById("div2").style.height = "90px"
    document.getElementById("div3").style.height = "90px"
    document.getElementById(input1).style.display = "inline";
}
