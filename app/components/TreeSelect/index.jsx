import React, { Component } from 'react';
import {Tile, TreeSelect} from 'tinper-bee';
import './index.less';

const treeData = [{
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
      title: 'Child Node1',
      value: '0-0-1',
      key: '0-0-1',
    }, {
      title: 'Child Node2',
      value: '0-0-2',
      key: '0-0-2',
    }],
  }, {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  }];

console.log('TreeSelect',TreeSelect)
export default class TreeSelectDemo extends Component {
    state = {
        value: undefined,
      }
      onChange = (value) => {
        this.setState({ value });
      }
    render() {
        return (
            <Tile className="tree-select-demo-tile demo-tile demo-tile-lg">
                <h3>树型选择器</h3>
                <TreeSelect
                  style={{ width: 300 }}
                  value={this.state.value}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={treeData}
                  placeholder="Please select"
                  treeDefaultExpandAll
                  onChange={this.onChange}
                />
            </Tile>
        );
    }
}