import React, {Component} from 'react';
import {Tile, Button, Popover} from 'tinper-bee';

import './index.less';

export default class PopoverDemo extends Component {
    state = {
        show: false
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }

    show = () => {
        this.setState({
            show: true
        })
    }

    onVisibleChange = (visible) => {
        console.log('显示状态改变时触发的回调: ',visible);
        this.setState({
            show: visible
        })
    }
    render() {
        let content = (
            <div>
                <Button
                    colors="primary"
                    onClick={ this.handleClose }
                    size="sm">
                    关闭
                </Button>
            </div>
        )
        return (
            <div className="popover-demo">
                <Tile className="popover-demo-tile demo-tile">
                    <h3>气泡卡片</h3>
                    <div className="popover-demo-row">
                        <Popover
                            trigger="hover"
                            title={<h3>请确认您的包裹已签收！</h3>}
                            content={content}
                            id="popover"
                            placement="topLeft">
                            <Button colors="primary">
                                悬停显示
                            </Button>
                        </Popover>
                        <Popover
                            placement="right"
                            title={<h3>请确认您的包裹已签收！</h3>}
                            content={content}
                            show={this.state.show}
                            onVisibleChange={this.onVisibleChange}
                        >
                            <Button
                                colors="primary"
                                onClick={ this.show }
                                >确认按钮</Button>
                        </Popover>
                    </div>
                </Tile>
            </div>
        )
    }
}