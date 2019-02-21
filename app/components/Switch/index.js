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
                <Tile className="switch-demo-tile demo-tile" >
                    <h3>开关</h3>
                    <div className="switch-demo-row" >
                        <Switch defaultChecked={true}/>
                        <Switch
                        style={{marginRight:8+'px'}} 
                        defaultChecked={this.state.checked}   
                        onChangeHandler = {this.changeHandle} 
                        checkedChildren={'on'} 
                        unCheckedChildren={'off'} />
                        <span>{ this.state.switch }</span>
                    </div>
                    {/* <div className="switch-demo-row">
                        <Switch checked={true} size='sm' />
                        <Switch checked={true} />
                        <Switch checked={true} size='lg' />
                    </div>
                    <div className="switch-demo-row">
                        <Switch defaultChecked={this.state.checked}   onChangeHandler = {this.changeHandle} checkedChildren={'on'} unCheckedChildren={'off'} />
                        <span>{ this.state.switch }</span>
                    </div> */}
                </Tile>
            </div>
        )
    }
}
