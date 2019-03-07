/**
 * title: smsidki | Projects
 */

import React from 'react';
import { Avatar, Col, List, Row, Tag } from 'antd';
import avantrade from '@/assets/img/avantrade.png';
import tlStyle from '@/assets/style/timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-es6';
import nexsoft from '@/assets/img/nexsoft.png';
import conexus from '@/assets/img/conexus.png';
import pactera from '@/assets/img/pactera.png';

class Projects extends React.Component {

  projects = [
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      name: 'NexPayment',
      role: 'Team Leader, Full Stack Web Engineer',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017 - present'
    },
    {
      icon: conexus,
      company: 'Conexus Solusi',
      name: 'Jakarta, Indonesia',
      role: 'Software Engineer',
      stacks: ['Java', 'Spring Cloud', 'BPMN', 'PostgreSQL', 'Subversion'],
      duration: '2017'
    },
    {
      icon: pactera,
      iconBackground: '#003a81',
      company: 'Pactera Jatis Indonesia',
      name: 'Jakarta, Indonesia',
      role: 'Team Leader, Associate Business Technologist',
      stacks: ['Java', 'Spring', 'ZKoss', 'SQL Server', 'Subversion'],
      duration: '2016 - 2017'
    }
  ];

  render() {
    return (
      <div className={tlStyle.main}>
        <VerticalTimeline layout={'2-columns'}>
          {this.projects.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={exp.duration}
              iconStyle={{ background: exp.iconBackground || 'white', color: 'white' }}
              icon={<img src={exp.icon} alt={'n/a'} className={'vertical-timeline-element-icon bounce-in'}/>}
            >
              <h3 className="vertical-timeline-element-title">{exp.name}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.role}</p>
              <div>
                {'Tech Stacks: '}
                {exp.stacks.map((stack, index) => (
                  <Tag key={index} color={'blue'}>{stack}</Tag>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }

}

export default Projects;

