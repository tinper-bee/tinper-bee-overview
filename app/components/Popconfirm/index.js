import React, {Component} from 'react';
import {Tile, Popconfirm, Button} from 'tinper-bee';

import './index.less';

export default class PopconfirmDemo extends Component {

    render() {
        const content = '您喜欢使用tinper-bee组件库吗？';
        return (
            <div className="popconfirm-demo">
                <Tile className="popconfirm-demo-tile">
                    <h3>折叠组件</h3>
                    <div className="popconfirm-demo-row">
                        <Popconfirm trigger="click" placement="right" content={content}>
                            <Button colors="primary">向左!</Button>
                        </Popconfirm>
                    </div>
                    <div className="popconfirm-demo-row">
                        <Popconfirm trigger="click" placement="bottom" content={content} color='dark'>
                            <Button colors="primary">黑色</Button>
                        </Popconfirm>
                    </div>
                </Tile>
            </div>
        )
    }
}