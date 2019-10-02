import {squares, xIsNext} from "./reducers";
import {clickSquare} from "../board/actions";

describe('board reducers', () => {
    describe('#squares', () => {
        it('returns the current state for all other actions', () => {
            const currentState = ["X", "0", "X", "X", "0", "X", "X", "0", "X"];
            // @ts-ignore - we are using an action that doesn't match the type
            const result = squares(currentState, {type: "@@test/unknown_action"});
            expect(result).toEqual(currentState);
        });
        it('returns the updated state for the clickSquare action - update square at index i', () => {
            const i = 3;
            const xIsNext = false;
            const currentState = ["X", "0", "X", "X", "0", "X", "X", "0", "X"];
            const action = clickSquare(i, xIsNext);
            const result = squares(currentState, action);
            const expectedResult = ["X", "0", "X", "O", "0", "X", "X", "0", "X"];
            expect(result).toEqual(expectedResult);
        })
    });
    describe('#xIsNext', () => {
        it('returns the current state for all other actions', () => {
            const currentState = false;
            // @ts-ignore - we are using an action that doesn't match the type
            const result = xIsNext(currentState, {type: "@@test/unknown_action"});
            expect(result).toEqual(currentState);
        });
        it('returns the updated state for the clickSquare action - update square at index i', () => {
            const i = 3;
            const currentState = false;
            const action = clickSquare(i, currentState);
            const result = xIsNext(currentState, action);
            expect(result).toEqual(true);
        })
    })
});
