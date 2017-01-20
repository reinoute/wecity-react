import React from 'react';
import {getActivities} from '../Storage/Storage';
import ActivityList from '../ActivityList/ActivityList';
import FiltersContainer from '../FiltersContainer/FiltersContainer';

class App extends React.Component {

    state = {
        context: 'home',
        items: [],
        filteredItems: [],
        activeFilterKeys: []
    }

    componentDidMount = () => {
        this.setContext();

        getActivities().then(items => this.setState({items}))
    }

    setContext = () => {
        const context = this.props.pathname.includes('search') ? 'search' : 'home';

        this.setState({context});
    }

    addActiveFilterKey = (key) => {
        const keys = this.state.activeFilterKeys.slice(0); // clone keys

        keys.push(key);
        this.setState({activeFilterKeys: keys});
    }

    removeActiveFilterKey = (key) => {
        let keys = this.state.activeFilterKeys.slice(0); // clone keys

        keys.splice(keys.indexOf(key), 1);
        this.setState({activeFilterKeys: keys});
    }

    render() {
        return (
            <div>
                { this.state.context === 'search' &&
                    <FiltersContainer
                        addActiveFilterKey={this.addActiveFilterKey}
                        removeActiveFilterKey={this.removeActiveFilterKey}/>
                }
                <ActivityList items={this.state.items}/>
            </div>
        )
    }
}

export default App;
