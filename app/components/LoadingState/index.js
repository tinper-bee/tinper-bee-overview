import React, {Component} from 'react';
import {Tile, LoadingState, Icon} from 'tinper-bee';


import './index.less';

export default class LoadingStateDemo extends Component {
    state = {
        show: false
    }

    handleClick = () => {
        this.setState({
            show: true
        })
        setTimeout(() => {
            this.setState({
                show: false
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
                            onClick={ this.handleClick }
                            show={ this.state.show }
                            colors="info">
                            提交
                        </LoadingState>
                    </div>
                </Tile>
            </div>
        )
    }
}