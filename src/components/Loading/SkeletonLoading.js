import React from 'react';
import { List, Menu, Row } from 'antd';
import Skeleton from 'react-skeleton-loader';
import SkillsPageSkeleton from '@/components/Loading/SkillsPageSkeleton';

class SkeletonLoading extends React.Component {

  buildMenuItemSkeleton = (amount) => {
    let i;
    const results = [];
    for (i = 0; i < amount; i++) {
      results.push(
        <Menu.Item key={i} disabled={true}>
          <Skeleton width={'115px'} widthRandomness={0}/>
        </Menu.Item>,
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

  pathsWithCustomSkeleton = ['/skills'];

  pathSkeletonMap = {
    skills: <SkillsPageSkeleton/>
  };

  render() {
    const { pathname } = this.props.location;
    if (this.pathsWithCustomSkeleton.includes(pathname)) {
      return this.pathSkeletonMap['skills'];
    }

    return (
      <div style={{ height: '100%', display: 'grid' }}>
        {/*
        <Row type={'flex'} justify={'center'}>
          <Menu mode={'horizontal'}>
            {this.buildMenuItemSkeleton(6)}
          </Menu>
        </Row>
        */}
        <Row type={'flex'} justify={'center'} style={{ margin: 'auto' }}>
          <List
            split={false}
            dataSource={this.buildListSkeleton(11)}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Row>
      </div>
    );
  }

}

export default SkeletonLoading;
