import React, { Component } from 'react';
import { Con, Row, Col, BackTop } from 'tinper-bee';
import 'tinper-bee/assets/tinper-bee.css';
import Modal from 'bee-modal';

import {
    Header,
    Menus,
    ButtonDemo,
    BadgeDemo,
    ProgressBarDemo,
    LayoutDemo,
    LoadingDemo,
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
    TabDemo,
    StepDemo,
    FormDemo,
    RateDemo,
    IconDemo,
    InputNumberDemo,
    PopconfirmDemo,
    AlertDemo,
    BackTopDemo,
    CascaderDemo,
    DropdownDemo,
    ClipboardDemo,
    TransferDemo,
    UploadDemo,
    AutocompleteDemo,
    SliderDemo,
    DateDemo,
    DndDemo,
    TimeDemo,
    LoadingStateDemo,
    PopoverDemo,
    LocaleDemo,
    CarouselDemo,
} from '../../components';

import './index.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: true
    }
  }
    close = () => {
      this.setState({
          show: false
      })
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
                <LoadingDemo />
                <ModalDemo />
                <NotificationDemo />
                <PaginationDemo />
                <MessageDemo />
                <TooltipDemo />
                <PanelDemo />
                <TabDemo />
                <StepDemo />
                <FormDemo />
                <RateDemo />
                <IconDemo />
                <InputNumberDemo />
                <PopconfirmDemo />
                <AlertDemo />
                <BackTopDemo />
                <CascaderDemo />
                <DropdownDemo />
                <ClipboardDemo />
                <TransferDemo />
                <UploadDemo />
                <AutocompleteDemo />
                <SliderDemo />
                <DateDemo />
                <DndDemo />
                <TimeDemo />
                <LoadingStateDemo />
                <PopoverDemo />
                <LocaleDemo />
                <Menus />
                <CarouselDemo />
            </Col>
        </Row>
        <BackTop/>
    </div>
    );
  }
}

export default App;
