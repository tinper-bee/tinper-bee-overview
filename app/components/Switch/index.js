import React, { Component } from 'react';
import {Switch,Tile, Row, Col} from 'tinper-bee';
import './index.less';
export default class SwitchDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            switch : "false",
            checked: false
        };
        this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle(e){
        this.setState({
            switch: `${e}`,
            checked: !this.state.checked
        })
    }
    render () {
        return (
            <div className="switch-demo">
                <Tile className="switch-demo-tile" >
                    <div className="switch-demo-row" >
                        <Switch />
                        <Switch defaultChecked={true}/>
                        <Switch checked/>
                    </div>
                    <div className="switch-demo-row">
                        <Switch checked={true} size='sm' />
                        <Switch checked={true} />
                        <Switch checked={true} size='lg' />
                    </div>
                    <div className="switch-demo-row">
                        <Switch defaultChecked={this.state.checked}   onChangeHandler = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />
                        <span>{ this.state.switch }</span>
                    </div>
                </Tile>
            </div>
        )
    }
}
