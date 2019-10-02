import React from 'react';
import './index.css';
import Board from '../board';
import {RootState} from "../reducers";
import {connect} from "react-redux";
import {getCurrentSquares, getNextMove, getWinner} from "./selectors";

interface OwnProps {
    currentSquares: string[];
    winner: string|null;
    nextMove: string;
}

type Props = OwnProps;

const Game: React.FC<Props> = ({currentSquares, winner, nextMove}) => {
    const status = winner ? `Winner: ${winner}` : `Next player: ${nextMove}`;
    return (
        <div className="game">
            <div className="game-board">
                <Board squares={currentSquares}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    currentSquares: getCurrentSquares(state),
    winner: getWinner(state),
    nextMove: getNextMove(state),
});

export default connect(
    mapStateToProps,
)(Game);
