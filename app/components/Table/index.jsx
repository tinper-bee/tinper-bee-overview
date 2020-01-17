import React, { Component } from 'react';
import { Table, Tile, Checkbox } from 'tinper-bee';
import DatePicker from 'bee-datepicker'
import multiSelect from "tinper-bee/lib/multiSelect.js";
import sum from "tinper-bee/lib/sum.js"
import './index.less';

const columns03 = [
    {
        title: "序号",
        dataIndex: "index",
        key: "index",
        width: 80, 
        render(text, record, index) {
            return index + 1;
        }
    },
    {
        title: "订单编号",
        dataIndex: "orderCode",
        key: "orderCode",
        width: 200, 
    },
    {
        title: "供应商名称",
        dataIndex: "supplierName",
        key: "supplierName",
        width: 200
    },
    {
        title: "类型",
        dataIndex: "type_name",
        key: "type_name",
        width: 200
    },
    {
        title: "采购组织",
        dataIndex: "purchasing",
        key: "purchasing",
        width: 200
    },
    {
        title: "采购组",
        dataIndex: "purchasingGroup",
        key: "purchasingGroup",
        width: 200
    },
    {
        title: "凭证日期",
        dataIndex: "voucherDate",
        key: "voucherDate",
        width: 200,
        render: () => {
            return (
                <DatePicker 
                placeholder="选择日期"
                showToday={false}
                getCalendarContainer={trigger => trigger.parentNode} 
                />
            )
        }
    }
  ];
  
  const data03 = [
    { 
      orderCode:"NU0391025", 
      supplierName: "xx供应商",
      type_name: "1",
      purchasing:'组织c', 
      purchasingGroup:"aa",
      voucherDate:"2018年03月18日",
      key: "1"
    }, 
    { 
      orderCode:"NU0391026", 
      supplierName: "xx供应商",
      type_name: "2",
      purchasing:'组织a', 
      purchasingGroup:"bb",
      voucherDate:"2018年02月05日",
      key: "2"
    },
    { 
      orderCode:"NU0391027", 
      supplierName: "xx供应商",
      type_name: "3",
      purchasing:'组织b', 
      purchasingGroup:"aa",
      voucherDate:"2018年07月01日",
      key: "3"
    },
    { 
      orderCode:"NU0391028", 
      supplierName: "xx供应商",
      type_name: "4",
      purchasing:'组织c', 
      purchasingGroup:"cc",
      voucherDate:"2019年03月01日",
      key: "4"
    },
    { 
      orderCode:"NU0391029", 
      supplierName: "xx供应商",
      type_name: "5",
      purchasing:'组织d', 
      purchasingGroup:"ss",
      voucherDate:"2019年02月14日",
      key: "5"
    },
    { 
      orderCode:"NU0391030", 
      supplierName: "xx供应商",
      type_name: "1",
      purchasing:'组织e', 
      purchasingGroup:"zz",
      voucherDate:"2019年02月18日",
      key: "6"
    },
    { 
      orderCode:"NU0391031", 
      supplierName: "xx供应商",
      type_name: "2",
      purchasing:'组织f', 
      purchasingGroup:"qq",
      voucherDate:"2019年01月01日",
      key: "7"
    },
    { 
      orderCode:"NU0391032", 
      supplierName: "xx供应商",
      type_name: "3",
      purchasing:'组织g', 
      purchasingGroup:"pp",
      voucherDate:"2019年01月31日",
      key: "8"
    },
];

const MultiSelectTable = sum(multiSelect(Table, Checkbox));

export default class TableDemo extends Component {

    onRowHover = (index, record) => {
        // console.log(index, record)
    }
    render () {
        return (
            <div className="table-demo">
                <Tile className="table-demo-tile demo-tile demo-tile-lg">
                    <h3>编辑表格</h3>
                    <Table columns={columns03} data={data03} scroll={{y: 150 }} height={40}/>
                    <h3>树形表</h3>
                    <Table
                        columns={treeColumns}
                        data={treeData}
                        onRowHover={this.onRowHover}
                        // defaultExpandAllRows={true}
                    />
                </Tile>
            </div>
        )
    }
}

const treeColumns = [
    {
        title: "订单编号",
        dataIndex: "name",
        key: "name",
        width: "40%"
    },
    {
        title: "单据日期",
        dataIndex: "age",
        key: "age",
        width: "30%"
    },
    {
        title: "供应商",
        dataIndex: "address",
        key: "address"
    }
];

const treeData = [
    {
        key: 1,
        name: "NU0391001",
        age: "2019-03-01",
        address: "供应商1",
        children: [
            {
                key: 11,
                name: "NU0391002",
                age: "2019-03-02",
                address: "供应商2"
            },
            {
                key: 12,
                name: "NU0391003",
                age: "2019-03-03",
                address: "供应商3",
                children: [
                    {
                        key: 121,
                        name: "NU0391004",
                        age: "2019-03-04",
                        address: "供应商4"
                    }
                ]
            },
            {
                key: 13,
                name: "NU0391005",
                age: "2019-03-05",
                address: "供应商5",
                children: [
                    {
                        key: 131,
                        name: "NU0391006",
                        age: "2019-03-06",
                        address: "供应商6",
                        children: [
                            {
                                key: 1311,
                                name: "NU0391007",
                                age: "2019-03-07",
                                address: "供应商7"
                            },
                            {
                                key: 1312,
                                name: "NU0391008",
                                age: "2019-03-08",
                                address: "供应商8"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        key: 2,
        name: "NU0391009",
        age: "2019-03-09",
        address: "供应商9"
    }
];
