import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Table,Tile} from 'tinper-bee';
import './index.less';

const columns = [
    { title: 'name', dataIndex: 'a', key: 'a', width: 100},
    { title: 'sex', dataIndex: 'b', key: 'b', width: 100},
    { title: 'age', dataIndex: 'c', key: 'c', width: 200},
    { title: 'option', dataIndex: 'd', key: 'd', render() {
        return <a href="#">operation</a>;
    },
    },
];

const data1 = [
    { a: 'Jim', b: 'man', c: 41, key: '1' },
    { a: 'David', b: 'man', c: 67, key: '2' },
    { a: 'Lucy', b: 'women', c: 25, key: '3' },
];
const data2=[];
const emptyFunc = () => <span>There is no data here</span>

export default class TableDemo extends Component {
    render () {
        return (
            <div className="table-demo">
                <Tile className="table-demo-tile demo-tile">
                    <Table
                        columns={columns}
                        data={data1}
                        title={currentData => <div>title: this is a title</div>}
                        footer={currentData => <div>footer: this is a footer</div>}
                        emptyText={emptyFunc}
                        />
                </Tile>
                <Tile className="table-demo-tile demo-tile">
                    <Table
                        columns={columns}
                        data={data2}
                        emptyText={emptyFunc}
                        />
                </Tile>
            </div>
        )
    }
}


