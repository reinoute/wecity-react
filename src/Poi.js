import React from 'react';
import {getPoi} from './Api';

class Poi extends React.Component {

    constructor() {
        super();

        this.state = {poi: {}};
    }

    componentWillMount() {
        const id = this.props.params.id;

        getPoi(id).then(item => {
            this.setState({poi: item});
        })
    }

    render() {
        return (
            <div className="poi">
                <h1>{ this.state.poi.title }</h1>
                <img src={this.state.poi.imgUrl} alt={this.state.poi.title}/>
                <p>{ this.state.poi.summary }</p>
            </div>
        )
    }
}

export default Poi;
