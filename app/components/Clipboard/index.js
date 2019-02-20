import React, {Component} from 'react';
import {Tile, Clipboard} from 'tinper-bee';


import './index.less';

export default class ClipboardDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="clipboard-demo">
                <Tile className="clipboard-demo-tile demo-tile">
                    <h3>复制</h3>
                    <div className="clipboard-demo-row">
                        <Clipboard action="copy" text="默认复制-我将被复制到剪切板" />
                        <div id="copyContent" >目标复制-我将被复制到剪切板</div>
                        <Clipboard action="copy"  target='#copyContent' />
                    </div>
                </Tile>
            </div>
        )
    }
}