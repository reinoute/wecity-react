import React from 'react';

const Carousel = (props) => (
    <div className="poi-carousel">
        <button className="poi-carousel-button-previous" type="button" onClick={props.previousImage}>
            <span className="icon-chevron-left"></span>
            <span className="poi-carousel-button-text">Previous</span>
        </button>
        <ul className="poi-carousel-list">
            { props.items.map((item, index) => {
                return (
                    <li className="poi-carousel-item" key={ index }
                        style={ {transform: "translateX(-" + props.index * 100 + "%)"} }>
                        <img className="poi-carousel-img" src={item} alt={""}/>
                    </li>
                )
            })}
        </ul>
        <button className="poi-carousel-button-next" type="button" onClick={props.nextImage}>
            <span className="icon-chevron-right"></span>
            <span className="poi-carousel-button-text">Next</span>
        </button>
    </div>
);

export default Carousel;
