import React, {Component} from 'react';
import {Tile, InputGroup, FormControl} from 'tinper-bee';

import './index.less';

export default class InputGroupDemo extends Component {
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
            <div className="inputgroup-demo">
                <Tile className="inputgroup-demo-tile demo-tile">
                    <h3>输入框组</h3>
                    <div className="inputgroup-demo-row">
                        <InputGroup >
                            <InputGroup.Addon >http://</InputGroup.Addon>
                            <FormControl type="text" />
                            <InputGroup.Addon>.com</InputGroup.Addon>
                        </InputGroup>
                    </div>
                    <div className="inputgroup-demo-row">
                        <InputGroup simple>
                            <FormControl type="text" />
                            <InputGroup.Button shape="border">
                                <span className="uf uf-search"> </span>
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                </Tile>
            </div>
        )
    }
}