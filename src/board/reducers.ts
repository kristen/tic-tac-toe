import {getType} from "typesafe-actions";
import * as actions from "./actions";
import {BoardActions} from "./actions";
import {combineReducers} from "redux";

export interface BoardState {
    squares: string[];
}

const squares = (state: string[] =  new Array(9), action: BoardActions) => {
    switch (action.type) {
        case getType(actions.clickSquare):
            const {i, value} = action.payload;
            const copy = [...state];
            copy[i] = value;
            return copy;
        default:
            return state;
    }
};

export default combineReducers({
    squares
});
