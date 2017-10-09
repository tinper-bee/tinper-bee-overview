import { Component } from 'react';
import {Tile, LoadingState} from 'tinper-bee';
import './index.css';

export default class LoadingStateDemo extends Component {
    render () {
        return (
            <Tile className="loading-demo-tile demo-tile">
                <div className="loading-demo-row">
                    <LoadingState className="loading-state" colors="info" loadingTime={4000}>confirm</LoadingState>
                    <LoadingState className="loading-state" colors="info" loadingText="waiting..." loadingTime={3000}>confirm</LoadingState>
                </div>
            </Tile>
        )
    }
}