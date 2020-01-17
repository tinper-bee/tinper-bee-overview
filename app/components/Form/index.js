import {  Form, Tile, FormControl, Radio, Label, Checkbox, Rate, Switch ,Select} from 'tinper-bee';
import DatePicker from 'tinper-bee/lib/Datepicker';
// import Select from 'bee-select';
import React, {Component} from 'react';
import './index.less';

console.log(" ---- ",Select);
const FormItem = Form.FormItem;
const Option = Select.Option;

export default class FormDemo extends Component{
    state={
        approvalState:'',
        checkedFlag:false,
        rateValue: 3
    }
    checkForm=(flag,obj)=>{
        console.log(flag);
        console.log(obj);
    }
    onChange(e) {
        console.log(e);
        this.setState({checkedFlag: e});
    }
    handleChange = (value) => {
        this.setState({
            rateValue: value
        })
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
                <Tile className="form-demo-tile demo-tile demo-tile-lg">
                    <div className="form-demo-row">
                        <h3>表单示例</h3>
                        {/* <FormItem> */}
                            <Label>审批状态：</Label>
                            <Radio.RadioGroup
                                className="form-demo"
                                defaultValue=""
                                selectedValue={this.state.approvalState}
                                onChange={(value)=>{
                                    this.setState({ approvalState: value });
                                }}
                            >
                                <Radio value="0" >未审批</Radio>
                                <Radio value="1" >已审批</Radio>
                                <Radio value="" >全部</Radio>
                            </Radio.RadioGroup>
                            <br/>
                            <Label>未分配：</Label>
                            <Checkbox 
                                className="form-demo"
                                colors="primary" 
                                onChange={this.onChange.bind(this)}
                                checked={this.state.checkedFlag}>
                            </Checkbox>
                            <Checkbox
                                className="form-demo"
                                indeterminate
                                onChange={this.onChange.bind(this)}>
                                半选
                            </Checkbox>
                            <br/>
                            <Label>是否加密：</Label>
                            <Switch className="form-demo" defaultChecked={true}/>
                            <br/>
                            <Label>保密等级：</Label>
                            <Rate className="form-demo" value={this.state.rateValue} onChange={this.handleChange} count={5}/>
                            <span>{this.state.rateValue}</span>
                            <br/>
                            <Label>学历：</Label>
                            <Select className="form-demo" defaultValue="">
                                <Option value="">请选择</Option>
                                <Option value="nothing">无</Option>
                                <Option value="middle">初中</Option>
                                <Option value="senior">高中</Option>
                                <Option value="college1">专科</Option>
                                <Option value="college2">本科</Option>
                                <Option value="graduate">研究生及以上</Option>
                                <Option value="other">其它</Option>
                            </Select>
                            <br/>
                            <Label className="floatLeft">出生日期：</Label>
                            <DatePicker value="2019/10/30" className="form-demo" placeholder={'请选择出生日期'} showTime={true} />
                            <br/>
                            <Label>备注：</Label>
                            <FormControl style={{width:200 + 'px'}}/>
                        {/* </FormItem> */}
                        {/* <Form submitCallBack={this.checkForm}>
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

                        </Form> */}
                    </div>
                </Tile>
            </div>
        )
    }
}