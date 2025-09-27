let size = 0;
const squareDimen = "39px";


const btnToClearAndRestart = document.querySelector("#button");
btnToClearAndRestart.addEventListener('click', () => {
    const mainDivGrid = document.createElement("div");
    mainDivGrid.setAttribute('id', 'main-div');
    document.body.appendChild(mainDivGrid);


    size = prompt("Enter square's dimension for this grid");

    for (let i = 0; i < size; i++) {
        const divForGrids = document.createElement("div");
        const selectorStringId = `container${i}`;
        divForGrids.setAttribute(`id`, selectorStringId);

        mainDivGrid.appendChild(divForGrids);

        for (let j = 0; j < size; j++) {
            const individualSquareDiv = document.createElement("div");
            const selectorStringClass = `eachDivSquare${j}`;
            individualSquareDiv.classList.add(selectorStringClass);
            individualSquareDiv.classList.add(`square`);

            individualSquareDiv.style.border = "1px solid black";
            individualSquareDiv.style.height = squareDimen;
            individualSquareDiv.style.width = squareDimen;

            divForGrids.appendChild(individualSquareDiv);
        }

        divForGrids.style.display = "flex";

    }
    
    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    function changeBackgroundColor(event) {
        const randColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        event.target.style.backgroundColor = randColor;
    }

    const entireGridBoard = document.querySelectorAll('.square');
        entireGridBoard.forEach((div) => {
        div.addEventListener("mouseenter", (event) => {
            changeBackgroundColor(event);
        });
    });
    
    btnToClearAndRestart.addEventListener('click', () => {
        document.body.removeChild(mainDivGrid);
    });
});