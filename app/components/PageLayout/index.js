import React, { Component } from 'react';
import {PageLayout, Tile} from 'tinper-bee';
import './index.less';

const Header = PageLayout.Header;
const SearchArea = PageLayout.SearchArea;
const Content = PageLayout.Content;
const TableContent = PageLayout.TableContent;
const LeftContent = PageLayout.LeftContent;
const RightContent = PageLayout.RightContent;

export default class PageLayoutDemo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pagelayout-demo">
                <Tile className="pagelayout-demo-tile demo-tile">
                    <h3>页面布局</h3>
                    <div className="pagelayout-demo-row">
                        <PageLayout>
                            <Header>
                                我是Header区域
                            </Header>
                            <Content>
                                <LeftContent>
                                    我是树区域
                                </LeftContent>
                                <RightContent>
                                    <SearchArea>
                                        我是查询区域
                                    </SearchArea>
                                    <TableContent>
                                        我是表格区域
                                    </TableContent>
                                </RightContent>
                            </Content>
                        </PageLayout>
                    </div>
                </Tile>
            </div>
        );
    }
}
