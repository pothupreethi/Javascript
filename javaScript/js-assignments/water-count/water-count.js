const glassElements = document.querySelectorAll(".water-capacity");
let updationOfFilledContainer = document.getElementById('waterCompletedStatus');
let remainingWaterUpdation = document.getElementById('waterRemainedStatus');

let glasses = [
    { id: "glass1", glassstate: false },
    { id: "glass2", glassstate: false },
    { id: "glass3", glassstate: false },
    { id: "glass4", glassstate: false },
    { id: "glass5", glassstate: false },
    { id: "glass6", glassstate: false },
    { id: "glass7", glassstate: false },
    { id: "glass8", glassstate: false }
];

glassElements.forEach((glassEl) => {
    glassEl.onclick = (event) => {
        findIndexAndUpdateAppState(event.currentTarget.id);
    };
});

function findIndexAndUpdateAppState(id) {
    let currentGlassObj = glasses.find((glass) => {
        return glass.id === id;
    });
    const indexValue = glasses.indexOf(currentGlassObj);
    if (glasses[indexValue].glassstate) {
        if (indexValue == 7 || !glasses[indexValue + 1].glassstate) {
            glasses[indexValue].glassstate = false;
            updateTheGlasses(indexValue);
        }
        else {
            updateTheglassesObject(indexValue);
            updateTheGlasses(indexValue + 1);
        }
    }
    else {
        updateTheglassesObject(indexValue);
        updateTheGlasses(indexValue + 1);
    }
}

function updateTheglassesObject(count) {
    for (let i = 0; i < glasses.length; i++) {
        if (i <= count) {
            glasses[i].glassstate = true;
        }
        else {
            glasses[i].glassstate = false;
        }
    }

}

function updateTheGlasses(count) {
    for (let i = 0; i < glasses.length; i++) {
        if (glasses[i].glassstate) {
            document.getElementById(glasses[i].id).classList.add("mystyle");
        }
        else {
            if (document.getElementById(glasses[i].id).classList.contains('mystyle')) {
                document.getElementById(glasses[i].id).classList.remove("mystyle");
            }
        }
    }
    let updateHeight = 100 - (count * 12.5);
    let updateRemainingHeight = count * 12.5;
    let updateLiters = 2.00 - count * 0.25;
    updationOfFilledContainer.style.height = `${updateRemainingHeight}%`;
    updationOfFilledContainer.innerHTML = `${updateRemainingHeight}%`;
    remainingWaterUpdation.style.height = `${updateHeight}%`;
    remainingWaterUpdation.innerHTML = `${updateLiters}ml remained`
}
window.onload = function() {
    if (localStorage) {
        document.getElementById('waterContainer').style.height = "30%"
    }
}
