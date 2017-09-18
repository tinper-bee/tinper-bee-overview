import React, { Component } from 'react';
import { Con, Row, Col } from 'tinper-bee';

import {
    Header,
    Menus,
    ButtonDemo,
    BadgeDemo,
    ProgressBarDemo,
    LayoutDemo,
    LoadingStateDemo,
    TimelineDemo,
    CalendarDemo,
    TableDemo,
    TreeDemo,
    BreadCrumbDemo,
    CheckboxDemo,
    ModalDemo,
    NotificationDemo,
    PaginationDemo,
    MessageDemo,
    TooltipDemo,
    PanelDemo,
    TabDemo
} from '../../components';

import './index.less';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <Header />
        <Row>
            <Col sm={12}>
                <ButtonDemo />
                <BadgeDemo />
                <ProgressBarDemo />
                <TimelineDemo />
                <LayoutDemo />
                <CalendarDemo />
                <TableDemo />
                <TreeDemo />
                <BreadCrumbDemo />
                <CheckboxDemo />
                <LoadingStateDemo />
                <ModalDemo />
                <NotificationDemo />
                <PaginationDemo />
                <MessageDemo />
                <TooltipDemo />
                <PanelDemo />
                <TabDemo />
            </Col>
        </Row>
    </div>
    );
  }
}

export default App;
