/**
 * title: smsidki | Experience
 */

import React from 'react';
import { Tag } from 'antd';
import nexsoft from '@/assets/img/nexsoft.png';
import conexus from '@/assets/img/conexus.png';
import pactera from '@/assets/img/pactera.png';
import tlStyle from '@/assets/style/timeline.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

class Experience extends React.Component {

  experiences = [
    {
      icon: nexsoft,
      iconBackground: '#ecb4a7',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      location: 'Tangerang, Indonesia',
      role: 'Team Leader, Full Stack Web Engineer',
      stacks: ['Java', 'Spring Boot', 'React', 'Umi'],
      duration: '2018 - present'
    },
    {
      icon: conexus,
      company: 'Conexus Solusi',
      location: 'Jakarta, Indonesia',
      role: 'Team Leader, Software Engineer',
      stacks: ['Java', 'Spring Boot', 'BPMN', 'Micro Service'],
      duration: '2018'
    },
    {
      icon: pactera,
      iconBackground: '#003a81',
      company: 'Pactera Jatis Indonesia',
      location: 'Jakarta, Indonesia',
      role: 'Associate Business Technologist, Technical Leader',
      stacks: ['Java', 'Spring', 'Struts', 'React', 'SQL Server'],
      duration: '2016 - 2018'
    }
  ];

  render() {
    return (
      <div className={tlStyle.main}>
        <VerticalTimeline layout={'2-columns'}>
          {this.experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={exp.duration}
              iconStyle={{ background: exp.iconBackground || 'white', color: 'white' }}
              icon={<img src={exp.icon} alt={'n/a'} className={'vertical-timeline-element-icon bounce-in'}/>}
            >
              <h3 className="vertical-timeline-element-title">{exp.company}</h3>
              <h4>{exp.location}</h4>
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

export default Experience;
