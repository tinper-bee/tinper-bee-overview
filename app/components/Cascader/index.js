import React, {Component} from 'react';
import {Tile, Cascader} from 'tinper-bee';


import './index.less';

const options = [
    {
        value: '浙江',
        children: [
            {
                value: '杭州',
                children: [
                    {
                        value: '西湖',
                        children: [
                            {
                                value: '白娘子'
                            },
                            {
                                value: '许仙'
                            }]
                    }]
            }
        ]
    },
    {
        value: '江苏',
        children: [
            {
                value: '南京',
                children: [
                    {
                        value: '中华门'
                    }]
            }
        ]
    },
    {
        value: '山东'
    }
];

export default class CascaderDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="cascader-demo">
                <Tile className="cascader-demo-tile">
                    <h3>级联菜单</h3>
                    <div className="cascader-demo-row">
                        <Cascader options = {options} />
                    </div>
                </Tile>
            </div>
        )
    }
}