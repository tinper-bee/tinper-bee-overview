import { Component } from 'react';
import { Tile, Button, Icon, ButtonGroup } from 'tinper-bee';

import './index.less';

export default class ButtonDemo extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="button-demo">
                <Tile className="button-demo-tile demo-tile">
                    <h3>基本按钮</h3>
                    <div className="button-demo-row">
                        <Button colors="primary">primary</Button>
                        <Button colors="accent">accent</Button>
                        <Button bordered>border</Button>
                    </div>
                    <div className="button-demo-row">
                        <Button colors="success">success</Button>
                        <Button colors="info">info</Button>
                        <Button colors="warning">warning</Button>
                        <Button colors="danger">danger</Button>
                    </div>
                    <div className="button-demo-row">
                        <Button bordered colors="success">success</Button>
                        <Button bordered colors="info">info</Button>
                        <Button bordered colors="warning">warning</Button>
                        <Button bordered colors="danger">danger</Button>
                    </div>
                </Tile>
                <Tile className="button-demo-tile demo-tile">
                    <h3>不同形状按钮</h3>
                    <div className="button-demo-row">
                        <Button size="sm" colors="primary">小按钮</Button>
                        <Button colors="primary">默认</Button>
                        <Button size="lg" colors="primary">大按钮</Button>
                        <Button size="xg" colors="primary">巨大按钮</Button>
                        <Button shape="block" colors="primary" style={{ marginTop: 10 }}>块状按钮</Button>
                    </div>
                    <div className="button-demo-row">
                        <Button shape="round" colors="info">半圆按钮</Button>
                        <Button shape="squared" colors="info">方形按钮</Button>
                        <Button shape="floating" colors="info">圆</Button>
                        <Button shape="pillLeft" colors="danger">左边</Button>
                        <Button shape="pillRight" colors="danger">右边</Button>
                    </div>
                    <div className="button-demo-row">
                        <Button shape="icon"><Icon type="uf-plus" /></Button>
                    </div>
                </Tile>
                <Tile className="button-demo-tile demo-tile">
                    <h3>按钮组</h3>
                    <div className="button-group-demo-row">
                        <ButtonGroup>
                            <Button bordered><Icon type='uf-navmenu' /></Button>
                            <Button bordered><Icon type='uf-file' /></Button>
                            <Button bordered><Icon type='uf-pencil' /></Button>
                            <Button bordered><Icon type='uf-del' /></Button>
                        </ButtonGroup>
                    </div>
                    <div className="button-group-demo-row">
                        <ButtonGroup>
                            <Button colors="primary">新增</Button>
                            <Button colors="primary">修改</Button>
                            <Button colors="primary">删除</Button>
                        </ButtonGroup>
                    </div>
                    <div className="button-group-demo-row">
                        <ButtonGroup vertical>
                            <Button colors="primary"><Icon type='uf-navmenu' /></Button>
                            <Button colors="info"><Icon type='uf-file' /></Button>
                            <Button colors="warning"><Icon type='uf-del' /></Button>
                        </ButtonGroup>
                    </div>
                </Tile>
            </div>
        )
    }
}