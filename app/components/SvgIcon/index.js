import React, { Component } from 'react';
import {SvgIcon,Tile, Row, Col} from 'tinper-bee';
import './index.less';
export default class SvgIconDemo extends Component {
    constructor(props){
        super(props);

    }

    render () {
        return (
            <div className="step-demo">
                <Tile className="step-demo-tile demo-tile" >
                    <h3>彩色图标</h3>
                    <div className="step-demo-row" >
                        <SvgIcon type="audio" />
                        <SvgIcon type="excel" />
                        <SvgIcon type="ai" />
                    </div>
                </Tile>
            </div>
        )
    }
}
