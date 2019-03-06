import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const TimelineIcon = (props) => {

  return (
    <Icon type={props.type} className={'vertical-timeline-element-icon bounce-in'}/>
  );

};

TimelineIcon.propTypes = {
  type: PropTypes.string.isRequired
};

export default TimelineIcon;
