import {getNextMove, getWinner} from "./selectors";
import {mockSquares, mockXIsNext} from "./mocks";

describe('Board selectors', () => {
    describe('#getNextMove', () => {
        it('returns X when xIsNext is true', () => {
            const state = mockXIsNext(true);
            const result = getNextMove(state);
            expect(result).toEqual("X");
        });
        it('returns O when xIsNext is false', () => {
            const state = mockXIsNext(false);
            const result = getNextMove(state);
            expect(result).toEqual("O");
        })
    });
    describe("#getWinner", () => {
        it('returns the winner', () => {
            const squares: string[] = [];
            const state = mockSquares(squares);
            const result = getWinner(state);
            expect(result).toEqual(null);
        });
        it('returns the winner when the top row are all the same', () => {
            const squares = [
                "X", "X", "X",
                "O", "X", "O",
                "X", "0", "X"];
            const state = mockSquares(squares);
            const result = getWinner(state);
            expect(result).toEqual("X");
        });
        it('returns the winner when the second row are all the same', () => {
            const squares = [
                "O", "X", "O",
                "X", "X", "X",
                "X", "0", "X"];
            const state = mockSquares(squares);
            const result = getWinner(state);
            expect(result).toEqual("X");
        });
        // todo finish tests
    })
});
