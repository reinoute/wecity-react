import React from 'react';
import PoiList from '../PoiList/PoiList';
import {getPois} from '../storage';

class PoiListContainer extends React.Component {

    constructor() {
        super();

        // set initial state
        this.state = {
            pois: []
        };
    }

    componentDidMount() {
        const bookableOnly = true;

        getPois(bookableOnly).then(items => this.setState({pois: items}));
    }

    render() {
        return ( <PoiList items={this.state.pois} /> )
    }
}

export default PoiListContainer;
