import React, { Component } from 'react';
import {Tabs,TabPane, Tile} from 'tinper-bee';
import './index.less';

export default class TabDemo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="tab-demo">
                <Tile className="tab-demo-tile">
                    <div className="tab-demo-row">
                        <Tabs
                            defaultActiveKey="1"
                            tabBarStyle="primary"
                            //renderTabBar={()=><ScrollableInkTabBar />}
                            //renderTabContent={()=><TabContent />}
                            >
                            <TabPane tab='tab 1' key="1">1</TabPane>
                            <TabPane tab='tab 2' key="2">2</TabPane>
                            <TabPane tab='tab 3' key="3">3</TabPane>
                            <TabPane tab='tab 4' key="4">4</TabPane>
                        </Tabs>
                    </div>
                    <div className="tab-demo-row">
                        <Tabs
                            defaultActiveKey="1"
                            tabBarStyle="upborder"
                            //renderTabBar={()=><ScrollableInkTabBar />}
                            //renderTabContent={()=><TabContent />}
                            >
                            <TabPane tab='tab 1' key="1">1</TabPane>
                            <TabPane tab='tab 2' key="2">2</TabPane>
                            <TabPane tab='tab 3' key="3">3</TabPane>
                            <TabPane tab='tab 4' key="4">4</TabPane>
                        </Tabs>
                    </div>
                    <div className="tab-demo-row">
                        <Tabs
                            defaultActiveKey="1"
                            tabBarStyle="downborder"
                            //renderTabBar={()=><ScrollableInkTabBar />}
                            //renderTabContent={()=><TabContent />}
                            >
                            <TabPane tab='tab 1' key="1">1</TabPane>
                            <TabPane tab='tab 2' key="2">2</TabPane>
                            <TabPane tab='tab 3' key="3">3</TabPane>
                            <TabPane tab='tab 4' key="4">4</TabPane>
                        </Tabs>
                    </div>
                    <div className="tab-demo-row">
                        <Tabs
                            defaultActiveKey="1"
                            tabBarStyle="trapezoid"
                            //renderTabBar={()=><ScrollableInkTabBar />}
                            //renderTabContent={()=><TabContent />}
                            >
                            <TabPane tab='tab 1' key="1">1</TabPane>
                            <TabPane tab='tab 2' key="2">2</TabPane>
                            <TabPane tab='tab 3' key="3">3</TabPane>
                            <TabPane tab='tab 4' key="4">4</TabPane>
                        </Tabs>
                    </div>

                </Tile>
            </div>
        )
    }
}