class TicTacToe {
    constructor(n) {
        //setup rows
        this.board = new Array(n)
        //setup columns
        for (let i = 0; i < n; i++) {
            this.board[i] = new Array(n)
        }
        this.won = false
        this.player = ''
        // console.log(this.board)
    }
    move(r, c, player) {
        if (this.won) return `Player ${this.player} has already won the game`
        if (this.board[r][c] === undefined &&
            r >= 0 && r < this.board.length &&
            c >= 0 && c < this.board.length) {
            this.board[r][c] = player
            return this.checkHorizontal(r, player) ||
                this.checkVertical(c, player) ||
                this.checkLeftDiagonal(player) ||
                this.checkRightDiagonal(player) ? (this.won = true, this.player = player) : 0
        }
        return 0
    }
    checkHorizontal(r, player) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[r][i] !== player) return false
        }
        return true
    }
    checkVertical(c, player) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][c] !== player) return false
        }
        return true
    }
    checkLeftDiagonal(player) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][i] !== player) return false
        }
        return true
    }
    checkRightDiagonal(player) {
        for (let i = this.board.length - 1; i >= 0; i--) {
            if (this.board[this.board.length - 1 - i][i] !== player) return false
        }
        return true
    }
}

const tictactoe = new TicTacToe(3)
console.log(tictactoe.move(0, 0, 1))
console.log(tictactoe.move(0, 2, 2))
console.log(tictactoe.move(2, 2, 1))
console.log(tictactoe.move(1, 1, 2))
console.log(tictactoe.move(2, 0, 1))
console.log(tictactoe.move(1, 0, 2))
console.log(tictactoe.move(2, 1, 1))

const next = new TicTacToe(3)
console.log(next.move(0, 0, 2))
console.log(next.move(1, 0, 2))
console.log(next.move(2, 0, 2))
console.log(next.move(1, 1, 1)) //invalid because player 2 already won
