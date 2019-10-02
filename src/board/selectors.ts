import { createSelector } from "reselect";
import {RootState} from "../reducers";
import {BoardState} from "./reducers";

const getBoard = (state: RootState) => state.board;
export const getSquares = createSelector(getBoard, (board: BoardState) => board.squares);
export const getXIsNext = createSelector(getBoard, (board: BoardState) => board.xIsNext);
export const getNextMove = createSelector(getXIsNext, (xIsNext: boolean) => xIsNext ? "X": "O");
export const getWinner = createSelector(getSquares, (squares: string[]) => {
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
