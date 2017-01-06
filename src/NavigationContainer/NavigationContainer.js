import React from 'react';
import Navigation from '../Navigation/Navigation';

class NavigationContainer extends React.Component {

    constructor() {
        super();
        this.state = { path: ''}
    }

    componentDidMount() {
        console.log('-RE- hoi', this.state.path);
        
        // this.setState({path: this.context.location.pathname });
    }

    render() {
        return (
            <Navigation path={this.props.path}/>
        )
    }
}

export default NavigationContainer;