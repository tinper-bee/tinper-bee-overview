import React, { Component } from 'react';
import {Tile, Breadcrumb }from 'tinper-bee';
import './index.less'
export default class BreadCrumbDemo extends Component {
    render () {
        return (
            <div className="braed-crumb-demo">
                <Tile className="bread-crumb-demo-tile demo-tile">
                    <h3>面包屑</h3>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Data
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    {/* <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active={false} href="#" title="this is a link">
                            Data
                        </Breadcrumb.Item>
                    </Breadcrumb> */}
                </Tile>
            </div>
        )
    }
}