import React, {Component} from 'react';
import {Loading, Tile} from 'tinper-bee';
import './index.less';

export default class LoadingDemo extends Component {
    render() {
        return (
        <div className="loading-demo">
            <Tile className="loading-demo-tile demo-tile">
                <div className="loading-demo-row">
                    <Loading show={true} container={this} />
                </div>
            </Tile>
        </div>

        )
    }
}