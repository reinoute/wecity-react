import React from 'react';
import FilteredActivityList from '../FilteredActivityList/FilteredActivityList';

class PoiListContainer extends React.Component {

    state = {
        items: [],
        activeFilters: []
    }

    componentDidMount = () => {
        this.filterItems();
    }

    filterItems = () => {
        // todo: get applied filters from local storage and filter items
        // for now, return all items
        const items = this.props.items.filter(item => true);
        this.setState({items});
    }

    render() {
        return ( <FilteredActivityList items={this.state.items}/> )
    }
}

export default PoiListContainer;
