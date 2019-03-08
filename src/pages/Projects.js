/**
 * title: smsidki | Projects
 */

import React from 'react';
import { Tag } from 'antd';
import nexsoft from '@/assets/img/nexsoft.png';
import conexus from '@/assets/img/conexus.png';
import pactera from '@/assets/img/pactera.png';
import tlStyle from '@/assets/style/timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-es6';

class Projects extends React.Component {

  projects = [
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexPayment',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Middleware to process payment between NexSoft clients and payment gateway',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017 - present'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexHouse',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'A warehouse management system application for retail industry',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017 - present'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexBank - BCA',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Provide and manage mutation data from BCA to NexSoft clients',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017 - present'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexCloud - Qlik Sense',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Manage and embed Qlik Sense application to NexCloud',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017 - present'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexData - Master Area',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Library and API endpoint for master data area (country, district, etc)',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017 - present'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexMint - Foundation',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Library (java) that provide common functionality to develop REST Api using Spring Boot',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017 - present'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexFinance',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Finance application for accounting process (journal)',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017 - present'
    },
    {
      icon: conexus,
      name: 'Digi-Office',
      company: 'Conexus Solusi',
      desc: 'Office information system that provide common module in office operation',
      stacks: ['Java', 'Spring Cloud', 'BPMN', 'PostgreSQL', 'Subversion'],
      duration: '2017'
    },
    {
      icon: pactera,
      iconBackground: '#003a81',
      company: 'Pactera Jatis Indonesia',
      name: 'Jakarta, Indonesia',
      desc: 'Team Leader, Associate Business Technologist',
      stacks: ['Java', 'Spring', 'ZKoss', 'SQL Server', 'Subversion'],
      duration: '2016 - 2017'
    }
  ];

  render() {
    return (
      <div className={tlStyle.main}>
        <VerticalTimeline layout={'2-columns'}>
          {this.projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={project.duration}
              iconStyle={{ background: project.iconBackground || 'white', color: 'white' }}
              icon={<img src={project.icon} alt={'n/a'} className={'vertical-timeline-element-icon bounce-in'}/>}
            >
              <h3 className="vertical-timeline-element-title">{project.name}</h3>
              <h4>{project.company}</h4>
              <p>{project.desc}</p>
              <div>
                {'Tech Stacks: '}
                {project.stacks.map((stack, index) => (
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

