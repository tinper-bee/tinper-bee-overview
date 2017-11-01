import React, {Component} from 'react';
import {Tile, Collapse, Button} from 'tinper-bee';
console.log(Collapse);

import './index.less';

export default class CollapseDemo extends Component {
    state = {
        open: true
    }

    render() {
        return (
            <div className="collapse-demo">
                <Tile className="collapse-demo-tile">
                    <h3>折叠组件</h3>
                    <div className="collapse-demo-row">
                        <Button  colors="primary" onClick={ ()=> this.setState({ open: !this.state.open })}>
                            点我啦
                        </Button>

                        <Collapse in={this.state.open}>
                            <div>
                                我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~
                            </div>
                        </Collapse>
                    </div>
                </Tile>
            </div>
        )
    }
}