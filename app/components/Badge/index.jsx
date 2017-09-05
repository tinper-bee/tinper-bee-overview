import { Component } from 'react';
import { Tile, Badge, Icon } from 'tinper-bee';

export default class BadgeDemo extends Component{
    render() {
        return (
            <div className="badge-demo">
                <Tile className="badge-demo-tile">
                    <div className="badge-demo-row">
                        <Badge colors="primary" >8</Badge>
                        <Badge dataBadge={4} dataBadgePlacement="bottom">
                            <Icon type="uf-bell" />
                        </Badge>
                        <Badge dataBadge={4} colors="warning" dataBadgePlacement="up">
                            <Icon type="uf-bell" />
                        </Badge>
                    </div>
                </Tile>
            </div>
        )
    }
}