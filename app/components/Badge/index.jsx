import React, {Component} from 'react';
import { Tile, Badge, Icon } from 'tinper-bee';

import './index.less';

export default class BadgeDemo extends Component{
    render() {
        return (
            <div className="badge-demo">
                <Tile className="badge-demo-tile demo-tile">
                    <h3>标记</h3>
                    <div className="badge-demo-row">
                        <Badge colors="primary" >8</Badge>
                        <Badge colors="success" >7</Badge>
                        <Badge colors="info" >6</Badge>
                        <Badge colors="error" >5</Badge>
                        <Badge colors="warning" >3</Badge>
                        <Badge colors="dark" >1</Badge>

                    </div>
                    {/* <div className="badge-demo-row">
                        <Badge dataBadge={4} dataBadgePlacement="bottom">
                            <Icon type="uf-bell" />
                        </Badge>
                        <Badge dataBadge={4} colors="warning" dataBadgePlacement="up">
                            <Icon type="uf-bell" />
                        </Badge>
                    </div> */}
                </Tile>
            </div>
        )
    }
}