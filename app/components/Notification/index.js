import React, { Component } from 'react';
import {Tile, Button, Notification} from 'tinper-bee';
import './index.less';

const notification1 = Notification.newInstance({position: 'bottomRight'});
const notification2 = Notification.newInstance({position: 'topRight'});
const notification = Notification.newInstance();

export default class NotificationDemo extends Component {
    constructor(props){
        super(props);
        this.manualClose = this.manualClose.bind(this);
    }
    closableFn() {
        notification.notice({
            content: <span>只可以自动关闭的提示，默认值在右上角弹出</span>,
            duration: 6,
            closable: false
        });
    }

    close(key) {
        notification.removeNotice(key);
    }

    manualClose() {
        const key = Date.now();
        notification.notice({
            content:
                <div>
                    <p>只可以点击关闭的提示</p>
                    <Button onClick={this.close.bind(this, key)} size="sm" style={{ position: 'absolute', right: 15, bottom: 15}}>知道了</Button>
                </div>,
            key,
            duration: null,
            closable: false
        });
    }

    simpleLight() {
        notification1.notice({
            title: '通知',
            content: '明天下午李总召开会议，请您参加',
            color: 'light'
        });
    }
    simpleDark() {
        notification2.notice({
            title: '邮箱',
            content: '您收到一封邮件',
            color:'dark'
        });
    }
    render () {
        return (
            <div className="notification-demo">
                <Tile className="notification-demo-tile">
                    <div className="notification-demo-row">
                        <Button onClick={this.simpleLight}>light notification</Button>
                        <Button onClick={this.simpleDark} style={{ background: '#404040', color: '#fff' }}>dark notification</Button>
                    </div>
                    <div className="notification-demo-row">
                        <Button colors="primary" onClick={this.closableFn}>自动关闭</Button>
                        <Button colors="primary" onClick={this.manualClose}>手动关闭</Button>
                    </div>
                </Tile>
            </div>
        )
    }
}