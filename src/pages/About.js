/**
 * title: smsidki | About
 */

import React from 'react';
import { Col, Row } from 'antd';
import profile from '@/data/profile';
import { getLocale } from 'umi/locale';
import baby from '@/assets/img/baby.png';
import dota from '@/assets/img/dota.png';
import { formatMessage } from 'umi/locale';
import main from '@/assets/style/main.less';
import { SocialIcon } from 'react-social-icons';
import graduate from '@/assets/img/graduate.png';
import programmer from '@/assets/img/programmer.png';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

class About extends React.Component {

  icons = {baby, dota, graduate, programmer};

  render() {
    const locale = getLocale();
    return (
      <div className={main['content-n-padding-top']}>
        <Row type={'flex'} justify={'center'}>
          <Col>
            <h3>
              {`“Don't try hard to explain, but try hard to prove it.”`}
            </h3>
            <span>
              {'― Abhiyanda B'}
            </span>
          </Col>
        </Row>
        <br/>
        <Row type={'flex'} justify={'center'}>
          {profile.socialLinks.map((link, index) => (
            <Col key={index} style={{margin: '0 30px'}}>
              <SocialIcon url={link}/>
            </Col>
          ))}
          <VerticalTimeline layout={'2-columns'}>
            {profile.biography.map((bio, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={index === 0 ? formatMessage({ id: 'present' }) : bio.year}
                iconStyle={{ background: bio.iconBackground || '#91d5ff', color: 'white' }}
                icon={<img src={this.icons[bio.icon]} alt={'n/a'} className={'vertical-timeline-element-icon bounce-in'}/>}
              >
                <h3 className="vertical-timeline-element-title">{bio.name[locale]}</h3>
                <p>{bio.desc[locale]}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Row>
      </div>
    );
  }

}

export default About;
