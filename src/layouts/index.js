import React from 'react';
import layout from '@/assets/style/layout.css';
import TopMenu from '@/components/Layout/TopMenu';

export default (props) => (
  <div className={layout.global}>
    <TopMenu {...props}>{props.children}</TopMenu>
  </div>
);
