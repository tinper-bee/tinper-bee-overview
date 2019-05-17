import React, { Component } from 'react';
import {ColorPicker,Tile, Row, Col} from 'tinper-bee';
import './index.less';

export default class ColorPickerDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : "#E14C46"
        }
    }
    handleChange = (v) => {
        console.log("选择的色彩信息 ：" , v);
        this.setState({
            value: v.hex || ''
        })
    }
    render () {
        return (
            <div className="colorpicker-demo">
                <Tile className="colorpicker-demo-tile demo-tile" >
                    <h3>取色板</h3>
                    <div className="colorpicker-demo-row" >
                        <ColorPicker 
                            label="颜色"
                            placeholder="请输入十六进制色值"
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />
                    </div>
                </Tile>
            </div>
        )
    }
}
