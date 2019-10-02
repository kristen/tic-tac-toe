import {getNextMove} from "./selectors";
import {RootState} from "../reducers";

describe('Board selectors', () => {
    describe('#getNextMove', () => {
        it('returns X when xIsNext is true', () => {
            const state: RootState = {
                board: {
                    squares: [],
                    xIsNext: true,
                }
            };
            const result = getNextMove(state);
            expect(result).toEqual("X");
        });
        it('returns O when xIsNext is false', () => {
            const state: RootState = {
                board: {
                    squares: [],
                    xIsNext: false,
                }
            };
            const result = getNextMove(state);
            expect(result).toEqual("O");
        })
    });
});
