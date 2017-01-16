import React from 'react';

const Filters = (props) => (
    <div className="filters">
        <form className="filters-form">
            <fieldset className="filters-fieldset">
                <legend className="filters-legend">Type</legend>
                <span className="filters-checkbox-group">
                <input id="type-museum" type="checkbox" value="museum" onChange={props.handleChange}/>
                <label htmlFor="type-museum"><span className="icon-museum">Museum</span></label>
            </span>
                <span className="filters-checkbox-group">
                <input id="type-attraction" type="checkbox" value="attraction" onChange={props.handleChange}/>
                <label htmlFor="type-attraction"><span className="icon-attractions">Attraction</span></label>
            </span>
                <span className="filters-checkbox-group">
                <input id="type-collection" type="checkbox" value="collection" onChange={props.handleChange}/>
                <label htmlFor="type-collection"><span className="icon-exhibitions">Collection</span></label>
            </span>
                <span className="filters-checkbox-group">
                <input id="type-insider" type="checkbox" value="insider" onChange={props.handleChange}/>
                <label htmlFor="type-insider"><span className="icon-themes">Insider</span></label>
            </span>
                <span className="filters-checkbox-group">
                <input id="type-explore" type="checkbox" value="explore" onChange={props.handleChange}/>
                <label htmlFor="type-explore"><span className="icon-rainbow-flag">Explore</span></label>
            </span>
                <span className="filters-checkbox-group">
                <input id="type-shopping" type="checkbox" value="shopping" onChange={props.handleChange}/>
                <label htmlFor="type-shopping"><span className="icon-shopping">Shopping</span></label>
            </span>
                <span className="filters-checkbox-group">
                <input id="type-restaurant" type="checkbox" value="restaurant" onChange={props.handleChange}/>
                <label htmlFor="type-restaurant"><span className="icon-restaurant">Restaurant</span></label>
            </span>
                <span className="filters-checkbox-group">
                <input id="type-nightlife" type="checkbox" value="nightlife" onChange={props.handleChange}/>
                <label htmlFor="type-nightlife"><span className="icon-nightlife">Nightlife</span></label>
            </span>
            </fieldset>
        </form>
    </div>
);

export default Filters;
