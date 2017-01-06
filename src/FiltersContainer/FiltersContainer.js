import React from 'react';
import Filters from '../Filters/Filters';
import PoiListContainer from '../PoiListContainer/PoiListContainer';

class FiltersContainer extends React.Component {

    render() {
        return (
            <div>
                <Filters />
                <PoiListContainer/>
            </div>
        )
    }
}

export default FiltersContainer;
