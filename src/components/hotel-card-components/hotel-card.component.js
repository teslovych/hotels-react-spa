import React, {Component} from 'react';
import {RatingBaseComponent} from "./rating-component";

export class HotelCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            poolChecked: false,
            imageUrl: `url(${props.data.img})`
        };
        this.onDetailsClick = this.onDetailsClick.bind(this);
    }

    render() {
        return (
            <div className="row hotel-card">
                <div className="col hotel-card__img-wrapper">
                    <div className="hotel-card__img" style={{backgroundImage: this.state.imageUrl}}></div>
                </div>
                <div className="col hotel-card__content">
                    <div className="border-bottom h-100">
                        <h5>{this.props.data.name}</h5>
                        <div>{this.props.data.address}</div>
                        <div>
                            <RatingBaseComponent rating={this.props.data.rate} />
                        </div>
                    </div>
                </div>
                <div className="col border-left hotel-card__details">
                    <div className="h-100 font-weight-bold">
                        ${this.props.data.price.single}
                    </div>
                    <button type="button" className="btn btn-danger w-100" onClick={this.onDetailsClick}>View details</button>
                </div>
            </div>
        );
    }

    onDetailsClick() {
        this.props.onClick(this.props.data);
    }
}