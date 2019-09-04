import React, { Component } from 'react';
import {Tile, Button, Message} from 'tinper-bee';
import './index.less';

const info = function () {
    Message.create({content: 'This is a Info message', color: 'info', duration: null});
};
const danger = function () {
    Message.create({content: 'This is a danger message', color: 'danger'});
};
const success = function () {
    Message.destroy();
    Message.create({
        content: 'This is a success message', 
        color: 'success',
        style: {width:'100%', top:0, left:0, transform:'none'}
    });
};
const warning = function () {
    Message.create({content: 'This is a warning message', color: 'warning'});
};
const loading = function () {
    Message.create({content: 'This is a dark message', color: 'dark'});
};
const light = function () {
    Message.create({content: 'This is a light message', color: 'light'});
};

export default class MessageDemo extends Component {
    constructor(props){
        super(props);

    }

    render () {
        return (
            <div className="message-demo">
                <Tile className="message-demo-tile demo-tile">
                    <h3>消息</h3>
                    <div className="message-demo-row">
                        <Button
                            colors="dark"
                            onClick={loading}>
                            dark
                        </Button>
                        <Button
                            colors="info"
                            onClick={info}>
                            info
                        </Button>
                        <Button
                            colors="danger"
                            onClick={danger}>
                            danger
                        </Button>
                        <Button
                            colors="warning"
                            onClick={warning}>
                            warning
                        </Button>
                        <Button
                            colors="success"
                            onClick={success}>
                            success
                        </Button>
                        {/* <Button
                            colors="dark"
                            onClick={loading}>
                            dark
                        </Button>
                        <Button
                            bordered
                            onClick={light}>
                            light
                        </Button> */}
                    </div>
                    {/* <div className="message-demo-row">
                        
                    </div> */}
                </Tile>
            </div>
        )
    }
}