import React, { Component } from 'react';
import {Pagination, Tile} from 'tinper-bee';
import './index.less';

export default class PaginationDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage1:1,
            activePage2:1
        }
    }
    handleSelect1(eventKey) {
        this.setState({
            activePage1: eventKey
        });
    }
    handleSelect2(eventKey) {
        this.setState({
            activePage2: eventKey
        });
    }
    render() {
        return (
            <div className="pagination-demo">
                <Tile className="pagination-demo-tile demo-tile">
                    <h3>分页</h3>
                    {/* <div className="pagination-demo-row">
                        <Pagination
                            boundaryLinks
                            items={10}
                            activePage={this.state.activePage}
                            onSelect={this.handleSelect1.bind(this)} />
                    </div> */}
                    <div className="pagination-demo-row">
                        <Pagination
                             first
                             last
                             prev
                             next
                             boundaryLinks
                             items={20}
                             maxButtons={5}
                             activePage={this.state.activePage2}
                             onSelect={this.handleSelect2.bind(this)}
                         />
                    </div>
                </Tile>
            </div>
        );
    }
}
