import React, {Component} from 'react';
import { Tile, ProgressBar } from 'tinper-bee';

import './index.less';

export default class ProgressBarDemo extends Component{
    render() {
        return (
            <div className="progress-bar-demo">
                <Tile className="progress-bar-demo-tile demo-tile demo-tile-lg">
                    <h3>进度条</h3>
                    <div className="progress-bar-demo-row">
                        <ProgressBar now = {40} colors="info"/>
                        <ProgressBar active now = {60} />
                        <ProgressBar striped now = {80} />
                        {/* <ProgressBar size="sm">
                            <ProgressBar colors="danger" now = {10} />
                            <ProgressBar colors="success" now = {20} />
                            <ProgressBar colors="warning" now = {30} />
                        </ProgressBar> */}
                        <ProgressBar active now = {50} label={`${50}%`} />
                    </div>
                </Tile>
            </div>
        )
    }
}