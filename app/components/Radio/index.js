import React, {Component} from 'react';
import {Tile, Radio} from 'tinper-bee';

import './index.less';

export default class RadioDemo extends Component {
    state = {
        selectedValue: "1"
    }

    handleChange(value) {
        this.setState({selectedValue: value});
    }

    render() {
        return (
            <div className="radio-demo">
                <Tile className="radio-demo-tile demo-tile">
                    <h3>单选框</h3>
                    <div className="radio-demo-row">
                        <Radio.RadioGroup
                            name="fruits"
                            selectedValue={this.state.selectedValue}
                            onChange={this.handleChange.bind(this)}>
                            <Radio value="1" >苹果</Radio>
                            <Radio value="2" >香蕉</Radio>
                            <Radio value="3" >葡萄</Radio>
                            <Radio value="4" >菠萝</Radio>
                            <Radio value="5" >梨</Radio>
                            <Radio value="6" >石榴</Radio>
                        </Radio.RadioGroup>   
                    </div>
                </Tile>
            </div>
        )
    }
}