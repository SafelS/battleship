

const Gamefield = (()=>{

    const mainDiv = document.getElementById("mainDiv");

    for(let y = 0; y < 10; y++){
        for(let x = 0; x < 10; x++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = "field"
            cell.dataset.x = x;
            cell.dataset.y = y;
            mainDiv.append(cell);
        }
    }


})();