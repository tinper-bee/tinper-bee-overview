import React, {Component} from 'react';
import {Tile, Row, Col} from 'tinper-bee';
import './index.css';

export default class LayoutDemo extends Component {
    render () {
        return (
            <div className="layout-demo">
                <Tile className="layout-demo-tile demo-tile">
                    <h3>基本栅格布局</h3>
                    <div className="layout-demo-row">
                        <Row>
                            <Col md={12} xs={12} sm={12} ><div className='grayDeep'>12</div></Col>
                            <Col md={6} xs={6} sm={6} ><div className='gray'>6</div></Col>
                            <Col md={6}  xs={6} sm={6}><div className='grayLight'>6</div></Col>
                            <Col md={4}  xs={4} sm={4}><div className='grayDeep'>4</div></Col>
                            <Col md={4}  xs={4} sm={4}><div className='gray'>4</div></Col>
                            <Col md={4}  xs={4} sm={4}><div className='grayLight'>4</div></Col>
                            <Col md={3}  xs={3} sm={3}><div className='grayDeep'>3</div></Col>
                            <Col md={3}  xs={3} sm={3}><div className='gray'>3</div></Col>
                            <Col md={3}  xs={3} sm={3}><div className='grayLight'>3</div></Col>
                            <Col md={3}  xs={3} sm={3}><div className='grayDeep'>3</div></Col>
                            <Col md={2}  xs={2} sm={2}><div className='gray'>2</div></Col>
                            <Col md={2}  xs={2} sm={2}><div className='grayLight'>2</div></Col>
                            <Col md={2}  xs={2} sm={2}><div className='grayDeep'>2</div></Col>
                            <Col md={2}  xs={2} sm={2}><div className='gray'>2</div></Col>
                            <Col md={2}  xs={2} sm={2}><div className='grayLight'>2</div></Col>
                            <Col md={2}  xs={2} sm={2}><div className='grayDeep'>2</div></Col>
                        </Row>
                    </div>
                </Tile>
                <Tile className="layout-demo-tile demo-tile">
                    <h3>偏移布局</h3>
                    <div className="layout-demo-row">
                        <Row>
                            <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}><div className='grayDeep'>3 offset-3</div></Col>
                            <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}><div className='gray'>3 offset-3</div></Col>
                            <Col md={6} mdOffset={6} xs={6} xsOffset={6} sm={6} smOffset={6}><div className='grayLight'>6 offset-6</div></Col>
                            <Col md={4} mdOffset={2} xs={4} xsOffset={2} sm={4} smOffset={2}><div className='gray'>4 offset-2</div></Col>
                            <Col md={2} mdOffset={3} xs={2} xsOffset={3} sm={2} smOffset={3}><div className='grayLight'>2 offset-3</div></Col>
                            <Col md={6} mdOffset={3} xs={6} xsOffset={3} sm={6} smOffset={3}><div className='grayDeep'>6 offset-3</div></Col>
                        </Row>
                    </div>
                </Tile>
                <Tile className="layout-demo-tile demo-tile">
                    <h3>自定义排列布局</h3>
                    <div className="layout-demo-row">
                        <Row>
                            <Col md={8} mdPush={4} xs={8} xsPush={4} sm={8} smPush={4} >
                                <div className='grayDeep'>8 push-4</div>
                            </Col>
                            <Col md={4} mdPull={8} xs={4} xsPull={8} sm={4} smPull={8}  >
                                <div className='gray'>4 pull-8</div>
                            </Col>
                        </Row>
                    </div>
                </Tile>
            </div>
        )
    }
}

