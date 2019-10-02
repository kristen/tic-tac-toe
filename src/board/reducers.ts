import {getType} from "typesafe-actions";
import * as actions from "./actions";
import {BoardActions} from "./actions";
import {combineReducers} from "redux";

export interface BoardState {
    squares: string[];
    xIsNext: boolean;
}

const squares = (state: string[] =  new Array(9), action: BoardActions) => {
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

const xIsNext = (state: boolean = true, action: BoardActions) => {
    switch (action.type) {
        case getType(actions.clickSquare):
            return !state;
        default:
            return state;
    }
};

export default combineReducers({
    squares,
    xIsNext,
});
