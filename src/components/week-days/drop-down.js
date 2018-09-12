import React, { Component } from 'react';

import AppStrings from './../../core/settings/strings';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="dropdown ">
                <button className="btn drop btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {AppStrings.CHOOSE_COUNTRY}
               </button>
                <div className="dropdown-menu manu" aria-labelledby="dropdownMenuButton">
                    {
                        this.props.city_list.map((item, index) => {
                            return (
                                <a key = {index} className="dropdown-item pointer_item" onClick={this.props.toggleDropDown.bind(this, index)}>
                                    {item}

                                </a>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}





