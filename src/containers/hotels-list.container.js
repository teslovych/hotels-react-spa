import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchHotels, FilterTypes, showModalInfo} from "../actions/index";
import {HotelCard} from '../components/hotel-card-components/hotel-card.component';
import {GoogleMap} from '../components/map.component';
import Modal from '../components/modal';

export class HotelsList extends Component {

    constructor(props) {
        super(props);
        this.showHotelsDetails = this.showHotelsDetails.bind(this);
        this.renderHotels = this.renderHotels.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.getHotelsList();
    }

    getHotelsList() {
        this.props.fetchHotels();
    }

    render() {
        let data;
        let modal = this.props.modalInfo ? this.renderModal() : <noscript/>;

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
                {modal}
            </main>
        );
    }

    renderHotels(hotelData) {
        return (
            <HotelCard key={hotelData.name} data={hotelData} onClick={this.showHotelsDetails}/>
        );
    }

    renderModal() {
        const {lat, lon} = this.props.modalInfo.location;

        return (
            <Modal>
                <div className="modal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.modalInfo.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="map-wrapper">
                                    <GoogleMap lat={lat * 1} lng={lon * 1}/>
                                </div>
                                <p>{this.props.modalInfo.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }

    showHotelsDetails(data) {
        this.props.showModalInfo(data);
    }

    closeModal() {
        this.props.showModalInfo(null);
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
    return {
        hotels: getVisibleHotels(state.hotels, state.filter),
        hotelsNumber: state.hotels.length,
        modalInfo: state.modal
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchHotels, showModalInfo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsList);