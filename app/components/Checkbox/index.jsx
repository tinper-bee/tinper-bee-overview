import React, { Component } from 'react';
import {Checkbox, Tile} from 'tinper-bee';

export default class CheckboxDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checked:false
        };
    }

    onChange() {
        this.setState({
            checked:!this.state.checked
        })
    }
    render () {
        return (
            <div className="demo-checkbox">
                <Tile className="checkbox-demo-tile">
                    <Checkbox  className="test" onChange={this.onChange}> checkbox</Checkbox>
                    <Checkbox ref="test" checked={this.state.checked} onHandleChange={this.onChange}> 全选成都市</Checkbox>

                </Tile>
            </div>
        )
    }

}

