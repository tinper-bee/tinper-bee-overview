import React, {Component} from 'react';
import {Tile, Alert, Icon} from 'tinper-bee';


import './index.less';

export default class AlertDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="alert-demo">
                <Tile className="alert-demo-tile demo-tile">
                    <h3>提醒</h3>
                    <div className="alert-demo-row">
                        <Alert colors="news">
                            <Icon type="uf-notification" />
                            <span className="alert-text"><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</span>
                        </Alert>
                        <Alert colors="news" className ="dark" closeLabel="关闭">
                            <Icon className="uf-notification" />
                            <span className="alert-text"><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</span>
                        </Alert>
                    </div>
                </Tile>
            </div>
        )
    }
}