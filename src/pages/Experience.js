/**
 * title: smsidki | Experience
 */

import React from 'react';
import { Tag } from 'antd';
import { formatMessage } from 'umi/locale';
import main from '@/assets/style/main.less';
import nexsoft from '@/assets/img/nexsoft.png';
import conexus from '@/assets/img/conexus.png';
import pactera from '@/assets/img/pactera.png';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

class Experience extends React.Component {

  experiences = [
    {
      icon: nexsoft,
      iconBackground: '#ef4123',
      company: 'Paramadaksa Teknologi Nusantara (NexSoft)',
      isCurrentCompany: true,
      location: 'Tangerang, Indonesia',
      website: 'http://nexsoft.co.id/',
      role: 'Team Leader, Full Stack Web Engineer',
      stacks: ['Java', 'Spring Boot', 'MySQL', 'Elastic', 'React', 'Git'],
      duration: '2017'
    },
    {
      icon: conexus,
      company: 'Conexus Solusi',
      location: 'Jakarta, Indonesia',
      website: 'https://conexus.co.id/',
      role: 'Software Engineer',
      stacks: ['Java', 'Spring Cloud', 'BPMN', 'PostgreSQL', 'Subversion'],
      duration: '2017'
    },
    {
      icon: pactera,
      iconBackground: '#003a81',
      company: 'Pactera Jatis Indonesia',
      location: 'Jakarta, Indonesia',
      website: 'http://www.jatis.com/index.php/pactera-jatis-indonesia/',
      role: 'Team Leader, Associate Business Technologist',
      stacks: ['Java', 'Spring', 'ZKoss', 'SQL Server', 'Git', 'Subversion'],
      duration: '2016 - 2017'
    }
  ];

  goToCompanySite = (e) => {
    window.open(e.target.alt, '_blank');
  };

  render() {
    return (
      <div className={main['content-background']}>
        <VerticalTimeline layout={'2-columns'}>
          {this.experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={
                exp.isCurrentCompany ?
                `${exp.duration} - ${formatMessage({ id: 'present' })}` :
                exp.duration
              }
              iconOnClick={this.goToCompanySite}
              className="vertical-timeline-element--work"
              iconStyle={{ background: exp.iconBackground || 'white', color: 'white' }}
              icon={<img src={exp.icon} alt={exp.website} className={'vertical-timeline-element-icon bounce-in'}/>}
            >
              <h3 className="vertical-timeline-element-title">{exp.company}</h3>
              <h4>{exp.location}</h4>
              <p>{exp.role}</p>
              <div>
                {`${formatMessage({ id: 'tech.stacks'})}: `}
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
