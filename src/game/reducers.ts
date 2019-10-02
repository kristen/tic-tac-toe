import {getType} from "typesafe-actions";
import * as actions from "../board/actions";
import {BoardActions} from "../board/actions";
import {combineReducers} from "redux";

export interface BoardHistory {
    squares: string[];
}

export interface GameState {
    history: BoardHistory[];
    xIsNext: boolean;
}

export const history = (state: BoardHistory[] = [], action: BoardActions) => {
    switch (action.type) {
        case getType(actions.clickSquare):
            const current = state[state.length - 1];
            const currentSquares = current && current.squares;
            const updatedSquares = squares(currentSquares, action);
            return [...state, {squares: updatedSquares}];
        default:
            return state;
    }
};

export const squares = (state: string[] =  new Array(9), action: BoardActions) => {
    switch (action.type) {
        case getType(actions.clickSquare):
            const {i, xIsNext} = action.payload;
            const copy = [...state];
            copy[i] = xIsNext ? "X" : "O";
            return copy;
        default:
            return state;
    }
};

export const xIsNext = (state: boolean = true, action: BoardActions) => {
    switch (action.type) {
        case getType(actions.clickSquare):
            return !state;
        default:
            return state;
    }
};

export default combineReducers({
    history,
    xIsNext,
});
