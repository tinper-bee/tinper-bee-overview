import { Component } from 'react';
import { Tile, ProgressBar } from 'tinper-bee';

export default class ProgressBarDemo extends Component{
    render() {
        return (
            <div className="badge-demo">
                <Tile className="badge-demo-tile">
                    <div className="badge-demo-row">
                        <ProgressBar now = {40} />
                        <ProgressBar active now = {40} />
                        <ProgressBar striped now = {40} />
                        <ProgressBar size="sm">
                            <ProgressBar colors="danger" now = {10} />
                            <ProgressBar colors="success" now = {20} />
                            <ProgressBar colors="warning" now = {30} />
                        </ProgressBar>
                        <ProgressBar active now = {40} label={`${40}%`} />
                    </div>
                </Tile>
            </div>
        )
    }
}