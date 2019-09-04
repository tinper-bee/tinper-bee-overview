import React, {Component} from 'react';
import {Tile, Button, Popover} from 'tinper-bee';

import './index.less';

export default class PopoverDemo extends Component {
    state = {
        open: true
    }

    render() {

        let content = (
            <div>
                <h3>
                    消息
                </h3>
                <ul>
                    <li>双11大促，快来抢购啊</li>
                    <li>1元抢iphone，来晚就没了</li>
                    <li>大吉大利，今晚吃鸡</li>
                </ul>
            </div>
        )
        return (
            <div className="popover-demo">
                <Tile className="popover-demo-tile demo-tile">
                    <h3>气泡卡片</h3>
                    <div className="popover-demo-row">
                        <Popover
                            trigger="hover"
                            content={content}
                            id="popover"
                            placement="topLeft">
                            <Button colors="primary">
                                悬停显示
                            </Button>
                        </Popover>
                        <Popover
                            trigger="click"
                            content={content}
                            id="popover"
                            placement="right">
                            <Button colors="primary">
                                点击显示
                            </Button>
                        </Popover>
                    </div>
                </Tile>
            </div>
        )
    }
}