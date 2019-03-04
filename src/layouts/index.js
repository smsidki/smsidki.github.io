import React from 'react';
import Link from 'umi/link';
import { Icon, Menu, Row } from 'antd';
import { formatMessage } from 'umi/locale';

class BasicLayout extends React.Component {

  state = {
    currentMenu: 'about',
  };

  menus = [
    { key: 'about', icon: 'user', messageId: 'about.me' },
    { key: 'experience', icon: 'rise', messageId: 'work.experience' },
    { key: 'projects', icon: 'code', messageId: 'projects' },
    { key: 'skills', icon: 'radar-chart', messageId: 'skills' },
    { key: 'education', icon: 'read', messageId: 'education' },
    { key: 'resume', icon: 'book', messageId: 'resume' },
  ];

  onMenuClick = e => {
    this.setState({ currentMenu: e.key });
  };

  render() {
    return (
      <div>
        <Row type={'flex'} justify={'center'}>
          <Menu
            mode={'horizontal'}
            onClick={this.onMenuClick}
            selectedKeys={[this.state.currentMenu]}
          >
            {this.menus.map(menu => (
              <Menu.Item key={menu.key}>
                <Link to={`/ + ${menu.key}`}>
                  <Icon type={menu.icon}/>
                  {formatMessage({ id: menu.messageId })}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Row>
        {this.props.children}
      </div>
    );
  }

}

export default BasicLayout;
