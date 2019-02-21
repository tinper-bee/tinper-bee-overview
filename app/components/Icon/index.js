import React, {Component} from 'react';
import {Tile, Icon} from 'tinper-bee';


import './index.less';

export default class IconDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="icon-demo">
                <Tile className="icon-demo-tile demo-tile">
                    <h3>图标</h3>
                    <div className="icon-demo-row">
                       <Icon type="uf-plus" />
                        <Icon type="uf-del" />
                        <Icon type="uf-email" />
                    </div>
                </Tile>
            </div>
        )
    }
}