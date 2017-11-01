import React, {Component} from 'react';
import {Tile, Alert, Icon} from 'tinper-bee';
import Timepicker from 'tinper-bee/lib/Timepicker';
import moment from 'moment';

import './index.less';

export default class TimeDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="time-demo">
                <Tile className="time-demo-tile">
                    <h3>时间</h3>
                    <div className="time-demo-row">
                        <Timepicker placeholder="选择时间" onChange={() => {}} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </div>
                </Tile>
            </div>
        )
    }
}