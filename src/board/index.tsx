import React from 'react';
import './index.css';
import Square from '../square';
import {connect} from "react-redux";
import * as actions from './actions';
import {BoardActions} from './actions';
import {Dispatch} from "redux";
import {BoardState} from "./reducers";
import {RootState} from "../reducers";

type Props = ReturnType<typeof mapDispatchToProps> & BoardState;

class Board extends React.Component<Props, BoardState> {
  renderSquare(i: number) {
      const {squares, clickSquare} = this.props;
      return <Square  onClick={() => clickSquare(i)}>
          {squares[i]}
      </Square>
  }
  render() {
    const status = 'Next player: X';

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
    squares: state.board.squares
});

const mapDispatchToProps = (dispatch: Dispatch<BoardActions>) => ({
    clickSquare: (i: number) => dispatch(actions.clickSquare(i))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);
