
import React, { Component } from 'react';
import {Calendar, Tile} from 'tinper-bee';
import './index.less';

function onSelect(value) {
    console.log('select', value.format(format));
}

export default class CalendarDemo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state =  {
            type:'month',
        }
    }
    onTypeChange(type) {
        this.setState({
            type,
        });
    }
    render() {
        return (
            <div className="calendar-demo">
                <Tile className="calendar-demo-tile demo-tile">
                    <Calendar
                        style={{ margin: 10 }}
                        fullscreen={false}
                        onSelect={onSelect}
                        />
                </Tile>
                <Tile className="calendar-demo-tile demo-tile">
                    <Calendar
                        style={{ margin: 10 }}
                        fullscreen
                        onSelect={onSelect}
                        type={this.state.type}
                        onTypeChange={this.onTypeChange.bind(this)}

                        />
                </Tile>
            </div>
        )
    }
}