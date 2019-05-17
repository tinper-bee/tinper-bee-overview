import React, { Component } from 'react';
import {Tag,Tile, Row, Col} from 'tinper-bee';
import './index.less';
export default class TagDemo extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="tag-demo">
                <Tile className="tag-demo-tile demo-tile" >
                    <h3>标签</h3>
                    <div className="tag-demo-row" >
                        <Tag colors="dark">dark</Tag>
                        <Tag colors="light" bordered>light</Tag>
                    </div>
                </Tile>
            </div>
        )
    }
}
