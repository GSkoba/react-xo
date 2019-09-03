import * as React from 'react';

interface IState {
    value: string;
}

interface Props {
    value : number;
}

export default class Square extends React.Component<Props, IState> {
    constructor(props : Props ) {
        super(props);
        this.state = {
            value : ""
        }
    }

    render() {
        return (
            <button className="square"
                    onClick={() => this.setState({value: "X"})}>
                {this.state.value}
            </button>
        );
    }
}