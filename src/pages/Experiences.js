/**
 * title: smsidki | Experience
 */

import React from 'react';
import { Tag } from 'antd';
import { formatMessage } from 'umi/locale';
import main from '@/assets/style/main.less';
import experiences from '@/data/experiences';
import nexsoft from '@/assets/img/nexsoft.png';
import conexus from '@/assets/img/conexus.png';
import pactera from '@/assets/img/pactera.png';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

class Experiences extends React.Component {

  icons = {nexsoft, conexus, pactera};

  goToCompanySite = (e) => {
    window.open(e.target.alt, '_blank');
  };

  render() {
    // noinspection JSUnresolvedVariable
    return (
      <div className={main['content-background']}>
        <VerticalTimeline layout={'2-columns'}>
          {experiences.map((exp, index) => (
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
              icon={
                <img
                  src={this.icons[exp.icon]}
                  alt={exp.website}
                  className={'vertical-timeline-element-icon bounce-in'}
                />
              }
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

export default Experiences;
