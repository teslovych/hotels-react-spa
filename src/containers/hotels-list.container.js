import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchHotels, FilterTypes} from "../actions/index";
import HotelCard from '../components/hotel-card-components/hotel-card.component';

export class HotelsList extends Component {

    componentDidMount() {
        this.getHotelsList();
    }

    getHotelsList() {
        this.props.fetchHotels();
    }

    render() {
        let data;

        if (this.props.hotels && this.props.hotels.length) {
            data = this.props.hotels.map(this.renderHotels);
        }

        if (!this.props.hotels) {
            data = <h3>No data</h3>;
        }

        if (this.props.hotels && !this.props.hotels.length && this.props.hotelsNumber) {
            data = <h3>No data matched your filter</h3>;
        }


        return (
            <main className='col-sm-12 col-md-10'>
                {data}
            </main>
        );
    }

    renderHotels(hotelData) {
        return (
            <HotelCard key={hotelData.name} data={hotelData}/>
        );
    }
}

function getVisibleHotels(initialHotelsList, filterState) {
    let hotelsForView = initialHotelsList;

    if (filterState[FilterTypes.RATING] > 1) {
        hotelsForView = hotelsForView.filter(hotel => (hotel.rate * 1) === filterState[FilterTypes.RATING]);
    }

    if (filterState[FilterTypes.NAME] && filterState[FilterTypes.NAME].length) {
        hotelsForView = hotelsForView.filter(hotel => new RegExp(filterState[FilterTypes.NAME], 'gi').test(hotel.name))
    }

    if (filterState[FilterTypes.OPTION]) {
        for (let key in filterState[FilterTypes.OPTION]) {
            if (filterState[FilterTypes.OPTION][key]) {
                hotelsForView = hotelsForView.filter(hotel => hotel[key] === 'true');
            }
        }
    }

    return hotelsForView;
}

function mapStateToProps(state) {
    return {hotels: getVisibleHotels(state.hotels, state.filter), hotelsNumber: state.hotels.length};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchHotels}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsList);