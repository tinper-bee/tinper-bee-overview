import React, { Component } from 'react';
import {Checkbox, Tile} from 'tinper-bee';

import './index.less';

export default class CheckboxDemo extends Component{
    state = {
        checkedFlag: false
    };

    onChange(e) {
        console.log(e);
        this.setState({checkedFlag: e});
    }

    handleDblClick = (state) => {
		console.log(state);
    }
    render () {
        return (
            <div className="checkbox-demo">
                <Tile className="checkbox-demo-tile demo-tile">
                    <h3>复选框</h3>
                    <div className="button-demo-row">
                    <Checkbox
                        disabled
                        className="test" >
                    </Checkbox>
                    <Checkbox
                        onDoubleClick={ this.handleDblClick }
                        ref="test"
                        checked={this.state.checkedFlag}
                        onChange={this.onChange.bind(this)}>
                        全选
                    </Checkbox>
                    <Checkbox
                        ref="test"
                        indeterminate
                        onChange={this.onChange.bind(this)}>
                        半选
                    </Checkbox>
                    </div>
                </Tile>
            </div>
        )
    }

}

