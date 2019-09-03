import * as React from 'react';

interface IState {

}

interface Props {
    value : number;
}

export default class Square extends React.Component<Props, IState> {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}