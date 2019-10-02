import {getNextMove, getWinner} from "./selectors";
import {RootState} from "../reducers";
import {mockBoardSquares, mockBoardXIsNext} from "./mocks";

describe('Board selectors', () => {
    describe('#getNextMove', () => {
        it('returns X when xIsNext is true', () => {
            const state = mockBoardXIsNext(true);
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
    describe("#getWinner", () => {
        it('returns the winner', () => {
            const squares: string[] = [];
            const state = mockBoardSquares(squares);
            const result = getWinner(state);
            expect(result).toEqual(null);
        });
        it('returns the winner when the top row are all the same', () => {
            const squares = [
                "X", "X", "X",
                "O", "X", "O",
                "X", "0", "X"];
            const state = mockBoardSquares(squares);
            console.log(state);
            const result = getWinner(state);
            expect(result).toEqual("X");
        });
        it('returns the winner when the second row are all the same', () => {
            const squares = [
                "O", "X", "O",
                "X", "X", "X",
                "X", "0", "X"];
            const state = mockBoardSquares(squares);
            const result = getWinner(state);
            expect(result).toEqual("X");
        });
        // todo finish tests
    })
});
