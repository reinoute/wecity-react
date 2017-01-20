import React from 'react';

const Filters = (props) => (
    <div className={"filters " + (props.isExpanded ? "is-expanded" : "")}>
        <form className="filters-form">
            <div className="filters-header">
                <div className="filters-header-container">
                    <div className="filters-result-count">
                        x results
                    </div>
                    <div className="filters-toggle">
                        <button className="filters-button-toggle button-link" type="button"
                                onClick={props.toggleExpand}>
                            <span className="icon-filter">Filters <span
                                className={"filters-count " + (props.filterCount > 0 ? "is-active" : "")}>{props.filterCount}</span>
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
                            { props.typeFilterOptions.map(item =>
                                <TypeFilterOption
                                    key={item.id}
                                    details={item}
                                    handleChange={props.toggleTypeFilterOption}/>)
                            }
                        </fieldset>
                    </div>
                </div>
            }
        </form>
    </div>
);

const TypeFilterOption = (props) => (
    <span className="filters-checkbox-group">
        <input id={props.details.id}
               type="checkbox"
               value={props.details.id}
               onChange={props.handleChange}/>
        <label htmlFor={props.details.id}>
            <span className={"icon-" + props.details.icon}>{props.details.name}</span>
        </label>
    </span>
);

export default Filters;