import React from 'react';
import Navigation from '../Navigation/Navigation';

class NavigationContainer extends React.Component {

    constructor() {
        super();
        this.state = { path: ''}
    }

    render() {
        return (
            <Navigation path={this.props.path}/>
        )
    }
}

export default NavigationContainer;