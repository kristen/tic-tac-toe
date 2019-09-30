import React, {MouseEventHandler} from 'react';
import './index.css';

interface OwnProps {
    children: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

type Props = OwnProps;
const Square: React.FC<Props> = ({children, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
        {children}
      </button>
  )
};

export default Square;
