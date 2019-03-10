/**
 * title: smsidki | Education
 */

import React from 'react';
import { getLocale } from 'umi/locale';
import mtsn from '@/assets/img/mtsn.png';
import eeits from '@/assets/img/eeits.png';
import educations from '@/data/educations';
import main from '@/assets/style/main.less';
import highschool from '@/assets/img/highschool.jpg';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

class Educations extends React.Component {

  icons = { eeits, highschool, mtsn };

  render() {
    const locale = getLocale();
    // noinspection JSUnresolvedVariable
    return (
      <div className={main['content-background']}>
        <VerticalTimeline layout={'2-columns'}>
          {educations.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={edu.year}
              iconStyle={{ background: edu.iconBackground || 'white', color: 'white' }}
              icon={<img src={this.icons[edu.icon]} alt={'n/a'} className={'vertical-timeline-element-icon bounce-in'}/>}
            >
              <h3 className="vertical-timeline-element-title">
                {edu.level[locale]}
              </h3>
              <p>{edu.institution}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }

}

export default Educations;

