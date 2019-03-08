import React from 'react';
import { Col, Row } from 'antd';
// Name Skeleton2 to prevent conflict with other Skeleton component
import Skeleton2 from 'react-loading-skeleton';

class SkillsPageSkeleton extends React.Component {

  render() {
    return (
      <Row type={'flex'} justify={'center'} style={{margin: '42px 0'}}>
        <Col>
          <h2>
            <Skeleton2 height={31}/>
          </h2>
          <br/>
          <Skeleton2 circle={true} height={450} width={450}/>
        </Col>
      </Row>
    );
  }

}

export default SkillsPageSkeleton;
