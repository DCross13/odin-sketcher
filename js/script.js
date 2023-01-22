//create DOM objects
const grid = document.querySelector(".grid.container");
const slider = document.querySelector(".slider");
const applySizeBtn = document.querySelector("#sizeApply");
const colorPick = document.querySelector("#colorPick");

//create event listeners
applySizeBtn.addEventListener("click", () => {createCanvas(slider.value)});

grid.addEventListener("mouseenter", () => {darkenSquare()});

//console.log(slider.value);

createCanvas(slider.value); //create initial canvas

function setSquareSize()
{
    let size = grid.clientHeight/slider.value;
    //console.log(Math.floor(size));
    return Math.floor(size);
}

// console.log(setSquareSize())

function createCanvas(val)
{
    //console.log("running");
    grid.innerHTML = "";

    for (let i = 0; i < val*val; i++)
    {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = "darkred";
        square.style.margin = "0";
        square.style.minHeight = setSquareSize() + "px";
        square.style.minWidth = setSquareSize() + "px";
        grid.appendChild(square);
    }
}

function darkenSquare()
{
    console.log("running");
    const square = document.querySelectorAll("square")
    square.backgroundColor = "#333333";
}