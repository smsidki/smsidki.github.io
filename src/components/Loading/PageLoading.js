import React from 'react';
import { List, Menu, Row } from 'antd';
import Skeleton from 'react-skeleton-loader';

class PageLoading extends React.Component {

  buildMenuItemSkeleton = (amount) => {
    let i;
    const results = [];
    for (i = 0; i < amount; i++) {
      results.push(
        <Menu.Item key={i} disabled={true}>
          <Skeleton width={'115px'} widthRandomness={0}/>
        </Menu.Item>
      );
    }
    return results;
  };

  buildListSkeleton = (amount) => {
    let i;
    const results = [];
    for (i = 0; i < amount; i++) {
      results.push(<Skeleton width={'1280px'}/>);
    }
    return results;
  };

  render() {
    return (
      <>
        <Row type={'flex'} justify={'center'}>
          <Menu mode={'horizontal'}>
            {this.buildMenuItemSkeleton(6)}
          </Menu>
        </Row>
        <br/>
        <br/>
        <Row type={'flex'} justify={'center'}>
          <List
            split={false}
            dataSource={this.buildListSkeleton(11)}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Row>
      </>
    );
  }

}

export default PageLoading;
