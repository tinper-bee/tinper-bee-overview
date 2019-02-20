import React, { Component } from 'react';
import {Step,Tile, Row, Col} from 'tinper-bee';
import './index.less';
export default class StephDemo extends Component {
    constructor(props){
        super(props);

    }

    render () {
        return (
            <div className="step-demo">
                <Tile className="step-demo-tile demo-tile" >
                    <h3>步骤条</h3>
                    <div className="step-demo-row" >
                        <Step.Steps current={1}>
                            <Step title="Finished" description="This is a description." />
                            <Step title="In Progress" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Step.Steps>
                    </div>
                </Tile>
            </div>
        )
    }
}
