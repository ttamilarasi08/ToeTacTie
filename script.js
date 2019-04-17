let turn = 0

let currentPlayer
const board = document.getElementById('board')
const restartBtn = document.getElementById('restart')

board.addEventListener('click', function(event) {

    if (turn % 2 == 0) {
        currentPlayer = 'X'
    } else {
        currentPlayer = 'O'
    }

    if (event.target.innerHTML == '') {
        event.target.innerHTML = currentPlayer
        turn++
        Win()
    }
})



restartBtn.addEventListener('click', function() {
    alert('Play from the Beginning')
    window.location.reload()
})

function Win() {
    if (board.children[0].innerHTML == currentPlayer &&
        board.children[1].innerHTML == currentPlayer &&
        board.children[2].innerHTML == currentPlayer) {
        alert('Congrats!! You Win')
    } else if (board.children[3].innerHTML == currentPlayer &&
        board.children[4].innerHTML == currentPlayer &&
        board.children[5].innerHTML == currentPlayer) {
        alert('Congrats!! You Win')
    } else if (board.children[6].innerHTML == currentPlayer &&
        board.children[7].innerHTML == currentPlayer &&
        board.children[8].innerHTML == currentPlayer) {
        alert('Congrats!! You Win')
    } else if (board.children[0].innerHTML == currentPlayer &&
        board.children[3].innerHTML == currentPlayer &&
        board.children[6].innerHTML == currentPlayer) {
        alert('Congrats!! You Win')
    } else if (board.children[1].innerHTML == currentPlayer &&
        board.children[4].innerHTML == currentPlayer &&
        board.children[7].innerHTML == currentPlayer) {
        alert('Congrats!! You Win')
    } else if (board.children[2].innerHTML == currentPlayer &&
        board.children[5].innerHTML == currentPlayer &&
        board.children[8].innerHTML == currentPlayer) {
        alert('Congrats!! You Win')
    } else if (board.children[0].innerHTML == currentPlayer &&
        board.children[4].innerHTML == currentPlayer &&
        board.children[8].innerHTML == currentPlayer) {
        alert('Congrats!! You Win')
    } else if (board.children[2].innerHTML == currentPlayer &&
        board.children[4].innerHTML == currentPlayer &&
        board.children[6].innerHTML == currentPlayer) {
        alert('Congrats!! You Win')
    } else if (turn == 9) alert('It is a TIE!! TRY AGAIN')
}