import React, { Component } from 'react';
import { Con, Row, Col, BackTop,Modal } from 'tinper-bee';

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
    TimeDemo,
    LoadingStateDemo,
    PopoverDemo,
    CarouselDemo,
    // SelectDemo,
    RadioDemo,
    SwitchDemo,
    InputGroupDemo,
    TagDemo,
    ColorPickerDemo,
    SearchPanelDemo,
    AnchorDemo,
    TreeSelectDemo,
    PageLayoutDemo,
    SvgIconDemo
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
                <TagDemo/>
                <SvgIconDemo />
                <LoadingStateDemo />
                <ModalDemo />
                <PopconfirmDemo />
                <MessageDemo />
                <DropdownDemo />
                {/* <RadioDemo />
                <CheckboxDemo />
                <SwitchDemo />
                <BadgeDemo /> */}
                {/* <RateDemo /> */}
                <BreadCrumbDemo />
                <TooltipDemo />
                <PopoverDemo />
                <StepDemo />
                <SliderDemo />
                <TabDemo />
                <CascaderDemo />
                <AutocompleteDemo />
                <TimeDemo />
                <InputNumberDemo />
                <ColorPickerDemo/>
                <InputGroupDemo />
                <PaginationDemo />
                <ProgressBarDemo />
                {/* <IconDemo /> */}
                {/* <BackTopDemo /> */}
                {/* <ClipboardDemo /> */}
                {/* <AlertDemo /> */}
                <TimelineDemo />
                <TreeDemo />
                <TreeSelectDemo/>
                <FormDemo />
                {/* <LayoutDemo /> */}
                <TransferDemo />
                <TableDemo />
                {/* <NotificationDemo /> */}
                <UploadDemo />
                {/* <PanelDemo /> */}
                {/*<DateDemo />*/}
                {/*<DndDemo />*/}
                {/*<LocaleDemo />*/}
                <Menus /> 
                <CalendarDemo />
                <SearchPanelDemo/>
                <PageLayoutDemo/>
                <AnchorDemo/>
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
