import * as React from 'react';
import Square from './Square';

interface IState {
    arr : Array<string>;
    xIsNext : boolean;
    error : boolean;
}

interface Props {

}

export default class Board extends React.Component<Props, IState> {
    constructor(props : Props) {
        super(props);
        this.state = {
            arr : Array(9).fill(''),
            xIsNext : true,
            error : false
        }
    }

    rendeItem(i : number) {
        return <Square 
                value={this.state.arr[i]}
                setXO={() => this.setXO(i)}
                />
    }

    setXO(i : number) {
        const arr = this.state.arr.slice();
        let xIsNext = this.state.xIsNext;
        let error = this.state.error;
    
        if (arr[i] === 'X' || arr[i] === 'O'){
            error = true;
        } else {
            arr[i] = xIsNext ? 'X' : 'O';
            xIsNext = !xIsNext;
        }
        this.setState({
            arr:arr,
            xIsNext:xIsNext,
            error: error
        });
    }

    render() {
        const status = 'Next move ' + (this.state.xIsNext ? 'X' : 'O'); 
        const error = (this.state.error ? 'Error' : '');
        return (
            <>
                <div className="status">{status}</div>
                <div className="error">{error}</div>
                <div className="board-row">
                    {this.rendeItem(1)}
                    {this.rendeItem(2)}
                    {this.rendeItem(3)}
                </div> 
                <div className="board-row">
                    {this.rendeItem(4)}
                    {this.rendeItem(5)}
                    {this.rendeItem(6)}
                </div> 
                <div className="board-row">
                    {this.rendeItem(7)}
                    {this.rendeItem(8)}
                    {this.rendeItem(9)}
                </div> 
            </>
        );
    }
}