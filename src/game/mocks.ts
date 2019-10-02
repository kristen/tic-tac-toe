import {RootState} from "../reducers";
import {mockRootState} from "../mocks";

export const mockSquares = (squares: string[]): RootState => {
    const history = [...mockRootState.game.history, {squares}];
    const gameState = {...mockRootState.game, ...{history}};
    return {...mockRootState, ...{game: gameState}};
};

export const mockXIsNext = (xIsNext: boolean): RootState => {
    const gameState = {...mockRootState.game, ...{xIsNext}};
    return {...mockRootState, ...{game: gameState}};
};