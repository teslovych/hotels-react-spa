import React, {Component} from 'react';

export class NameFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    render() {
        return (
            <div>
                <h6>Hotel name</h6>
                <form onSubmit={this.onFilter}>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                    <span className="input-group-text" onClick={this.onFilter}>
                        <i className="fas fa-search" />
                    </span>
                        </div>
                        <input type="text"
                               placeholder="Hotel name"
                               className="form-control"
                               value={this.state.term}
                               onChange={this.onInputChange}
                               aria-label="Hotel name" />
                    </div>
                </form>
            </div>
        );
    }

    onFilter($event) {
        $event.preventDefault();
        this.props.onFilter(this.state.term);
    }

    onInputChange($event) {
        this.setState({
            term: $event.target.value
        }, function () {
            if (!this.state.term.length) {
                this.props.onFilter(this.state.term);
            }
        });
    }
}