import React, {Component} from 'react';
import {Tile, LoadingState, Icon} from 'tinper-bee';


import './index.less';

export default class LoadingStateDemo extends Component {
    state = {
        show1: false,
        show2: false
    }

    handleClick1 = () => {
        this.setState({
            show1: true
        })
        setTimeout(() => {
            this.setState({
                show1: false
            })
        }, 3000)
    }
    handleClick2 = () => {
        this.setState({
            show2: true
        })
        setTimeout(() => {
            this.setState({
                show2: false
            })
        }, 3000)
    }

    render() {
        return (
            <div className="loading-state-demo">
                <Tile className="loading-state-demo-tile demo-tile">
                    <h3>加载按钮</h3>
                    <div className="loading-state-demo-row">
                        <LoadingState
                            showBackDrop={false}
                            onClick={ this.handleClick1 }
                            show={ this.state.show1 }
                            colors="primary">
                            confirm
                        </LoadingState>
                        <LoadingState
                            onClick={ this.handleClick2 }
                            colors="primary"
                            show={ this.state.show2 }
                            loadingText="waiting...">
                            confirm
                        </LoadingState>
                    </div>
                </Tile>
            </div>
        )
    }
}