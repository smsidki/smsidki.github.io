/**
 * title: smsidki | Skills
 */

import React from 'react';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Radar } from 'ant-design-pro/lib/Charts';

class Skills extends React.Component {

  skills = [
    {
      name: ' ',
      label: 'Apache Struts 2',
      value: 'once upon a time'
    },
    {
      name: ' ',
      label: 'JSP',
      value: 'once upon a time'
    },
    {
      name: ' ',
      label: 'ZKoss',
      value: 'once upon a time'
    },
    {
      name: ' ',
      label: 'Camunda BPMN',
      value: 'seldom'
    },
    {
      name: ' ',
      label: 'Elastic Search',
      value: 'occasionally'
    },
    {
      name: ' ',
      label: 'Quartz Scheduler',
      value: 'often'
    },
    {
      name: ' ',
      label: 'MySQL',
      value: 'daily'
    },
    {
      name: ' ',
      label: 'Thymeleaf',
      value: 'seldom'
    },
    {
      name: ' ',
      label: 'React',
      value: 'often'
    },
    {
      name: ' ',
      label: 'Umi',
      value: 'often'
    },
    {
      name: ' ',
      label: 'SQL Server',
      value: 'seldom'
    },
    {
      name: ' ',
      label: 'Spring Boot',
      value: 'daily'
    }
  ];

  render() {
    return (
        <div>
          <Radar
            height={350}
            hasLegend={false}
            data={this.skills}
          />
        </div>
    );
  }

}

export default Skills;
