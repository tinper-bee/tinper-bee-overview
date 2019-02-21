import React, { Component } from 'react';
import {Tile, Tree} from 'tinper-bee';
import './index.less';
const TreeNode = Tree.TreeNode;

const defaultProps = {
    keys: ['0-0-0', '0-0-1']
}

export default class TreeDemo extends Component {
    constructor(props) {
        super(props);
        const keys = this.props.keys;
        this.state = {
            defaultExpandedKeys: keys,
            defaultSelectedKeys: keys,
            defaultCheckedKeys: keys,
        };
    }
    onSelect(info) {
        console.log('selected', info);
    }
    onCheck(info) {
        console.log('onCheck', info);
    }
    render() {
        return (
            <Tile className="tree-demo-tile demo-tile demo-tile-lg">
                <h3>树形控件</h3>
                <Tree className="myCls" showLine checkable
                      defaultExpandedKeys={this.state.defaultExpandedKeys}
                      defaultSelectedKeys={this.state.defaultSelectedKeys}
                      defaultCheckedKeys={this.state.defaultCheckedKeys}
                      onSelect={this.onSelect} onCheck={this.onCheck}
                    >
                    <TreeNode title="parent 1" key="0-0">
                        <TreeNode title="parent 1-0" key="0-0-0" disabled>
                            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                            <TreeNode title="leaf" key="0-0-0-1" />
                        </TreeNode>
                        <TreeNode title="parent 1-1" key="0-0-1">
                            <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </Tile>
        );
    }
}

TreeDemo.defaultProps = defaultProps;