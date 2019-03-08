/**
 * title: smsidki | Projects
 */

import React from 'react';
import { Tag } from 'antd';
import anz from '@/assets/img/anz.png';
import bca from '@/assets/img/bca.png';
import qlik from '@/assets/img/qlik.png';
import aviva from '@/assets/img/aviva.png';
import conexus from '@/assets/img/conexus.png';
import nexsoft from '@/assets/img/nexsoft.png';
import tlStyle from '@/assets/style/timeline.css';
import asperindo from '@/assets/img/asperindo.png';
import tokiomarine from '@/assets/img/tokiomarine.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-es6';

class Projects extends React.Component {

  projects = [
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexPayment',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Middleware between NexSoft application and payment gateway',
      stacks: ['Spring Boot', 'Web Socket', 'Redis', 'MySQL', 'React'],
      duration: '2019'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexHouse',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'A warehouse management system application for retail industry',
      stacks: ['Spring Boot', 'Redis', 'MySQL', 'Elastic', 'React', 'Umi'],
      duration: '2018 - 2019'
    },
    {
      icon: bca,
      name: 'NexBank - BCA',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Provide and manage mutation data from BCA to NexSoft clients',
      stacks: ['Spring Boot', 'Quartz Scheduler', 'Liquibase', 'MySQL'],
      duration: '2018'
    },
    {
      icon: qlik,
      name: 'NexCloud - Qlik Sense',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Manage and embed Qlik Sense application to NexCloud',
      stacks: ['Spring', 'Java Servlet', 'Hibernate', 'MySQL', 'JSP'],
      duration: '2018'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexData - Master Area',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Library and API endpoint for master data area',
      stacks: ['Spring Boot', 'Batch Job', 'Liquibase', 'MySQL', 'Elastic'],
      duration: '2018'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexMint - Foundation',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Common library to develop REST Api using Spring Boot',
      stacks: ['Spring Boot', 'Security', 'MapStruct', 'MySQL', 'Elastic'],
      duration: '2018'
    },
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      name: 'NexFinance',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      desc: 'Finance application for accounting process (journal)',
      stacks: ['Spring Boot', 'Spring Data JPA', 'MySQL', 'React', 'Redux'],
      duration: '2017 - 2018'
    },
    {
      icon: conexus,
      name: 'Digi-Office',
      company: 'Conexus Solusi',
      desc: 'An information system to manage common office operation',
      stacks: ['Spring Boot', 'Camunda', 'BPMN', 'DMN', 'PostgreSQL'],
      duration: '2017'
    },
    {
      icon: aviva,
      name: 'AstraLife - Satellite',
      company: 'Pactera Jatis Indonesia',
      desc: 'Report and scheduling module for AstraLife application',
      stacks: ['Spring', 'Quartz Scheduler', 'Apache POI', 'Thymeleaf'],
      duration: '2017'
    },
    {
      icon: tokiomarine,
      name: 'Tokio Marine',
      company: 'Pactera Jatis Indonesia',
      desc: 'Migrate existing system from Spring to Apache Struts 2',
      stacks: ['Spring', 'EJB 2', 'Oracle DB', 'Apache Struts 2', 'JSP'],
      duration: '2016 - 2017'
    },
    {
      icon: asperindo,
      name: 'ALIS - Asperindo',
      company: 'Pactera Jatis Indonesia',
      desc: 'Provide interconnection between Asperindo members',
      stacks: ['NPM', 'React', 'React - Redux', 'Babel', 'Webpack'],
      duration: '2016'
    },
    {
      icon: anz,
      name: 'Avantrade - ANZ',
      company: 'Pactera Jatis Indonesia',
      desc: 'Platform for financial institutions’ wealth management needs',
      stacks: ['Spring', 'Hibernate', 'Apache POI', 'SQL Server', 'ZKoss'],
      duration: '2016'
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

