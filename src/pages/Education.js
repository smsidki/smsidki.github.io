/**
 * title: smsidki | Education
 */

import React from 'react';
import mtsn from '@/assets/img/mtsn.png';
import eeits from '@/assets/img/eeits.png';
import { formatMessage } from 'umi/locale';
import main from '@/assets/style/main.less';
import highschool from '@/assets/img/highschool.jpg';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

class Education extends React.Component {

  educations = [
    {
      icon: eeits,
      level: 'University',
      institution: 'Institut Teknologi Sepuluh Nopember, Electrical Engineering',
      year: '2010 - 2015',
    },
    {
      icon: highschool,
      level: 'High School',
      institution: 'SMAN Unggul Aceh Selatan, IPA',
      year: '2007 - 2010',
    },
    {
      icon: mtsn,
      level: 'Middle School',
      institution: 'MTs Negeri Samadua',
      year: '2004 - 2007',
    },
  ];

  render() {
    return (
      <div className={main['content-background']}>
        <VerticalTimeline layout={'2-columns'}>
          {this.educations.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={edu.year}
              iconStyle={{ background: edu.iconBackground || 'white', color: 'white' }}
              icon={<img src={edu.icon} alt={'n/a'} className={'vertical-timeline-element-icon bounce-in'}/>}
            >
              <h3 className="vertical-timeline-element-title">{edu.level}</h3>
              <p>{edu.institution}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }

}

export default Education;

