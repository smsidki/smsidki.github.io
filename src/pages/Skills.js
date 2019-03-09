/**
 * title: smsidki | Skills
 */

import React from 'react';
import { Row } from 'antd';
import { formatMessage } from 'umi/locale';
import main from '@/assets/style/main.less';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Radar } from 'ant-design-pro/lib/Charts';

class Skills extends React.Component {

  skills = [
    {
      label: 'Apache Struts 2',
      value: 'rarely',
    },
    {
      label: 'JSP',
      value: 'rarely',
    },
    {
      label: 'ZKoss',
      value: 'rarely',
    },
    {
      label: 'Thymeleaf',
      value: 'seldom',
    },
    {
      label: 'React - Redux',
      value: 'sometimes',
    },
    {
      label: 'Umi JS',
      value: 'often',
    },
    {
      label: 'React JS',
      value: 'often',
    },
    {
      label: 'Camunda BPMN',
      value: 'seldom',
    },
    {
      label: 'Elastic Search',
      value: 'sometimes',
    },
    {
      label: 'Liquibase',
      value: 'often',
    },
    {
      label: 'SQL',
      value: 'daily',
    },
    {
      label: 'Quartz Scheduler',
      value: 'often',
    },
    {
      label: 'Spring Boot',
      value: 'daily',
    },
  ];

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
            data={this.translateSkillsToLocale(this.skills)}
          />
        </Row>
      </div>
    );
  }

}

export default Skills;
