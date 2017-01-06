import React from 'react';
import NavigationContainer from '../NavigationContainer/NavigationContainer';
import PoiListContainer from '../PoiListContainer/PoiListContainer';

class TopTenLayout extends React.Component {

    render() {
        return (
            <div>
                <NavigationContainer path={this.props.pathname}/>
                <PoiListContainer onlyBookable={true}/>
            </div>
        )
    }
}

export default TopTenLayout;
