import React from 'react';

const Filters = (props) => (
    <form className="filters">
        <fieldset className="filters-fieldset">
            <legend className="filters-legend">Type</legend>
            <span className="filters-checkbox-group">
                <input id="type-museum" type="checkbox" value="museum" onChange={props.handleChange}/>
                <label htmlFor="type-museum">Museum</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-attraction" type="checkbox" value="attraction" onChange={props.handleChange}/>
                <label htmlFor="type-attraction">Attraction</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-collection" type="checkbox" value="collection" onChange={props.handleChange}/>
                <label htmlFor="type-collection">Collection</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-insider" type="checkbox" value="insider" onChange={props.handleChange}/>
                <label htmlFor="type-insider">Inside</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-explore" type="checkbox" value="explore" onChange={props.handleChange}/>
                <label htmlFor="type-explore">Explore</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-shopping" type="checkbox" value="shopping" onChange={props.handleChange}/>
                <label htmlFor="type-shopping">Shopping</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-restaurant" type="checkbox" value="restaurant" onChange={props.handleChange}/>
                <label htmlFor="type-restaurant">Restaurant</label>
            </span>
            <span className="filters-checkbox-group">
                <input id="type-nightlife" type="checkbox" value="nightlife" onChange={props.handleChange}/>
                <label htmlFor="type-nightlife">Nightlife</label>
            </span>
        </fieldset>
    </form>
);

export default Filters;
