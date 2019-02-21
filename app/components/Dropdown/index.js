import React,{Component} from 'react';
import {Tile, Dropdown, Menu, Icon, Button} from 'tinper-bee';

import './index.less';

const MenuItem = Menu.Item;

const menu1 = (
    <Menu
        multiple
        onSelect={()=>{}}>
        <MenuItem key="1">借款合同</MenuItem>
        <MenuItem key="2">抵/质押合同</MenuItem>
        <MenuItem key="3">担保合同</MenuItem>
        <MenuItem key="4">联保合同</MenuItem>
        <MenuItem key="5">合同审批</MenuItem>
        <MenuItem key="6">抵/质押合同跟踪</MenuItem>
    </Menu>
);
const menu2 = (
    <Menu
        multiple
        onSelect={() => {}}>
        <MenuItem key="1"><Icon type='uf-listsearch' />借款合同</MenuItem>
        <MenuItem key="2"><Icon type='uf-listsearch' />抵/质押合同</MenuItem>
        <MenuItem key="3"><Icon type='uf-listsearch' />担保合同</MenuItem>
        <MenuItem key="4"><Icon type='uf-listsearch' />联保合同</MenuItem>
        <MenuItem key="5"><Icon type='uf-seal' />合同审批</MenuItem>
        <MenuItem key="6"><Icon type='uf-bullseye' />抵/质押合同跟踪</MenuItem>
    </Menu>
);

export default class DropdownDemo extends Component {

    render() {
        return (
            <div className="dropdown-demo">
                <Tile className="dropdown-demo-tile demo-tile">
                    <h3>下拉组件</h3>
                    <div className="dropdown-demo-row">
                        <Dropdown
                            trigger={['click']}
                            overlay={menu1}
                            animation="slide-up"
                            onVisibleChange={() => {}}>
                            <Button colors='primary'>点击显示</Button>
                        </Dropdown>
                        <Dropdown
                            trigger={['hover']}
                            overlay={menu2}
                            animation="slide-up"
                            onVisibleChange={() => {}}>
                            <Button colors='primary'>鼠标滑过显示</Button>
                        </Dropdown>
                    </div>
                </Tile>
            </div>
        )
    }
}