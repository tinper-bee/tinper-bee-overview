import React, { Component } from 'react';
import {
    Tooltip,
    Tile,
    Button
} from 'tinper-bee';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';

import './index.less';

const tooltip1 = function () {
    return (
        <Tooltip
            id="tooltip5"
            positionTop="20px">
            请不要点我。
        </Tooltip>
    );
}

export default class TooltipDemo extends Component {
    render () {
        return (
            <div className="tooltip-demo">
                <Tile className="tooltip-demo-tile demo-tile">
                    <h3>文字提示</h3>
                    <div className="tooltip-demo-row static">
                        <Tooltip
                            inverse
                            id="tooltip1">
                            Hello World
                        </Tooltip>
                        <Tooltip
                            inverse
                            id="tooltip2"
                            placement="top">
                            系统繁忙。
                        </Tooltip>
                        <Tooltip
                            id="tooltip3"
                            placement="left">
                            今日爆款！
                        </Tooltip>
                        <Tooltip
                            id="tooltip4"
                            placement="bottom">
                            请先上传哦。
                        </Tooltip>
                    </div>
                    <div className="tooltip-demo-row">
                        <OverlayTrigger overlay = {tooltip1()}  placement="top">
                            <Button colors="primary">tooltip</Button>
                        </OverlayTrigger>
                    </div>
                </Tile>


            </div>
        )
    }
}