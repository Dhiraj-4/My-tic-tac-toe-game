document.addEventListener('DOMContentLoaded', () => {
    const cells = document.getElementsByClassName('cells');
    console.log(cells);
    const turnBoard = document.getElementById('turn');
    let xORo = 'X';

    turnBoard.textContent = "Turn: " + xORo;

    const startGame = document.getElementById('startGame');

    startGame.addEventListener('click', () => {
        startGame.style.display = 'none';
        OXeventListener();
        gameLoop();
    });
    function updateTurnBoard() {
        turnBoard.textContent = "Turn: " + xORo;
    }

    function gameLoop() {
        intervels = setInterval( () => {
            if(Win()) {
                clearInterval(intervels);
                removeOXeventListener();
                if(xORo === 'X') {
                    alert("O Won the match");
                }
                else {
                    alert("X Won the match");
                }
            }
            if(Draw()) {
                clearInterval(intervels);
                removeOXeventListener();
                alert('The Game was a Draw');
            }
        },50);
    }

    function Draw() {

        for(let i = 0; i < cells.length; i++) {
            if(cells[i].isChanged == false) {
                return false;
            }
        }
        return true;
    }

    
    function removeOXeventListener() {
        for(let i = 0; i < cells.length; i++) {
            cells[i].removeEventListener('click',handleClick);
        }
    }

    function Win() {

        function verticalWin() {
            if(cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
                return true;
            }
            else if(cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
                return true;
            }
            else if(cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
                return true;
            }
            else if(cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
                return true;
            }
            else if(cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
                return true;
            }
            else if(cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
                return true;
            } else {
                return false;
            }
        }

        function horizontalWin() {
            if(cells[0].textContent == 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
                return true;
            }
            else if(cells[0].textContent == 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
                return true;
            }
            else if(cells[3].textContent == 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
                return true;
            }
            else if(cells[3].textContent == 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
                return true;
            }
            else if(cells[6].textContent == 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
                return true;
            }
            else if(cells[6].textContent == 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
                return true;
            }
            else {
                return false;
            }
        }

        function diagonalWin() {
            if(cells[0].textContent == 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
                return true;
            }
            else if(cells[0].textContent == 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
                return true;
            }
            else if(cells[2].textContent == 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
                return true;
            }
            else if(cells[2].textContent == 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
                return true;
            }
            else {
                return false;
            }
        }

        return verticalWin() || horizontalWin() || diagonalWin();
    }

    function OXeventListener() {
        for(let i = 0; i < cells.length; i++) {
            cells[i].isChanged = false;
            cells[i].addEventListener('click', handleClick);
        }
    }

    function handleClick(event) {
        if(event.target.isChanged) {
            return;
        }
        if(xORo === 'X') {
            event.target.textContent = "X";
            xORo = "O";
        }
        else if(xORo === 'O') {
            event.target.textContent = 'O';
            xORo = "X";
        }
        event.target.isChanged = true;
        updateTurnBoard();
    }

})