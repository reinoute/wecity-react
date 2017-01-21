import React from 'react';
import Navigation from '../Navigation/Navigation';

class NavigationContainer extends React.Component {

    state = {
        items: [
            {
                id: 'home',
                name: 'Top 10',
                path: '/top10',
                isActive: true
            },
            {
                id: 'search',
                name: 'All activities',
                path: '/search',
                isActive: false
            }
        ]
    };

    componentDidMount = () => {
        let items = this.state.items.map(item => {
            item.isActive = this.props.path === item.path;
            return item;
        })

        this.setState({items});
    }

    render() {
        return (
            <Navigation items={this.state.items}/>
        )
    }
}

export default NavigationContainer;
