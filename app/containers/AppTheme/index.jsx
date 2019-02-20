import React, { Component } from 'react';
import { Con, Row, Col, BackTop } from 'tinper-bee';
//import 'tinper-bee/assets/tinper-bee.css';
import Modal from 'bee-modal';

console.log(Con);
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
    //DateDemo,
    //DndDemo,
    //TimeDemo,
    LoadingStateDemo,
    PopoverDemo,
    CarouselDemo,
    // SelectDemo,
    RadioDemo,
    SwitchDemo
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
                <LoadingStateDemo />
                <ModalDemo />
                <PopconfirmDemo />
                <MessageDemo />
                <DropdownDemo />
                <RadioDemo />
                <CheckboxDemo />
                <SwitchDemo />
                <BadgeDemo />
                <RateDemo />
                <BreadCrumbDemo />
                <PaginationDemo />
                <TooltipDemo />
                <PopoverDemo />
                <StepDemo />
                <SliderDemo />
                <TabDemo />
                <CascaderDemo />
                <AutocompleteDemo />
                <ProgressBarDemo />
                <IconDemo />
                <BackTopDemo />
                <InputNumberDemo />
                <ClipboardDemo />
                <AlertDemo />
                <TimelineDemo />
                {/* <LayoutDemo /> */}
                {/*<CalendarDemo />*/}
                <TransferDemo />
                <TableDemo />
                {/* <NotificationDemo /> */}
                <PanelDemo />
                {/* <FormDemo /> */}
                <UploadDemo />
                {/*<DateDemo />*/}
                {/*<DndDemo />*/}
                {/*<TimeDemo />*/}
                {/*<LocaleDemo />*/}
                <Menus />
                <LoadingDemo />
                {/* <CarouselDemo /> */}
                {/* <SelectDemo /> */}
            </Col>
        </Row>
        <BackTop/>
    </div>
    );
  }
}

export default App;
