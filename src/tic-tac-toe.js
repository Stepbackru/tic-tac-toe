class TicTacToe {
    constructor() {
        this.gameMap = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.x = 'x';
        this.o = 'o';
        this.currentSymbol = this.x;
        this.score = {
            "x": 0,
            "o": 0
        };
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.gameMap[rowIndex][columnIndex]) {
            this.gameMap[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = this.currentSymbol === this.x ? this.o : this.x;
        }

    }

    isFinished() {
        return !!this.getWinner() || this.isDraw();
    }

    getWinner() {
        for (let i = 0; i < this.gameMap.length; i++) {
            if (this.gameMap[i][0] == this.gameMap[i][1] &&
                this.gameMap[i][0] == this.gameMap[i][2]) {
                    return this.gameMap[i][0];
            }
        }
        for (let i = 0; i < this.gameMap.length; i++) {
            if (this.gameMap[0][i] == this.gameMap[1][i] &&
                this.gameMap[0][i] == this.gameMap[2][i]) {
                   return this.gameMap[0][i];
            }
        }
        if (this.gameMap[0][0] == this.gameMap[1][1] &&
            this.gameMap[1][1] == this.gameMap[2][2]) {
                return this.gameMap[0][0];
        }

        if (this.gameMap[0][2] == this.gameMap[1][1] &&
            this.gameMap[1][1] == this.gameMap[2][0]) {
                return this.gameMap[0][2];
        }

        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.gameMap.length; i++) {
            for (let j = 0; j < this.gameMap.length; j++) {
                if (!this.gameMap[i][j]) {
                    return false
                }
            }
        }
        return true;
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameMap[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
