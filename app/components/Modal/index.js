import { Con, Row, Col, Button, Modal, Tile, Transfer } from 'tinper-bee';
import React, { Component } from 'react';
import './index.less';

const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}

const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);

export default class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            modalSize: '',
            targetKeys,
            selectedKeys: [],
        };
        this.close1 = this.close1.bind(this);
        this.open1 = this.open1.bind(this);
        this.close2 = this.close2.bind(this);
        this.open2 = this.open2.bind(this);
        this.changeSize = this.changeSize.bind(this);
    }

    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    }

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    }

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    }

    close1() {
        this.setState({
            showModal1: false
        });
    }
    open1() {
        this.setState({
            showModal1: true
        });
    }
    close2() {
        this.setState({
            showModal2: false
        });
    }
    open2() {
        this.setState({
            showModal2: true
        });
    }
    changeSize(size) {
        this.setState({
            modalSize: size
        });
    }

    render () {
        return (
            <div className="modal-demo">
                <Tile className="modal-demo-tile demo-tile">
                    <h3>模态框</h3>
                    <div className="modal-demo-row">
                        <Button
                            colors = "primary"
                            onClick = { this.open1 }>
                            打开模态框
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
                    </div>

                    {/* <div className="notification-demo-row">
                        <Button   colors="primary" size="lg" onClick={ ()=>{this.changeSize("sm");this.open2();} }>
                            打开小号模态框
                        </Button>
                        <Button  colors="primary" size="lg" onClick={ ()=>{this.changeSize("lg");this.open2();} }>
                            打开大号模态框
                        </Button>
                        <Button  colors="primary" size="lg" onClick={ ()=>{this.changeSize("xlg");this.open2();} }>
                            打开超大号模态框
                        </Button>
                        <Modal show={ this.state.showModal2 } size={ this.state.modalSize } onHide={ this.close2 }>
                            <Modal.Header closeButton>
                                <Modal.Title > 我来组成头部 </Modal.Title>
                            </Modal.Header >
                            <Modal.Body >
                                <h4> 这是一个沉默的标题 </h4>

                                <p> 一些描述。。。 </p>
                                <hr/>
                                <h4> 来多添加一些内容， 显示滚动条吧 </h4>

                                <p> 用创想与技术推动商业和社会进步 </p>

                                <p> 我们基于创造性的思想与先进的技术（ 现阶段是信息技术）， 创新和运营高客户价值的产品与服务， 帮助客户实现发展目标， 进而推动商业和社会进步。
                                </p>

                                <p> 全球领先的企业与公共组织软件、 云服务、 金融服务提供商。 </p>

                                <p> 员工快乐工作， 成就事业， 分享成功的平台。 </p>

                                <p> 企业和公共组织是我们持续服务的客户。 软件、 云服务、 金融服务是用友新发展阶段的核心业务。 全球领先是我们必须达成的目标。 </p>

                                <p> 在努力实现产业发展目标的同时， 员工在用友快乐工作、 成就事业、 分享成功也是公司的追求。 </p>

                                <p> 核心价值观 </p>

                                <p> 用户之友 专业奋斗 </p>

                                <p> 开放创新 诚信合作 </p>

                                <p> 核心价值观是所有用友人最重要的行为指引、 行动指南， 也是公司赖以可持续发展的信念基石。 </p>

                                <p> 我们坚守“ 用户之友” 的初心， 做“ 专业的奋斗者”， 始终坚持“ 开放创新” 和“ 诚信合作”。 </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={ this.close2 }> 关闭 </Button>
                            </Modal.Footer>
                        </Modal>
                    </div> */}

                </Tile>
            </div>
        )
    }
}