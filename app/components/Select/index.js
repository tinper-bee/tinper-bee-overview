import React,{ Component } from 'react';
import { Tile, Select } from 'tinper-bee';

import './index.less';
const Option = Select.Option;

export default class SelectDemo extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="select-demo">
                <Tile className="select-demo-tile demo-tile">
                    <h3>基本按钮</h3>
                    <div className="select-demo-row">
                        <Select
                        size="lg"
                        defaultValue="1" 
                        onFocus={(v)=>{console.log('focus',v)}}
                        style={{ width: 200, marginRight: 6 }}
                        onChange={this.handleChange}
                        >
                            <Option value="1">一</Option>
                            <Option value="2">二</Option>
                            <Option value="3" disabled>
                                三
                            </Option>
                            <Option value="4">四</Option>
                        </Select>
                    </div>
                </Tile>
            </div>
        )
    }
}