import React, {Component} from 'react';
import {Tile, BackTop} from 'tinper-bee';


import './index.less';

export default class BackTopDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="backdrop-demo">
                <Tile className="backdrop-demo-tile">
                    <h3>回到顶部</h3>
                    <div className="backdrop-demo-row">
                        <BackTop target={() => this} character="UP"/>
                    </div>
                </Tile>
            </div>
        )
    }
}