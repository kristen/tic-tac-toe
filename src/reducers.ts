import { combineReducers } from "redux";
import game, {GameState} from "./game/reducers";

export interface RootState {
    game: GameState;
}

export default combineReducers<RootState>({
    game,
});
