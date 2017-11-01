import React, {Component} from 'react';
import {Tile, InputNumber} from 'tinper-bee';


import './index.less';

export default class InputNumberDemo extends Component {

    render() {
        return (
            <div className="inputnumber-demo">
                <Tile className="inputnumber-demo-tile">
                    <h3>数字输入框</h3>
                    <div className="inputnumber-demo-row">
                        <InputNumber max={12} min={5} step={2}/>
                    </div>
                    <div className="inputnumber-demo-row">
                        <InputNumber iconStyle="one" max={12} min={5} step={2}/>
                    </div>
                </Tile>
            </div>
        )
    }
}