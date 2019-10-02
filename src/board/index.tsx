import React from 'react';
import './index.css';
import Square from '../square';
import {connect} from "react-redux";
import * as actions from './actions';
import {BoardActions} from './actions';
import {Dispatch} from "redux";
import {BoardState} from "./reducers";
import {RootState} from "../reducers";
import {getNextMove, getSquares, getXIsNext} from "./selectors";

interface OwnProps {
    nextMove: string;
}

type Props = OwnProps & ReturnType<typeof mapDispatchToProps> & BoardState;

class Board extends React.Component<Props, BoardState> {
    renderSquare(i: number) {
        const {squares, xIsNext, clickSquare} = this.props;
        return <Square onClick={() => clickSquare(i, xIsNext)}>
            {squares[i]}
        </Square>
    }

    render() {
        const {nextMove} = this.props;
        const status = `Next player: ${nextMove}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    squares: getSquares(state),
    xIsNext: getXIsNext(state),
    nextMove: getNextMove(state),
});

const mapDispatchToProps = (dispatch: Dispatch<BoardActions>) => ({
    clickSquare: (i: number, xIsNext: boolean) => dispatch(actions.clickSquare(i, xIsNext))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);
