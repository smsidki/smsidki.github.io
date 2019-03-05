import React from 'react';
import router from 'umi/router';
import { Button, Icon } from 'antd';
import { formatMessage } from 'umi/locale';
import { Exception } from 'ant-design-pro';
import error404 from '@/assets/svg/error404.svg';

class Error404 extends React.Component {

  title = (
    <>
      <Icon type={'warning'}/> {'404'}
    </>
  );

  backToHome = () => {
    router.push('/');
  };

  actions = (
    <>
      <Button
        icon={'home'}
        size={'large'}
        htmlType={'button'}
        onClick={this.backToHome}
      >
        {formatMessage({ id: 'back.to.home' })}
      </Button>
    </>
  );

  render() {
    return (
      <Exception
        type={'404'}
        img={error404}
        title={this.title}
        actions={this.actions}
        desc={formatMessage({ id: 'error.404.desc' })}
      />
    );
  }

}

export default Error404;
