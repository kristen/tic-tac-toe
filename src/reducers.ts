import { combineReducers } from "redux";
import board, {BoardState} from './board/reducers';

export interface RootState {
    board: BoardState;
}

export default combineReducers<RootState>({
    board
});
