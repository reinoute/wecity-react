import React from 'react';
import NavigationContainer from '../NavigationContainer/NavigationContainer';
import FiltersContainer from '../FiltersContainer/FiltersContainer';

class AllPoisLayout extends React.Component {

    render() {
        return (
            <div>
                <NavigationContainer path={this.props.pathname}/>
                <FiltersContainer />
            </div>
        )
    }
}

export default AllPoisLayout;
