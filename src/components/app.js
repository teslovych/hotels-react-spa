import React, {Component} from 'react';
import FilterSidebar from '../containers/filter-sidebar.container';
import HotelsList from '../containers/hotels-list.container';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <FilterSidebar />
                    <HotelsList />
                </div>
            </div>
        );
    }
}
