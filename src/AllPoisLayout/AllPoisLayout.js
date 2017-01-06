import React from 'react';
import NavigationContainer from '../NavigationContainer/NavigationContainer';
import PoiListContainer from '../PoiListContainer/PoiListContainer';

class AllPoisLayout extends React.Component {

    render() {
        return (
            <div>
                <NavigationContainer path={this.props.pathname}/>
                <PoiListContainer/>
            </div>
        )
    }
}

export default AllPoisLayout;
