import * as React from 'react'
import Board from './Board';

export default class Game extends React.Component{
    render() {
        return (
            <div>
                XO
                <div className="game">
                    <div className="game-board">    
                        <Board/>
                    </div>
                </div>
            </div>
        );
    }
}