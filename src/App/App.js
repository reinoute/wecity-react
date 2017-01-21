import React from 'react';
import {getActivities} from '../Storage/Storage';
import ActivityList from '../ActivityList/ActivityList';
import FiltersContainer from '../FiltersContainer/FiltersContainer';
import NavigationContainer from '../NavigationContainer/NavigationContainer';

class App extends React.Component {

    state = {
        items: [],
        filteredItems: [],
        activeFilterKeys: []
    }

    componentDidMount = () => {

        getActivities()
            .then(items =>
                this.setState({
                    items,
                    filteredItems: this.filterItems(items, [])
                }));
    }

    addActiveFilterKey = (key) => {
        const keys = this.state.activeFilterKeys.slice(0); // clone keys

        keys.push(key);
        this.setState({
            filteredItems: this.filterItems(this.state.items, keys),
            activeFilterKeys: keys
        })
    }

    removeActiveFilterKey = (key) => {
        let keys = this.state.activeFilterKeys.slice(0); // clone keys

        keys.splice(keys.indexOf(key), 1);
        this.setState({
            filteredItems: this.filterItems(this.state.items, keys),
            activeFilterKeys: keys
        })
    }

    filterItems = (items, filterKeys) => {
        const onlyBookableActivities = this.props.pathname.includes('top10');
        const filteredItems = items
            // in top10 context, filter on items that are bookable
            .filter(item => onlyBookableActivities ? item.isBookable : true)
            // filter on item type
            .filter(item => filterKeys.length > 0 ? filterKeys.indexOf(item.type) >= 0 : true)

        // when no items match the filter criteria, return all items
        return filteredItems.length > 0 ? filteredItems : items;
    }

    render() {
        return (
            <div>
                <NavigationContainer path={this.props.pathname}/>
                { this.props.pathname === '/search' &&
                    <FiltersContainer
                        addActiveFilterKey={this.addActiveFilterKey}
                        removeActiveFilterKey={this.removeActiveFilterKey}
                        resultCount={this.state.filteredItems.length}/>
                }
                <ActivityList items={this.state.filteredItems} path={this.props.pathname}/>
            </div>
        )
    }
}

export default App;
