import React from 'react';
import Poi from '../Poi/Poi';
import {getPoiById} from '../Storage/Storage';

class PoiContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            details: {
                facilities: [],
                labels: [],
                coordinates: [],
                images: [],
                tags: [],
                ticketInformation: []
            }
        };
    }

    componentDidMount() {
        const id = this.props.params.id;

        getPoiById(id).then(item => {
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