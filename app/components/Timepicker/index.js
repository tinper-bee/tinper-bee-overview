import React, {Component} from 'react';
import {Tile, Form} from 'tinper-bee';
import Timepicker from 'tinper-bee/lib/Timepicker';
import moment from 'moment';

import './index.less';

class TimeDemo extends Component {
    submit = (e) => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values);
            }
        });
    }

    render() {
        const now = moment().hour(0).minute(0);
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="time-demo">
                <Tile className="time-demo-tile demo-tile">
                    <h3>时间</h3>
                    <div className="time-demo-row">
                        <Timepicker disabled placeholder="选择时间" onChange={() => {}} defaultValue={now} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </div>
                    <h3>配合form使用，并使用normal格式化</h3>
                    <Timepicker
                        format={'HH:mm:ss'}
                        {...getFieldProps('date', {
                            validateTrigger: 'onBlur',
                            initialValue:moment(`${moment().format('YYYY-MM-DD')} 12:13:14`),
                            normalize:(value)=>{
                                if(value&&value.format){
                                    return value.format('HH:mm:ss')
                                }else{
                                    return value
                                }
                            },
                            rules: [{
                                required: true, message: '请输入日期',
                            }],
                        }) }
                    />
                    <button className="u-button" onClick={this.submit}>获得值</button>
                </Tile>
            </div>
        )
    }
}
export default Form.createForm()(TimeDemo)