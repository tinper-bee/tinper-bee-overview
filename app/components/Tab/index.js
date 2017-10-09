import React, { Component } from 'react';
import {Tabs, Button, Tile} from 'tinper-bee';
import './index.less';

console.log(Tabs);
const TabPane = Tabs.TabPane;
const ScrollableInkTabBar = Tabs.ScrollableInkTabBar;

export default class TabDemo extends Component {
    constructor(props){
        super(props);

    }

    render () {
        return (
            <div className="tab-demo">
                <Tile className="tab-demo-tile demo-tile">
                    <h3>选项卡</h3>
                    <div className="tab-demo-row">
                        <Tabs
                            defaultActiveKey="2"
                            onChange={() => {}}
                            tabBarStyle="downborder"
                            renderTabBar={()=><ScrollableInkTabBar />}
                        >
                            <TabPane tab='tab 1' key="1">1</TabPane>
                            <TabPane tab='tab 2' key="2">2</TabPane>
                            <TabPane tab='tab 3' key="3">3</TabPane>
                            <TabPane tab='tab 4' key="4">4</TabPane>
                        </Tabs>
                    </div>
                    <div className="tab-demo-row">

                    </div>
                </Tile>
            </div>
        )
    }
}