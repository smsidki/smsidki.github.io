/**
 * title: smsidki | About
 */

import React from 'react';
import { Col, Row } from 'antd';
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

  biography = [
    {
      icon: programmer,
      name: 'Career Highlights',
      desc: 'I currently work at NexSoft as a software engineer',
      year: '2016'
    },
    {
      icon: graduate,
      name: 'Last Education',
      desc: 'Graduated from ITS Surabaya with an electrical engineer degree',
      year: '2015'
    },
    {
      icon: dota,
      iconBackground: 'black',
      name: 'Dota 2',
      desc: 'Started playing this game, but no longer active currently',
      year: '2014'
    },
    {
      icon: baby,
      name: 'Birthday',
      desc: 'I was born on April 13th in Banda Aceh',
      year: '1992'
    }
  ];

  socialLinks = [
    'https://www.instagram.com/smsidki/',
    'https://github.com/smsidki',
    'https://www.youtube.com/channel/UCJDD972RRbDdTomH_sn-iYg',
    'https://id.linkedin.com/in/smsidki',
    'https://plus.google.com/+smsidki'
  ];

  render() {
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
          {this.socialLinks.map((link, index) => (
            <Col key={index} style={{margin: '0 30px'}}>
              <SocialIcon url={link}/>
            </Col>
          ))}
          <VerticalTimeline layout={'2-columns'}>
            {this.biography.map((bio, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={index === 0 ? formatMessage({ id: 'present' }) : bio.year}
                iconStyle={{ background: bio.iconBackground || '#91d5ff', color: 'white' }}
                icon={<img src={bio.icon} alt={'n/a'} className={'vertical-timeline-element-icon bounce-in'}/>}
              >
                <h3 className="vertical-timeline-element-title">{bio.name}</h3>
                <p>{bio.desc}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Row>
      </div>
    );
  }

}

export default About;
