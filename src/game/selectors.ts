import {createSelector} from "reselect";
import {RootState} from "../reducers";
import {BoardHistory, GameState} from "./reducers";

const getGame = (state: RootState) => state.game;
export const getHistory = createSelector(getGame, (game: GameState) => game.history);
export const getCurrentSquares = createSelector(getHistory, (history: BoardHistory[]) => {
    const current = history[history.length - 1];
    return current ? current.squares : new Array(9);
});
export const getXIsNext = createSelector(getGame, (game: GameState) => game.xIsNext);
export const getNextMove = createSelector(getXIsNext, (xIsNext: boolean) => xIsNext ? "X": "O");
export const getWinner = createSelector(getCurrentSquares, (squares: string[]) => {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
        const [x, y, z] = winningLines[i];
        // transitive property x == y && y == x, therefore x also == z
        if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
            return squares[x];
        }
    }
    return null; // TODO add in fp-ts/Option
});
