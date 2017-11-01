import React, {Component} from 'react';
import {Tile} from 'tinper-bee';
import Dnd from 'tinper-bee/lib/Dnd';


import './index.less';

export default class DndDemo extends Component {

    render() {
        let list1=['第一','第二','第三','第四','第五'];
        return (
            <div className="dnd-demo">
                <Tile className="dnd-demo-tile">
                    <h3>拖拽</h3>
                    <div className="dnd-demo-row">
                        <Dnd onStart={() => {}} onStop={() => {}} >
                            <div className="drag-demo">我可随意拖拽</div>
                        </Dnd>
                    </div>
                    <div className="dnd-demo-row">
                        <Dnd list={list1} onStart={() => {}} onStop={() => {}}/>
                    </div>
                </Tile>
            </div>
        )
    }
}