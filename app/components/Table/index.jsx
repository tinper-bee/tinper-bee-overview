import React, { Component } from 'react';
import { Table, Tile, Checkbox } from 'tinper-bee';
import multiSelect from "tinper-bee/lib/multiSelect.js";
import sum from "tinper-bee/lib/sum.js"
import './index.less';

const columns = [
    { title: 'name', dataIndex: 'a', key: 'a', width: 100 },
    { title: 'sex', dataIndex: 'b', key: 'b', width: 100 },
    { title: 'age', dataIndex: 'c', key: 'c', width: 200, sumCol: true },
    {
        title: 'option', dataIndex: 'd', key: 'd', fixed: 'right', render () {
            return <a href="#">operation</a>;
        },
    },
];

const data1 = [
    { a: 'Jim', b: 'man', c: 41, key: '1' },
    { a: 'DavidDavidDavidDavidDavidDavidDavidDavidDavidDavidDavidDavid', b: 'man', c: 67, key: '2' },
    { a: 'Lucy', b: 'women', c: 25, key: '3' },
    { a: 'Jim', b: 'man', c: 41, key: '4' },
    { a: 'David', b: 'man', c: 67, key: '5' },
    { a: 'Lucy', b: 'women', c: 25, key: '6' },
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
                    <h3>多选表格</h3>
                    <MultiSelectTable
                        columns={columns}
                        data={data1}
                        showRowNum={true}
                        height={40}
                        bodyDisplayInRow={false}
                        scroll={{ y: 150 }}
                    />
                    <h3>树形表</h3>
                    <Table
                        columns={treeColumns}
                        data={treeData}
                        onRowHover={this.onRowHover}
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
