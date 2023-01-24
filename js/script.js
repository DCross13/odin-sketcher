//create DOM objects
const grid = document.querySelector(".grid.container");
const slider = document.querySelector(".slider");
const applySizeBtn = document.querySelector("#sizeApply");
const colorPick = document.querySelector("#colorPick");
const clearBtn = document.querySelector("#clearBtn");

//create event listeners
applySizeBtn.addEventListener("click", () => {createCanvas(slider.value)});
clearBtn.addEventListener("click", () => {createCanvas(slider.value)});



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
        //console.log("square" + " " + i);
        square.classList.add("square" + "-" + i);
        square.style.backgroundColor = "#FCFBFB";
        square.style.margin = "0";
        square.style.minHeight = setSquareSize() + "px";
        square.style.minWidth = setSquareSize() + "px";
        grid.appendChild(square);
        square.addEventListener("mouseenter", () => {darkenSquare(i)});
    }
}

function darkenSquare(id)
{
    //console.log("running");
    const square = document.querySelector(".square" + "-" + id);
    square.style.backgroundColor = "#333333";
}