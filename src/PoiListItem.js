import React from 'react';

class PoiListItem extends React.Component {

    render() {
        return (
            <li className="poi-list-item">
                <button className="poi-list-item-button" type="button"
                        onClick={() => this.props.navigateToPoi(this.props.index)}>
                    <h1 className="poi-list-item-title">{this.props.title}</h1>
                    <div className="poi-list-item-details">
                        <img className="poi-list-item-img"
                             src={this.props.imgUrl}
                             width="375" height="200"
                             alt={this.props.title}/>
                        <div className="poi-list-item-labels">
                            <span className="poi-list-item-price">€ {this.props.price},-</span>
                            <span className="poi-list-item-skip">Skip the line</span>
                        </div>
                    </div>
                </button>
            </li>
        )
    }
}

export default PoiListItem;