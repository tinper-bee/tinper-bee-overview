import React, { Component } from 'react';
import {FormControl, Tile} from 'tinper-bee';
import './index.less';
export default class InputDemo extends Component {
    render() {
        return (
            <div className="demo-form-control">
                <Tile className="input-demo-tile">
                    <div className="input-demo-row">
                        <FormControl placeholder="Enter text" size="sm"/>
                    </div>
                    <div className="input-demo-row">
                        <FormControl placeholder="Enter text"/>
                    </div>
                    <div className="input-demo-row">
                        <FormControl placeholder="Enter text" size="lg"/>
                    </div>
                    <div className="input-demo-row">
                        <FormControl disabled placeholder="Enter text"/>
                    </div>
                </Tile>
            </div>
        )
    }
}
