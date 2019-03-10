/**
 * title: smsidki | Projects
 */

import React from 'react';
import { Tag } from 'antd';
import projects from '@/data/projects';
import anz from '@/assets/img/anz.png';
import bca from '@/assets/img/bca.png';
import qlik from '@/assets/img/qlik.png';
import aviva from '@/assets/img/aviva.png';
import { formatMessage } from 'umi/locale';
import main from '@/assets/style/main.less';
import conexus from '@/assets/img/conexus.png';
import nexsoft from '@/assets/img/nexsoft.png';
import asperindo from '@/assets/img/asperindo.png';
import tokiomarine from '@/assets/img/tokiomarine.png';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

class Projects extends React.Component {

  icons = { anz, bca, qlik, aviva, conexus, nexsoft, asperindo, tokiomarine };

  render() {
    // noinspection JSUnresolvedVariable
    return (
      <div className={main['content-background']}>
        <VerticalTimeline layout={'2-columns'}>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={project.duration}
              iconStyle={{ background: project.iconBackground || 'white', color: 'white' }}
              icon={<img src={this.icons[project.icon]} alt={'n/a'} className={'vertical-timeline-element-icon bounce-in'}/>}
            >
              <h3 className="vertical-timeline-element-title">{project.name}</h3>
              <h4>{project.company}</h4>
              <p>{project.desc}</p>
              <div>
                {`${formatMessage({ id: 'tech.stacks'})}: `}
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

