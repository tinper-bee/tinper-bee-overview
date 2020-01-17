import React, { Component } from 'react';
import {
    Tooltip,
    Tile,
    Button
} from 'tinper-bee';

import './index.less';

const tooltip1 = function () {
    return (
        <div>
            好讨厌啊
        </div>
    );
}

export default class TooltipDemo extends Component {
    render () {
        return (
            <div className="tooltip-demo">
                <Tile className="tooltip-demo-tile demo-tile">
                    <h3>文字提示</h3>
                    <div className="tooltip-demo-row">
                        <Tooltip overlay = {tooltip1()}  placement="right">
                            <Button colors="primary">tooltip</Button>
                        </Tooltip>
                        <Tooltip inverse overlay={tooltip1()} placement="left">
                            <Button colors="primary">
                                鼠标滑过显示
                            </Button>
                        </Tooltip>
                    </div>
                </Tile>


            </div>
        )
    }
}