import React, { Component } from 'react';
import {Tile, Timeline} from 'tinper-bee';
import './index.less';

export default class TimelineDemo extends Component {
    render () {
        return (
            <div className="timeline-demo">
                <Tile className="timeline-demo-tile demo-tile demo-tile-lg">
                    <h3>时间轴</h3>
                    <div className="timeline-demo-row">
                        <Timeline>
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                        </Timeline>
                        {/* <Timeline>
                            <Timeline.Item color="success">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="info">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="danger">Solve initial network problems</Timeline.Item>
                        </Timeline> */}

                    </div>
                </Tile>
                {/* <Tile className="timeline-demo-tile demo-tile">
                    <div className="timeline-demo-row">
                        <Timeline pending={<a href="#">See more</a>}>
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        </Timeline>
                    </div>
                </Tile> */}
            </div>
        )
    }
}