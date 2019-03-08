import React from 'react';
import TlSkeleton from 'react-loading-skeleton';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

class TimelineSkeleton extends React.Component {

  buildTimelineSkeleton = amount => {
    let i;
    const results = [];
    for (i = 0; i < amount; i++) {
      results.push(
        <VerticalTimelineElement
          key={i}
          className="vertical-timeline-element--work"
          icon={<TlSkeleton circle={true} height={60} width={60} className={'vertical-timeline-element-icon bounce-in'}/>}
        >
          <h3 className="vertical-timeline-element-title"><TlSkeleton/></h3>
          <h4><TlSkeleton/></h4>
          <p><TlSkeleton/></p>
          <div>
            <TlSkeleton/>
          </div>
        </VerticalTimelineElement>,
      );
    }
    return results;
  };

  render() {
    return (
      <div>
        <VerticalTimeline layout={'2-columns'}>
          {this.buildTimelineSkeleton(3)}
        </VerticalTimeline>
      </div>
    );
  }

}

export default TimelineSkeleton;
