document.addEventListener('DOMContentLoaded', () => {
    const cells = document.getElementsByClassName('cells');
    console.log(cells);
    const turnBoard = document.getElementById('turn');
    let xORo = 'X';

    turnBoard.textContent = "Turn: " + xORo;

    const X = [];
    const O = [];

    const startGame = document.getElementById('startGame');

    startGame.addEventListener('click', () => {
        startGame.style.display = 'none';
        OXeventListener();
        // gameLoop();
    });

    function OXeventListener() {
        for(let i = 0; i < cells.length; i++) {
            cells[i].isChanged = false;

            cells[i].addEventListener('click', handleClick)
        }
    }

    function handleClick(event) {
        if(event.target.isChanged) {
            return;
        }

        if(xORo === 'X') {
            event.target.textContent = "X";
            xORo = 'O';
            const index = cells.HTMLCollection.findIndex(x => x === event.target);
            console.log(index);
        } else if(xORo === 'O') {
            event.target.textContent = 'O';
            xORo = 'X';
            // const index = cells.findIndex(event.target);
            // console.log(index);
        }
        event.target.isChanged = true;
        updateTurnBoard();
    }

    function updateTurnBoard() {
        turnBoard.textContent = "Turn: " + xORo;
    }
})