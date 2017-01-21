import React from 'react';
import Activity from '../Activity/Activity';
import {getActivityById} from '../Storage/Storage';

class PoiContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            context: 'top10',
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
        const context = this.props.pathname.includes('top10') ? 'top10' : 'search';

        this.setState({context});

        getActivityById(id).then(item => {
            this.setState({details: item});
        })
    }

    render = () =>
        <Activity details={this.state.details} context={this.state.context}/>
}

export default PoiContainer;