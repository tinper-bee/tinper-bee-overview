import React, {Component} from 'react';
import {Tile, Autocomplete, Icon} from 'tinper-bee';


import './index.less';

export default class AutocompleteDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            options: ['10000(博宇)', '10001(波波)', '10002(李刚)'],
            placeholder: "查找关键字,请输入1",
            disabled: false
        }
        this.onFormChange = this.onFormChange.bind(this);
    }
    onFormChange(value) {
        console.log(value);
        this.setState({
            value: value
        })

    }

    render() {
        let { value, options, placeholder,disabled} = this.state;
        return (
            <div className="autocomplete-demo">
                <Tile className="autocomplete-demo-tile">
                    <h3>自动补全</h3>
                    <div className="autocomplete-demo-row">
                        <Autocomplete
                            value={value}
                            disabled={disabled}
                            options={options}
                            placeholder={placeholder}
                            onValueChange={value => this.onFormChange(value)}
                        />

                    </div>
                </Tile>
            </div>
        )
    }
}