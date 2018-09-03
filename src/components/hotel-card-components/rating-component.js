import React, {Component} from 'react';

export class RatingBaseComponent extends Component {
    constructor(props) {
        super(props);
    }

    starsLength = Array.from({length: 5});
    activeColor = 'black';
    inActiveColor = '#cccccc';

    getColor = index => (index < this.props.rating) ? this.activeColor : this.inActiveColor;

    getStars = (star, index) => {
        return (
            <i key={index} className="fas fa-star" style={{color: this.getColor(index)}} />
        )
    }


    render() {
        return (
            <div>
                {this.starsLength.map(this.getStars)}
            </div>
        );
    }
}