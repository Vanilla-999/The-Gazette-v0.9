const board = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];
 
function createBoard() {
    const boardElement = document.getElementById('sudoku-board');
    boardElement.innerHTML = '';
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.min = 1;
            input.max = 9;
            // Ограничение ввода до одного символа 
            input.addEventListener('input', function() {
                if (this.value.length > 1) {
                    this.value = this.value.slice(0, 1);
                }
            });

            if (board[row][col] !== 0) {
                input.value = board[row][col];
                input.disabled = true;
                input.style.backgroundColor = '#f0f0f0';
            }
            boardElement.appendChild(input);
        }
    }
}
 
createBoard(); 
 