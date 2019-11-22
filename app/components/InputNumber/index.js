import React, {Component} from 'react';
import {Tile, InputNumber} from 'tinper-bee';


import './index.less';

export default class InputNumberDemo extends Component {
    state = {
        value: 0
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div className="inputnumber-demo">
                <Tile className="inputnumber-demo-tile demo-tile">
                    <h3>数字输入框</h3>
                    <div className="inputnumber-demo-row">
                        <InputNumber  precision={2} min={0} value={this.state.value} onChange={ this.handleChange }/>
                    </div>
                    <div className="inputnumber-demo-row">
                        <InputNumber iconStyle="one" max={12} min={5} step={2}/>
                    </div>
                    <div className="inputnumber-demo-row">
                    <InputNumber toThousands={true} precision={2} />
                    </div>
                </Tile>
            </div>
        )
    }
}