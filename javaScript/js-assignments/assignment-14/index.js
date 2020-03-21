//Write your javascript logic here
/*let startOrStopBtn = document.getElementById("startOrStopBtn");
let accelerateBtn = document.getElementById("accelerate");
let decelerateBtn = document.getElementById("decelerate");
let status = document.getElementById("status");
let count = 0;
let speed = 10;
startOrStopBtn.addEventListener("click", function() {
    console.log(count)
    if (count % 2 === 0) {
        startOrStopBtn.innerHTML = "stop";
        startOrStopBtn.style.backgroundColor = "red";
        status.innerHTML = "Status:Running";
    }
    else {
        startOrStopBtn.innerHTML = "start";
        startOrStopBtn.style.backgroundColor = "#4CAF50";
        status.innerHTML = "Status:Stopped"
    }
    count++;
})
accelerateBtn.addEventListener("click", function() {
    if (speed > 0) {
        accelerateBtn.classList.add("onclick-change-background-color-accelerate-btn");
        status.innerHTML = `Running with speed of ${speed}km/h`
        speed += 10;
    }
    (speed==0){
        
    }

})
*/
const startOrStop = document.getElementById("startOrStop");
const accelerateCarSpeed = document.getElementById("accelerateCarSpeed");
const decelerateCarSpeed = document.getElementById("decelerateCarSpeed");
const carCurrentStatus = document.getElementById("carCurrentStatus");
const carFleetApp = document.getElementById("carFleetApp");
const carApp = document.getElementById("carApp");
const addCar = document.getElementById("addNewCar")

let initialCar;
window.onload = () => {
    initialCar = carApp.cloneNode(true);
}
class Car {
    constructor() {
        this.start = false;
        this.isCarAccelerating = false;
        //this.isCarDecelerating = false;
        this.stop = true;
        this.currentStatus = "Stopped";
        this.speed = 0;
    }
    startCar() {
        this.start = true;
        this.isCarAccelerating = false;
        this.stop = false;
        this.currentStatus = "Running";
    }
    Accelerate() {
        if (this.currentStatus === "Running") {
            this.speed += 10;
        }
    }
    stopCar() {
        this.start = false;
        //this.isCarAccelerating = false;
        this.stop = true;
        this.speed = 0;
        this.currentStatus = "Stopped";
    }
    decelerate() {
        if (this.currentStatus === "Running" && this.speed > 0) {
            this.speed -= 10;
        }
    }

}
const car = new Car();
startOrStop.onclick = event => {
    if (!car.start) {
        car.startCar();
        event.target.classList.add("stop");
        event.target.innerHTML = "Stop";
        accelerateCarSpeed.classList.add("accelerate");
        updateCurrentStatusOfTheCar();
    }

    else {
        car.stopCar();
        event.target.classList.remove("stop");
        event.target.innerHTML = "Start";
        accelerateCarSpeed.classList.remove("accelerate");
        updateCurrentStatusOfTheCar();
    }

};

function updateCurrentStatusOfTheCar() {
    if (car.speed === 0) {
        carCurrentStatus.innerHTML = car.currentStatus;
        decelerateCarSpeed.classList.remove("decelerate");
    }
    else {
        carCurrentStatus.innerHTML = `Car is running at ${car.speed}km/h`;
    }
}

accelerateCarSpeed.onclick = event => {
    if (car.start) {
        car.Accelerate();
        updateCurrentStatusOfTheCar();
        decelerateCarSpeed.classList.add("decelerate");
    }
};

decelerateCarSpeed.onclick = event => {
    car.decelerate();
    updateCurrentStatusOfTheCar();
};
let id = 0;
addCar.onclick = event => {
    let newCar = initialCar.cloneNode(true);
    // newCar.id = "clone"
    document.body.appendChild(newCar);
    id++;
    appendingClassNames(newCar, id);

};
/*let defaultStartOrStopId="startOrStopButton";
let defaultSpanStatusId="statusOfCarButton";
let defaultAccelerateId="accelerateButton";
let defaultDecelerateId="decelerateButton";*/


let defaultStartOrStopClass = document.getElementsByClassName("start-or-stop")
let defaultSpanStatusClass = document.getElementsByClassName("car-current-status");
let defaultAccelerateClass = document.getElementsByClassName("acceleration");
let defaultDecelerateClass = document.getElementsByClassName("deceleration");
console.log(defaultAccelerateClass.id);

function appendingClassNames(newCar, id) {
    let newCarDiv = document.createElement("div");
    let newstartbtn = document.createElement("button");
    let statusOfCar = document.createElement("span");
    let accelerationbtn = document.createElement("button");
    let deaceleratebtn = document.createElement("button");
    newstartbtn.setAttribute("id", "")
}
