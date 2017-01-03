import React from 'react';
import Poi from '../Poi/Poi';
import {getPoi} from '../api';

class PoiContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            details: {
                facilities: [],
                labels: [],
                location: {coordinates: []},
                images: [],
                tags: [],
                ticketInformation: []
            }
        };
    }

    componentDidMount() {
        const id = this.props.params.id;

        getPoi(id).then(item => {
            this.setState({details: item});
        })
    }

    render() {
        return (
           <Poi details={this.state.details} />
        )
    }
}

export default PoiContainer;