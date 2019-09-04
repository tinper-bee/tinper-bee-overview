import { Button, Modal, Tile, Checkbox } from 'tinper-bee';
import React, { Component } from 'react';
import './index.less';

const info = function () {
    Modal.info({
        title: '提示',
        okText: '知道了',
        content: (
            <div>
            <p>单据状态已更新，请在审批中心内查看。</p>
            </div>
        ),
        onOk() {},
    });
};
export default class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            checked: false
        };
    }

    close1 = () => {
        this.setState({
            showModal1: false
        });
    }
    open1 = () => {
        this.setState({
            showModal1: true
        });
    }
    close2 = () => {
        this.setState({
            showModal2: false
        });
    }
    open2 = () => {
        this.setState({
            showModal2: true
        });
    }
    close3 = () => {
        this.setState({
            showModal3: false
        });
    }
    open3 = () => {
        this.setState({
            showModal3: true
        });
    }
    changeCheck=()=> {
        this.setState({checked:!this.state.checked});
    }


    render () {
        return (
            <div className="modal-demo">
                <Tile className="modal-demo-tile demo-tile">
                    <h3>模态框</h3>
                    <div className="modal-demo-row">
                        <Button
                            bordered
                            style={{marginRight: 8}}
                            onClick = { this.open1 }>
                            普通模态框
                        </Button>
                        <Modal
                            show = { this.state.showModal1 }
                            onHide = { this.close1 } >
                                <Modal.Header closeButton>
                                    <Modal.Title>这是题目</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    这是一些描述。。。
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button onClick={ this.close1 } shape="border" style={{marginRight: 8}}>关闭</Button>
                                    <Button onClick={ this.close1 } colors="primary">确认</Button>
                                </Modal.Footer>
                        </Modal>
                        <Button colors="info" onClick={info}>Info</Button>
                    </div>

                    <div className="modal-demo-row">
                        <Button
                        bordered
                        style={{marginRight: 8}}
                        className="demo-margin"
                        onClick={this.open2}>
                        可拖拽Header的模态框
                        </Button>
                        <Modal
                            show={this.state.showModal2}
                            onHide={this.close2}
                            size="lg"
                            ref={ref => this.modal = ref}
                            className="demo10-modal"
                            backdrop={false}
                            draggable={true}
                            // bounds={'body'}//可拖拽范围为当前可见区域
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                <Checkbox 
                                    className="dnd-cancel"
                                    checked={this.state.checked}  
                                    onChange={this.changeCheck}
                                >
                                    可勾选的标题
                                </Checkbox>
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={this.close2} colors="secondary" style={{ marginRight: 8 }}>取消</Button>
                                <Button onClick={this.close2} bordered>确认</Button>
                            </Modal.Footer>
                        </Modal>

                        <Button
                        bordered
                        className="demo-margin"
                        onClick = { this.open3 }>
                            resizable
                        </Button>​
                        <Modal
                        centered
                        show = { this.state.showModal3 }
                        backdropClosable={false}
                        resizable={true}
                        resizeClassName="resize-box"
                        maxWidth={"1000"}
                        maxHeight={"500px"}
                        minWidth={300}
                        minHeight={150}
                        onResizeStart={this.onResizeStart}
                        onResize={this.onResize}
                        onResizeStop={this.onResizeStop}
                        onHide = { this.close3 } >
                            <Modal.Header closeButton>
                                <Modal.Title>标题</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={ this.close3 } colors="secondary" style={{marginRight: 8}}>取消</Button>
                                <Button onClick={ this.close3 } bordered>确认</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                </Tile>
            </div>
        )
    }
}