import React, { Component } from 'react';
import { Tile, Tree, Icon } from 'tinper-bee';
import './index.less';
const TreeNode = Tree.TreeNode;

const defaultProps = {
    keys: ['0-0-0', '0-0-1']
}
const x = 4;
const y = 1;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);

export default class TreeDemo extends Component {
    constructor(props) {
		super(props);
		const keys = this.props.keys;
		this.state = {
			defaultExpandedKeys: keys,
			defaultSelectedKeys: keys,
			defaultCheckedKeys:keys,
            checkedKeys: {checked:keys},
            gData: []
		};
    }
    componentDidMount(){
        setTimeout(this.setState({
            gData:gData
        }),1000)
    }
	onSelect(info) {
		console.log('selected', info);
	}
	onCheck = (checkedKeys,newst) => {
		//用户可以自定义当前选中和半选中的节点。
		console.log('onCheck', checkedKeys);
		const cks = {
			checked: checkedKeys.checked || checkedKeys,
			halfChecked:checkedKeys.halfChecked
		};
		this.setState({checkedKeys:cks});
	}

	onDoubleClick=(key,treeNode)=>{
		console.log('---onDblClick---',key,'--treeNode--',treeNode);
	}
    render () {
        const loop = data => data.map((item) => {
            if (item.children) {
              return (
                <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'} ext={{'as':'sdfa'}}>
                  {loop(item.children)}
                </TreeNode>
              );
            }
            return <TreeNode key={item.key} title={item.key} isLeaf={true}/>;
        });
        return (
            <Tile className="tree-demo-tile demo-tile demo-tile-lg">
                <h3>树形控件</h3>
                <Tree 
					className="myCls" 
					showLine 
					checkable
	                defaultExpandedKeys={this.state.defaultExpandedKeys}
					defaultSelectedKeys={this.state.defaultSelectedKeys}
					defaultCheckedKeys = {this.state.defaultCheckedKeys}
					checkStrictly
					showIcon
					cancelUnSelect={true}
					onSelect={this.onSelect} 
					onCheck={this.onCheck}
					onDoubleClick={this.onDoubleClick}
                >
                    <TreeNode title="parent 1" key="0-0"  icon={<Icon type="uf-treefolder"  />}>
                    <TreeNode title="parent 1-0" key="0-0-0" disabled  icon={<Icon type="uf-treefolder" />}>
                        <TreeNode title="leaf" key="0-0-0-0" disableCheckbox icon={<Icon type="uf-list-s-o" />}/>
                        <TreeNode title="leaf" key="0-0-0-1" icon={<Icon type="uf-list-s-o" />}/>
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1" icon={<Icon type="uf-treefolder" />}>
                        <TreeNode title={<span>sss</span>} key="0-0-1-0" icon={<Icon type="uf-list-s-o" />}/>
                    </TreeNode>
                    </TreeNode>
                </Tree>
                <h3>异步加载树节点</h3>
                <Tree
                    checkable
                    focusable
                    className="demo2 myCls"
                    defaultExpandAll={true}
                >
                    {loop(this.state.gData)}
                </Tree>
            </Tile>
        );
    }
}

TreeDemo.defaultProps = defaultProps;