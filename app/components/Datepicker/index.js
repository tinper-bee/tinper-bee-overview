import React, {Component} from 'react';
import {Tile} from 'tinper-bee';
import DatePicker from 'tinper-bee/lib/Datepicker';


import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import moment from 'moment';

function onSelect(d) {
    console.log(d)
}


function onChange(d) {
    console.log(d)
}

import './index.less';

export default class DateDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="date-demo">
                <Tile className="date-demo-tile">
                    <h3>日期选择</h3>
                    <div className="date-demo-row">
                        <DatePicker

                            format={"YYYY-MM-DD HH:mm:ss"}

                            onSelect={onSelect}

                            onChange={onChange}

                            locale={zhCN}


                            value={moment('2017/12/11')}

                            placeholder = {'选择日期时间'}

                        />

                    </div>
                </Tile>
            </div>
        )
    }
}