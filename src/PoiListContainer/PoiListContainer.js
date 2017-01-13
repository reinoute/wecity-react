import React from 'react';
import PoiList from '../PoiList/PoiList';

class PoiListContainer extends React.Component {

    render() {
        return ( <PoiList items={this.props.items} /> )
    }
}

export default PoiListContainer;
