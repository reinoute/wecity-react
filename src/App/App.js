import React from 'react';
import {getActivities} from '../Storage/Storage';
import ActivityList from '../ActivityList/ActivityList';
import FiltersContainer from '../FiltersContainer/FiltersContainer';

class App extends React.Component {

    state = {
        items: [],
        filteredItems: [],
        activeFilterKeys: []
    }

    componentDidMount = () =>
        getActivities()
            .then(items =>
                this.setState({items, filteredItems: this.filterItems(items, this.state.activeFilterKeys)}));

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

    filterItems = (items, keys) => {
        const onlyBookableActivities = this.props.pathname.includes('top10')
        const filteredItems = items
            // in top10 context, filter on items that are bookable
            .filter(item => onlyBookableActivities ? item.isBookable : true)
            // filter on item type
            .filter(item => keys.length > 0 ? keys.indexOf(item.type) >= 0 : true)

        // when no items match the filter criteria, return all items
        return filteredItems.length > 0 ? filteredItems : items;
    }

    render() {
        return (
            <div>
                { this.state.context === 'search' &&
                    <FiltersContainer
                        addActiveFilterKey={this.addActiveFilterKey}
                        removeActiveFilterKey={this.removeActiveFilterKey}/>
                }
                <ActivityList items={this.state.filteredItems}/>
            </div>
        )
    }
}

export default App;
