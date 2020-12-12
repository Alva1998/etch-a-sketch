const sketchGame = () => {
    const square = document.querySelector('.square');
    const input = document.querySelector('input');
    let userGrid = 16;
    let divArray = [];
    let gridSize = userGrid ** 2;

    const userGridSize = () => {
        const button = document.querySelector('button');
        button.addEventListener('click', () => {
            if (input.value <= 64) {
                userGrid = input.value;
                gridSize = userGrid ** 2;
                eraseGrid();
                generateGrid();
                activateGrid();
            } else {
                alert('Grid Dimensions can not be greater than 64');
            }
        });
    }

    const eraseGrid = () => {
        for (let i = 0; i < divArray.length; i++) {
            square.removeChild(divArray[i]);
        }
        divArray.length = 0;
        colorChanges();
    }

    const generateGrid = () => {
        const height = `${Math.round(square.clientHeight/userGrid)}px`
        const width = `${Math.round(square.clientWidth/userGrid)}px`
        for (let i = 0; i < gridSize; i++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('small-square');
            newSquare.style.height = height;
            newSquare.style.width = width;
            divArray[i] = newSquare;
            square.append(newSquare);
        }
    }

    const activateGrid = () => {
        divArray.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });
        });
    }

    const getRandomColor = () => {
        // const red = Math.floor(Math.random() * 256/2);
        // const green = Math.floor(Math.random() * 256/2);
        // const blue = Math.floor(Math.random() * 256/2);
        // return `rgb(${red}, ${green}, ${blue})`;
        return `hsl(${Math.random() * 360}, 85%, 50%)`;
    }

    const rainbow = () => {
        divArray.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = getRandomColor();
            });
        });
    }

    const colorChanges = () => {
        const colors = document.getElementsByName('color');
        colors.forEach(color => {
            color.addEventListener('click', (e) => {
                if (e.target.value === 'black') {
                    activateGrid();
                } else if (e.target.value === 'rainbow') {
                    rainbow();
                }
            });
        });
    }

    const clearBoard = () => {
        const erase = document.querySelector('#erase');
        erase.addEventListener('click', () => {
            divArray.forEach(square => {
                square.style.backgroundColor = 'white';
            });
        });
    }

    userGridSize();
    generateGrid();
    activateGrid();
    colorChanges();
    clearBoard();
}

sketchGame();