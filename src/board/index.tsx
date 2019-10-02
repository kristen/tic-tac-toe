import React from 'react';
import './index.css';
import Square from '../square';
import {connect} from "react-redux";
import * as actions from './actions';
import {BoardActions} from './actions';
import {Dispatch} from "redux";
import {RootState} from "../reducers";
import {getNextMove, getWinner, getXIsNext} from "../game/selectors";

interface OwnProps {
    squares: string[];
    nextMove: string;
    winner: string|null;
    xIsNext: boolean;
}

type Props = OwnProps & ReturnType<typeof mapDispatchToProps>;

class Board extends React.Component<Props> {
    renderSquare(i: number) {
        const {squares, xIsNext, winner, clickSquare} = this.props;
        return <Square onClick={() => {
            if (winner) return;
            clickSquare(i, xIsNext)
        }}>
            {squares[i]}
        </Square>
    }

    render() {
        return (
            <div>
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
    xIsNext: getXIsNext(state),
    nextMove: getNextMove(state),
    winner: getWinner(state),
});

const mapDispatchToProps = (dispatch: Dispatch<BoardActions>) => ({
    clickSquare: (i: number, xIsNext: boolean) => dispatch(actions.clickSquare(i, xIsNext))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);
