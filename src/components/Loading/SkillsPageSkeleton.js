import React from 'react';
import { Col, Row } from 'antd';
// Name SPSkeleton to prevent conflict with other Skeleton component
import SPSkeleton from 'react-loading-skeleton';

class SkillsPageSkeleton extends React.Component {

  render() {
    return (
      <Row type={'flex'} justify={'center'} style={{margin: '42px 0'}}>
        <Col>
          <h2>
            <SPSkeleton height={31}/>
          </h2>
          <br/>
          <SPSkeleton circle={true} height={450} width={450}/>
        </Col>
      </Row>
    );
  }

}

export default SkillsPageSkeleton;
