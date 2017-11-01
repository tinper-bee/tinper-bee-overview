import React, {Component} from 'react';
import {Tile, Transfer} from 'tinper-bee';


import './index.less';

const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}

const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);

export default class TransferDemo extends Component {
    state = {
        targetKeys,
        selectedKeys: [],
    }

    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    }

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    }

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    }

    render() {
        let state = this.state;
        return (
            <div className="transfer-demo">
                <Tile className="transfer-demo-tile">
                    <h3>穿梭框</h3>
                    <div className="transfer-demo-row">
                        <Transfer
                            dataSource={mockData}
                            titles={['Source', 'Target']}
                            targetKeys={state.targetKeys}
                            selectedKeys={state.selectedKeys}
                            onChange={this.handleChange}
                            onSelectChange={this.handleSelectChange}
                            onScroll={this.handleScroll}
                            render={item => item.title}
                        />
                    </div>
                </Tile>
            </div>
        )
    }
}