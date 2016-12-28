import React from 'react';
import PoiList from './PoiList';
import {getPois} from '../api';

class PoiListContainer extends React.Component {

    constructor() {
        super();

        // set initial state
        this.state = {
            pois: []
        };
    }

    componentDidMount() {
        getPois().then(items => this.setState({pois: items}));
    }

    render() {
        return ( <PoiList items={this.state.pois} /> )
    }
}

export default PoiListContainer;
