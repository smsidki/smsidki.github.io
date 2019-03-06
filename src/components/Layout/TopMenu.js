import _ from 'lodash';
import React from 'react';
import Link from 'umi/link';
import { Col, Icon, Menu, Row } from 'antd';
import windowSize from 'react-window-size';
import { formatMessage, getLocale, setLocale } from 'umi/locale';

class TopMenu extends React.Component {

  state = {
    currentMenu: _.replace(this.props.location.pathname, '/', ''),
  };

  locales = [
    { key: 'en-US', messageId: 'locale.en' },
    { key: 'id-ID', messageId: 'locale.id' },
  ];

  menus = [
    { key: 'about', icon: 'user', messageId: 'about.me' },
    { key: 'experience', icon: 'rise', messageId: 'work.experience' },
    { key: 'projects', icon: 'code', messageId: 'projects' },
    { key: 'skills', icon: 'radar-chart', messageId: 'skills' },
    { key: 'education', icon: 'read', messageId: 'education' },
  ];

  buildMenu = () => (
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
      <Menu.Item key={'resume'}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://drive.google.com/file/d/0B_5PrdOsPnCARWx5VUJnWjZZLUk/view'>
          <Icon type={'book'}/>
          {formatMessage({ id: 'resume' })}
        </a>
      </Menu.Item>
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
            {formatMessage({ id: locale.messageId })}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );

  onMenuClick = e => {
    if (_.map(this.locales, 'key').includes(e.key)) {
      setLocale(e.key);
    } else if ('resume' !== e.key) {
      this.setState({ currentMenu: e.key });
    }
  };

  render() {
    // noinspection RequiredAttributes
    const { windowWidth } = this.props;
    const isSmallScreen = windowWidth <= 870;
    return (
      <div>
        <Row type={'flex'} justify={isSmallScreen ? 'start' : 'center'}>
          {isSmallScreen ? (<Col span={24}>{this.buildMenu()}</Col>) : this.buildMenu()}
        </Row>
        {this.props.children}
      </div>
    );
  }

}

export default windowSize(TopMenu);
