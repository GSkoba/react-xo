import * as React from 'react';
import Square from './Square';

interface IState {
    arr : Array<string>;
}

interface Props {

}

export default class Board extends React.Component<Props, IState> {
    constructor(props : Props) {
        super(props);
        this.state = {
            arr : Array(9).fill('')
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
        arr[i] = 'X';
        this.setState({arr:arr});
    }

    render() {
        return (
            <>
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