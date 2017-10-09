import React, { Component } from 'react';
import {
    Panel,
    Tile,
    Button,
    PanelGroup
} from 'tinper-bee';

import './index.less';


export default class PanelDemo extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            activeKey: '1'
        };
    }
    handleSelect = (activeKey) => {
        this.setState({ activeKey });
    }
    render () {
        return (
            <div className="panel-demo">
                <Tile className="panel-demo-tile demo-tile">
                    <h3>展示板</h3>
                    <div className="panel-demo-row">
                        <Panel header="Panel header" footer='Panel footer'>
                            Panel content
                        </Panel>
                    </div>
                    <div className="panel-demo-row">
                        <PanelGroup
                            activeKey={this.state.activeKey}
                            onSelect={this.handleSelect}
                            accordion>
                            <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
                            <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
                        </PanelGroup>
                    </div>
                </Tile>


            </div>
        )
    }
}