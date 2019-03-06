import React from 'react';
import { Row } from 'antd';
import { formatMessage } from 'umi/locale';
import progress from '@/assets/svg/progress.svg';

export default () => {
  return (
    <div>
      <br/>
      <br/>
      <Row type={'flex'} justify={'center'} align={'middle'}>
        <img src={progress} alt={formatMessage({ id: 'on.progress' })}/>
      </Row>
      <Row type={'flex'} justify={'center'} align={'middle'}>
        <h2>
          {formatMessage({ id: 'on.progress' })}
        </h2>
      </Row>
    </div>
  );
}
