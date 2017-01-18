import React from 'react';
import Navigation from '../Navigation/Navigation';
import FiltersContainer from '../FiltersContainer/FiltersContainer';
import PoiListContainer from '../PoiListContainer/PoiListContainer';
import { getPois } from '../Storage/Storage';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            navigationItems: [
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
            ],
            pois: [],
            filteredPois: [],
            types: [
                {
                    id: 'museum',
                    name: 'Museum',
                    icon: 'museum',
                    isFiltered: false
                },
                {
                    id: 'attraction',
                    name: 'Attraction',
                    icon: 'attraction',
                    isFiltered: false
                },
                {
                    id: 'collection',
                    name: 'Collection',
                    icon: 'exhibitions',
                    isFiltered: false
                },
                {
                    id: 'insider',
                    name: 'Insider',
                    icon: 'themes',
                    isFiltered: false
                },
                {
                    id: 'explore',
                    name: 'Explore',
                    icon: 'rainbow-flag',
                    isFiltered: false
                },
                {
                    id: 'shopping',
                    name: 'Shopping',
                    icon: 'shopping',
                    isFiltered: false
                },
                {
                    id: 'restaurant',
                    name: 'Restaurant',
                    icon: 'restaurant',
                    isFiltered: false
                },
                {
                    id: 'nightlife',
                    name: 'Nightlife',
                    icon: 'nightlife',
                    isFiltered: false
                }
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        let types = this.state.types.slice(0); // clone array
        const target = event.target;

        types
            .filter(item => item.id === target.value)
            .forEach(item => item.isFiltered = target.checked);

        const appliedFilters = types.filter(item => item.isFiltered).map(item => item.id);

        const filteredPois = this.state.pois.slice(0) // clone all pois
            .filter(item => appliedFilters.indexOf(item.type) >= 0); // and filter them

        this.setState({
            filteredPois: filteredPois.length > 0 ? filteredPois : this.state.pois.slice(0),
            types: types
        });
    };

    componentDidMount() {
        let navigationItems = this.state.navigationItems.slice(0); // clone it

        navigationItems.forEach(item => item.isActive = item.path === this.props.pathname);
        
        this.setState({navigationItems});

        const isTopTenActive = this.state.navigationItems.filter(item => item.id === 'home')[0].isActive;

        getPois()
            .then(items => {
                // on home, only show pois that are bookable (price > 0)
                if (isTopTenActive) {
                    return items.filter(item => item.price > 0);
                } else return items;
            })
            .then(items => this.setState({pois: items, filteredPois: items}))
    }

    render() {
        const isSearchActive = this.state.navigationItems.filter(item => item.id === 'search')[0].isActive;

        return (
            <div>
                <Navigation items={this.state.navigationItems}/>
                <main>
                    { isSearchActive &&
                        <FiltersContainer
                            handleChange={this.handleChange}
                            items={this.state.types}
                            resultCount={this.state.filteredPois.length}/>}
                    <PoiListContainer items={this.state.filteredPois} isSearchActive={isSearchActive}/>
                </main>
            </div>
        )
    }
}

export default App;
