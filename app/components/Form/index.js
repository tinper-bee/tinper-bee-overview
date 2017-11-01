import {  Form, Tile, FormControl, Select } from 'tinper-bee';
import React, {Component} from 'react';

import './index.less';

const FormItem = Form.FormItem;
const Option = Select.Option;


export default class FormDemo extends Component{
    checkForm=(flag,obj)=>{
        console.log(flag);
        console.log(obj);
    }
    render() {
        let before=()=>{
            return (<span>
                before
            </span>)
        }
        let after=()=>{
            return (<span>
                after
            </span>)
        }

        return (
            <div className="form-demo">
                <Tile className="form-demo-tile">
                    <div className="form-demo-row">
                        <Form submitCallBack={this.checkForm}>
                            <FormItem labelName="姓名"  isRequire={true} errorMessage="姓名格式错误" method="blur"  >
                                <FormControl name="name" placeholder="只能输入中文"/>
                            </FormItem>
                            <FormItem labelName="年龄" isRequire={true} method="blur" errorMessage="年龄格式错误" reg={/^[0-9]+$/}  >
                                <FormControl name="age" />
                            </FormItem>
                            <FormItem labelName="性别"  methon="change">
                                <Select name="select"  defaultValue="woman"  >
                                    <Option value="man">男</Option>
                                    <Option value="woman">女</Option>
                                </Select>
                            </FormItem>

                        </Form>
                    </div>
                </Tile>
            </div>
        )
    }
}