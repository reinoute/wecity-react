import React from 'react';

const Filters = (props) => (
    <div className={"filters " + (props.isExpanded ? "is-expanded" : "")}>
        <form className="filters-form">
            <div className="filters-header">
                <div className="filters-header-container">
                    <div className="filters-result-count">
                        200 results
                    </div>
                    <div className="filters-toggle">
                        <button className="filters-button-toggle button-link" type="button"
                                onClick={props.toggleExpand}>
                            <span className="icon-filter">Filters <span
                                className={"filters-count " + (props.count > 0 ? "is-active" : "")}>{props.count}</span>
                            </span>
                        </button>
                    </div>
                    <div className="filters-sorting">
                        <label htmlFor="sorting">
                            <span className="filters-sorting-icon"></span>
                            <span className="filters-sorting-label">Sort by:</span>
                        </label>
                        <div className="custom-select">
                            <select id="sorting">
                                <option>popularity</option>
                                <option>distance</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            { props.isExpanded &&
            <div className="filters-body">
                <div className="filters-body-container">
                    <fieldset className="filters-fieldset-types">
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
                </div>
            </div>}
        </form>
    </div>
);

export default Filters;
