const sketchGame = () => {
    //16x16 grid of divs. Most likely put in its own function when functionality for user size is implemented 
    //const mainSquare = document.querySelector('.square');
    let divArray = [];
    const square = document.querySelector('.square');
    const gridSize = 22;

    for (let i =0; i < gridSize * gridSize; i++) {
        const newSquare = document.createElement('div');
        newSquare.className = 'small-square';
        newSquare.style.height = `${Math.round(square.clientHeight/gridSize)}px`
        newSquare.style.width = `${Math.round(square.clientWidth/gridSize)}px`
        divArray[i] = newSquare;
        square.append(newSquare);
    }
    console.log(divArray[0]);

    divArray.forEach(square => {
        square.addEventListener('mouseover', (e) => {
             console.log('hovered');
             square.style.backgroundColor = 'black';
        });
    });
    
}

sketchGame();