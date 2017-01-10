import React from 'react';

const Filters = (props) => (
    <form className="filters">
        <fieldset className="filters-fieldset">
            <legend className="filters-legend">Type</legend>
            <span className="filters-checkbox-group">
                <input id="type-museum" type="checkbox" value="museum"/>
                <label htmlFor="type-museum">Museum</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-attraction" type="checkbox" value="attraction"/>
                <label htmlFor="type-attraction">Attraction</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-collection" type="checkbox" value="collection"/>
                <label htmlFor="type-collection">Collection</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-insider" type="checkbox" value="insider"/>
                <label htmlFor="type-insider">Inside</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-explore" type="checkbox" value="explore"/>
                <label htmlFor="type-explore">Explore</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-shopping" type="checkbox" value="shopping"/>
                <label htmlFor="type-shopping">Shopping</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-restaurant" type="checkbox" value="restaurant"/>
                <label htmlFor="type-restaurant">Restaurant</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-nightlife" type="checkbox" value="nightlife"/>
                <label htmlFor="type-nightlife">Nightlife</label>
            </span>
        </fieldset>
    </form>
);

export default Filters;
