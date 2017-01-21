import React from 'react';
import Filters from '../Filters/Filters';

class FiltersContainer extends React.Component {

    state = {
        typeFilterOptions: [
            {
                id: 'museum',
                name: 'Museum',
                icon: 'museum',
                isActive: false
            },
            {
                id: 'attraction',
                name: 'Attraction',
                icon: 'attraction',
                isActive: false
            },
            {
                id: 'collection',
                name: 'Collection',
                icon: 'exhibitions',
                isActive: false
            },
            {
                id: 'insider',
                name: 'Insider',
                icon: 'themes',
                isActive: false
            },
            {
                id: 'explore',
                name: 'Explore',
                icon: 'rainbow-flag',
                isActive: false
            },
            {
                id: 'shopping',
                name: 'Shopping',
                icon: 'shopping',
                isActive: false
            },
            {
                id: 'restaurant',
                name: 'Restaurant',
                icon: 'restaurant',
                isActive: false
            },
            {
                id: 'nightlife',
                name: 'Nightlife',
                icon: 'nightlife',
                isActive: false
            }
        ],
        isBookableFilter: true,
        filterCount: 0,
        isExpanded: false
    }

    componentDidMount = () => {
        // todo
        // persist filter state to local storage, so that we can restore it
        // when coming back from detail page
    }

    toggleTypeFilterOption = (event) => {
        const key = event.target.value;
        const isChecked = event.target.checked;
        const typeFilterOptions = this.state.typeFilterOptions.slice(0); // clone it

        typeFilterOptions
            .filter(item => item.id === key)
            .forEach(item => item.isActive = isChecked);

        this.setState({typeFilterOptions});

        if (isChecked) {
            this.incrementFilterCount();
            this.props.addActiveFilterKey(key);
        } else {
            this.decrementFilterCount();
            this.props.removeActiveFilterKey(key);
        }
    }

    incrementFilterCount = () => {
       this.setState({filterCount: this.state.filterCount + 1});
    }

    decrementFilterCount = () => {
        this.setState({filterCount: this.state.filterCount - 1});
    }

    toggleExpand = () => {
        this.setState({isExpanded: !this.state.isExpanded});
    }

    render() {
        return (
            <div>
                <Filters
                    typeFilterOptions={this.state.typeFilterOptions}
                    toggleTypeFilterOption={this.toggleTypeFilterOption}
                    isExpanded={this.state.isExpanded}
                    toggleExpand={this.toggleExpand}
                    filterCount={this.state.filterCount}
                    resultCount={this.props.resultCount}/>
            </div>
        )
    }
}

export default FiltersContainer;
