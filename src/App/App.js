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

        const pois = this.state.pois.slice(0) // clone all pois
            .forEach(item => {
                // and filter them
                const isTopTenActive = this.state.navigationItems.filter(item => item.id === 'home')[0].isActive;
                const matchesType = appliedFilters.indexOf(item.type) >= 0;
                const isBookable = isTopTenActive && item.price > 0;
                item.isFiltered = matchesType && isBookable;
            });

        this.setState({pois, types});
    };

    componentDidMount() {
        let navigationItems = this.state.navigationItems.slice(0); // clone it

        navigationItems.forEach(item => item.isActive = item.path === this.props.pathname);
        
        this.setState({navigationItems});

        const isTopTenActive = this.state.navigationItems.filter(item => item.id === 'home')[0].isActive;

        getPois()
            .then(items => {
                // in top10 context, only show pois that are bookable (price > 0)
                items.forEach(item => item.isFiltered = isTopTenActive && item.price > 0);
                return items;
            })
            .then(items => this.setState({pois: items}))
    }

    render() {
        const isSearchActive = this.state.navigationItems.filter(item => item.id === 'search')[0].isActive;
        const filteredPois = this.state.pois.filter(item => item.isFiltered);
        const pois = filteredPois.length > 0 ? filteredPois : this.state.pois;

        return (
            <div>
                <Navigation items={this.state.navigationItems}/>
                <main>
                    { isSearchActive &&
                        <FiltersContainer
                            handleChange={this.handleChange}
                            items={this.state.types}
                            resultCount={pois.length}/>}
                    <PoiListContainer items={pois} isSearchActive={isSearchActive}/>
                </main>
            </div>
        )
    }
}

export default App;
