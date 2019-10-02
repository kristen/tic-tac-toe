import {BoardState} from "./reducers";
import {RootState} from "../reducers";
import {mockRootState} from "../mocks";

export const mockBoardState: BoardState = {
    squares: [],
    xIsNext: true,
};

export const mockBoardSquares = (squares: string[]): RootState => {
    const boardState = {...mockBoardState, ...{squares}};
    return {...mockRootState, ...{board: boardState}};
};

export const mockBoardXIsNext = (xIsNext: boolean): RootState => {
    const boardState = {...mockBoardState, ...{xIsNext}};
    return {...mockRootState, ...{board: boardState}};
};