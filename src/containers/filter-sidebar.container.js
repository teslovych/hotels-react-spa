import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setRatingFilter, setNameFilter, setOptionFilter, FilterTypes} from "../actions/index";
import {NameFilter} from '../components/filters-components/name-filter';
import {RatingFilterComponent} from '../components/filters-components/rating.component';
import {OptionsFilter} from '../components/filters-components/options-filter';

class FilterSidebar extends Component {
    constructor(props) {
        super(props);

        this.filterByRating = this.filterByRating.bind(this);
        this.filterByName = this.filterByName.bind(this);
        this.filterByOption = this.filterByOption.bind(this);
    }

    render() {
        return (
            <aside className="col-sm-12 col-md-2">
                <RatingFilterComponent rating={this.getCurrentRateFilter()} onFilter={this.filterByRating}/>
                <OptionsFilter onFilter={this.filterByOption} />
                <NameFilter onFilter={this.filterByName}/>
            </aside>
        );
    }

    filterByRating(rate) {
        this.props.setRatingFilter(rate);
    }

    filterByName(name) {
        this.props.setNameFilter(name);
    }

    filterByOption(option) {
        this.props.setOptionFilter(option);
    }

    getCurrentRateFilter() {
        return this.props.filter[FilterTypes.RATING];
    }
}

function mapStateToProps(state) {
    return {filter: state.filter};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setRatingFilter, setNameFilter, setOptionFilter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);