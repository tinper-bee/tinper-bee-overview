import React, { Component } from 'react';
import { Con, Row, Col } from 'tinper-bee';

import { Header, Menus, ButtonDemo, BadgeDemo, ProgressBarDemo } from '../../components';


import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <Header />
        <Row>
            <Col sm={3}>
                <Menus />
            </Col>
            <Col sm={9}>
                <ButtonDemo />
                <BadgeDemo />
                <ProgressBarDemo />
            </Col>
        </Row>
    </div>

    );
  }
}

export default App;
