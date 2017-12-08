import React, {Component} from 'react';
import {Tile, Locale, Popconfirm, Button} from 'tinper-bee';
import En from 'bee-locale/src/en_US';


import './index.less';

export default class LocaleDemo extends Component {


    render() {
        let content = (
            <div>
                今晚，你要来我家吗？
            </div>
        );
        return (
            <div className="locale-demo">
                <Tile className="locale-demo-tile">
                    <h3>多语组件</h3>
                    <div className="locale-demo-row">
                        <Locale locale={En}>
                            <Popconfirm trigger="click" placement="right" content={content}>
                                <Button colors="primary">向左!</Button>
                            </Popconfirm>
                        </Locale>
                    </div>
                </Tile>
            </div>
        )
    }
}