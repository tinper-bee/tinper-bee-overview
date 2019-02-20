import React, { Component } from 'react';
import {Checkbox, Tile} from 'tinper-bee';

import './index.less';

export default class CheckboxDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checked:false
        };
    }

    onChange = () => {
        this.setState({
            checked:!this.state.checked
        })
    }
    render () {
        return (
            <div className="checkbox-demo">
                <Tile className="checkbox-demo-tile demo-tile">
                    <h3>复选框</h3>
                    <div className="button-demo-row">
                        <Checkbox
                            className="test"
                            onChange={this.onChange}>
                            checkbox
                        </Checkbox>
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.onChange}>
                            全选成都市
                        </Checkbox>
                    </div>
                </Tile>
            </div>
        )
    }

}

