/**
 * title: smsidki | Projects
 */

import React from 'react';
import { Avatar, Col, List, Row } from 'antd';
import avantrade from '@/assets/img/avantrade.png';

class Projects extends React.Component {

  data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  render() {
    return (
      <div>
        <br/>
        <Row type={'flex'} justify={'space-around'} align={'top'}>
          <Col span={10}>
            <List
              itemLayout={'horizontal'}
              dataSource={this.data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={avantrade}
                        shape={'square'}
                        style={{ backgroundColor: '#e3e3e3' }}
                      />
                    }
                    title={<a href='https://ant.design'>{item.title}</a>}
                    description={'Ant Design, a design language for background applications, is refined by Ant UED'}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={10}>
            <List
              itemLayout={'horizontal'}
              dataSource={this.data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={avantrade}
                        shape={'square'}
                        style={{ backgroundColor: '#e3e3e3' }}
                      />
                    }
                    title={<a href='https://ant.design'>{item.title}</a>}
                    description={
                      <div>
                        <p>{'Ant Design, a design language for background applications, is refined by Ant UED'}</p>
                        <p>{'Ant Design, a design language for background applications, is refined by Ant UED'}</p>
                        <p>{'Ant Design, a design language for background applications, is refined by Ant UED'}</p>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }

}

export default Projects;

