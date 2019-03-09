import React from 'react';
import ReactToPrint from 'react-to-print';
import main from '@/assets/style/main.less'
import { Button, Row } from 'antd';

class Resume extends React.Component {

  render() {
    // noinspection RequiredAttributes
    return (
      <div className={main['content-n-padding-v']}>
        <ReactToPrint
          trigger={() => {
            // noinspection RequiredAttributes
            return (
              <Row type={'flex'} justify={'center'}>
                <Button>Print this out!</Button>
              </Row>
            );
          }}
          content={() => this.component}
        />
        <br/>
        <Row type={'flex'} justify={'center'} ref={element => (this.component = element)}>
          {'todo'}
        </Row>
      </div>
    );
  }

}

export default Resume;
