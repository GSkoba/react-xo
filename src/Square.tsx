import * as React from 'react';

interface IState {
    value: string;
}

interface Props {
    value : string;
    setXO : () => void;
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
                    onClick={() => this.props.setXO()}>
                {this.props.value}
            </button>
        );
    }
}