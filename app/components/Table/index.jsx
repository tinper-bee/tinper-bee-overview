import React, { Component } from 'react';
import {Table,Tile, Checkbox} from 'tinper-bee';
import multiSelect from "tinper-bee/lib/multiSelect.js";
import sum from "tinper-bee/lib/sum.js"
import './index.less';

const columns = [
    { title: 'name', dataIndex: 'a', key: 'a', width: 100},
    { title: 'sex', dataIndex: 'b', key: 'b', width: 100},
    { title: 'age', dataIndex: 'c', key: 'c', width: 200, sumCol: true},
    { title: 'option', dataIndex: 'd', key: 'd', fixed: 'right', render() {
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
    render () {
        return (
            <div className="table-demo">
                <Tile className="table-demo-tile demo-tile demo-tile-lg">
                    <MultiSelectTable
                        columns={columns}
                        data={data1}
                        showRowNum={true}
                        height={40}
                        bodyDisplayInRow={false}
                        scroll={{y:150}}
                        />
                </Tile>
            </div>
        )
    }
}


