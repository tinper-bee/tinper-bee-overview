import React, {Component} from 'react';
import {Tile, AutoComplete, Button, Icon,Row,Col} from 'tinper-bee';


import './index.less';

export default class AutocompleteDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            options: ["10000", "10001", "10002", "11000", "12010"],
            placeholder: "查找关键字,请输入1",
            open: false,
            disabled: false
        }
    }
    handleChange = value => {
        this.setState({
            value: value,
        });
    };

    changeOpen = () => {
        this.setState({
            open: !this.state.open,
        });
    }

    changeDisabled = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    render() {
        let { value, options, placeholder, open, disabled } = this.state;
        return (
            <div className="autocomplete-demo">
                <Tile className="autocomplete-demo-tile demo-tile">
                    <h3>自动补全</h3>
                    <div className="autocomplete-demo-row">
                        <Row>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <AutoComplete
                                show={open}
                                disabled={disabled}
                                value={value}
                                options={options}
                                placeholder={placeholder}
                                onChange={value => this.handleChange(value)}
                                />
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <div style={{marginBottom:16 + 'px'}}>
                                    <Button onClick={this.changeOpen} style={{marginRight:16 + 'px'}}>{open ? '隐藏面板' : '显示面板'}</Button>
                                    <Button onClick={this.changeDisabled}>{disabled ? '启用' : '禁用'}</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Tile>
            </div>
        )
    }
}