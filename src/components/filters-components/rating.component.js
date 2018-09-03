import React, {Component} from 'react';
import {RatingBaseComponent} from '../hotel-card-components/rating-component';

export class RatingFilterComponent extends RatingBaseComponent {
    constructor(props) {
        super(props);
    }

    activeColor = 'blue'

    onFilter = (index) => {
        this.props.onFilter(index + 1);
    }

    getStars = (star, index) => {
        return (
            <i key={index} onClick={() => this.onFilter(index)} className={this.getStarIcon(index)}
               style={{color: this.getColor(index)}}/>
        )
    }

    getStarIcon = index => (index < this.props.rating) ? 'fas fa-star' : 'far fa-star';


    render() {
        return (
            <div className="rating-filter">
                <h6>Stars</h6>
                {this.starsLength.map(this.getStars)}
            </div>
        );
    }
}