import _ from 'lodash';
import React from 'react';
import Link from 'umi/link';
import { Icon, Menu, Row } from 'antd';
import { formatMessage, getLocale, setLocale } from 'umi/locale';

class BasicLayout extends React.Component {

  state = {
    currentMenu: _.replace(this.props.location.pathname, '/', ''),
  };

  locales = [
    {key: 'en-US', messageId: 'locale.en'},
    {key: 'id-ID', messageId: 'locale.id'}
  ];

  menus = [
    { key: 'about', icon: 'user', messageId: 'about.me' },
    { key: 'experience', icon: 'rise', messageId: 'work.experience' },
    { key: 'projects', icon: 'code', messageId: 'projects' },
    { key: 'skills', icon: 'radar-chart', messageId: 'skills' },
    { key: 'education', icon: 'read', messageId: 'education' },
    { key: 'resume', icon: 'book', messageId: 'resume' }
  ];

  onMenuClick = e => {
    if (_.map(this.locales, 'key').includes(e.key)) {
      setLocale(e.key);
    } else {
      this.setState({ currentMenu: e.key });
    }
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
                <Link to={`/${menu.key}`}>
                  <Icon type={menu.icon}/>
                  {formatMessage({ id: menu.messageId })}
                </Link>
              </Menu.Item>
            ))}
            <Menu.SubMenu
              key={'locale'}
              title={
                <>
                  <Icon type={'global'}/>
                  {formatMessage({ id: 'locale.change' })}
                </>
              }
            >
              {this.locales.map(locale => (
                <Menu.Item key={locale.key}>
                  <Icon type={locale.key === getLocale() ? 'check' : 'n/a'}/>
                  {formatMessage({ id: locale.messageId})}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          </Menu>
        </Row>
        {this.props.children}
      </div>
    );
  }

}

export default BasicLayout;
