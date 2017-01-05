import React from 'react';

const Carousel = (props) => (
    <div className="carousel">
        <button className="carousel-button-previous" type="button" onClick={props.previousImage}>
            <span className="icon-chevron-left"></span>
            <span className="carousel-button-text">Previous</span>
        </button>
        <ul className="carousel-list">
            { props.items.map((item, index) => {
                return (
                    <li className="carousel-item" key={ index }
                        style={ {transform: "translateX(-" + props.index * 100 + "%)"} }>
                        <img className="carousel-img" src={item} alt={""}/>
                    </li>
                )
            })}
        </ul>
        <button className="carousel-button-next" type="button" onClick={props.nextImage}>
            <span className="icon-chevron-right"></span>
            <span className="carousel-button-text">Next</span>
        </button>
    </div>
);

export default Carousel;
