import React, {Component} from 'react';
import {Tile, Cascader} from 'tinper-bee';


import './index.less';

const options = [{
	label: '基础组件',
	value: 'jczj',
	children: [{
		label: '导航',
		value: 'dh',
		children: [{
			label: '面包屑',
			value: 'mbx'
		},{
			label: '分页',
			value: 'fy'
		},{
			label: '标签',
			value: 'bq'
		},{
			label: '菜单',
			value: 'cd'
		}]
	},{
		label: '反馈',
		value: 'fk',
		children: [{
			label: '模态框',
			value: 'mtk'
		},{
			label: '通知',
			value: 'tz'
		}]
 	},
 	{
		label: '表单',
 	    value: 'bd'
 	}]
	},{
		label: '应用组件',
		value: 'yyzj',
		children: [{
			label: '参照',
			value: 'ref',
			children: [{
				label: '树参照',
				value: 'reftree'
			},{
				label: '表参照',
				value: 'reftable'
			},{
				label: '穿梭参照',
				value: 'reftransfer'
			}]
		}]
	}
];

export default class CascaderDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="cascader-demo">
                <Tile className="cascader-demo-tile demo-tile">
                    <h3>级联菜单</h3>
                    <div className="cascader-demo-row">
                        <Cascader options = {options} placeholder = "请选择"/>
                    </div>
                </Tile>
            </div>
        )
    }
}