import React from 'react';
import PoiList from '../PoiList/PoiList';
import {getAllPois, getTopPois, updateData} from '../storage';
import {fetchAllPois} from '../api';

class PoiListContainer extends React.Component {

    constructor() {
        super();
        // getAllPois().then(items => {
        //     console.log('-RE- items', items);
        // })

        updateData().then(result => console.log('-RE- updated!', result))

        // set initial state
        this.state = {
            pois: []
        };
    }

    componentDidMount() {
        getTopPois().then(items => this.setState({pois: items}));
    }

    render() {
        return ( <PoiList items={this.state.pois} /> )
    }
}

export default PoiListContainer;
