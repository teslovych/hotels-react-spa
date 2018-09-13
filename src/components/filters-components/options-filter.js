import React, {Component} from 'react';

export class OptionsFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            poolChecked: false
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <div>
                <h6>Popular filters</h6>
                <form>
                    <div>
                        <div className="form-group">
                            <input className="checkbox" type="checkbox" id="hasPool" value="true"
                                   checked={this.state.poolChecked}
                                   onChange={this.onInputChange} />
                            <label className="label" htmlFor="hasPool">Pool</label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    onInputChange($event) {
        this.setState({
            poolChecked: !this.state.poolChecked
        }, function () {
            this.props.onFilter({
                'hasPool': this.state.poolChecked
            });
        });

    }
}