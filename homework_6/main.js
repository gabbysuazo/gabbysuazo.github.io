// Choose Glazing Option

let x = 0

function chooseGlazing() {
    document.getElementById("glazing-option").selected = "false";
    let glazingOption = event.target;
    glazingOption.selected = "true";

    if (glazingOption.selected = "true") {
        glazingOption.style.backgroundColor = "#6A8DA5";
        glazingOption.style.color = "#f8f8f8";
    }
}