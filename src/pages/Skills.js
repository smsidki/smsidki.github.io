/**
 * title: smsidki | Skills
 */

import React from 'react';
import { Row } from 'antd';
import skills from '@/data/skills';
import { formatMessage } from 'umi/locale';
import main from '@/assets/style/main.less';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Radar } from 'ant-design-pro/lib/Charts';

class Skills extends React.Component {

  translateSkillsToLocale = skills => {
    return skills.map(skill => {
      return Object.assign(
        {},
        skill,
        {
          name: formatMessage({ id: 'freq.used'}),
          value: formatMessage({ id: `freq.${skill.value}` })
        }
      );
    });
  };

  render() {
    return (
      <div className={main['content-n-padding-top']}>
        <h2 style={{ textAlign: 'center' }}>
          {formatMessage({ id: 'chart.skills.title'})}
        </h2>
        <Row>
          <Radar
            height={500}
            padding={50}
            hasLegend={false}
            data={this.translateSkillsToLocale(skills)}
          />
        </Row>
      </div>
    );
  }

}

export default Skills;
