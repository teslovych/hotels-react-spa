import React, {Component} from 'react';

export class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        });
    }

    render() {
        return (
            <div className="map-box" ref="map"></div>
        )
    }
}