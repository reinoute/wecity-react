import React from 'react';
import { getActivities } from '../Storage/Storage';
import ActivityList from '../ActivityList/ActivityList';

class PoiListContainer extends React.Component {
    
    state = { items: [] }
    
    componentDidMount = () => {
        getActivities().then(items => this.setState({items}))
    }

    render() {
        return ( <ActivityList items={this.state.items}/> )
    }
}

export default PoiListContainer;
