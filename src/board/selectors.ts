import { createSelector } from "reselect";
import {RootState} from "../reducers";
import {BoardState} from "./reducers";

const getBoard = (state: RootState) => state.board;
export const getSquares = createSelector(getBoard, (board: BoardState) => board.squares);
export const getXIsNext = createSelector(getBoard, (board: BoardState) => board.xIsNext);
export const getNextMove = createSelector(getXIsNext, (xIsNext: boolean) => xIsNext ? "X": "O");
