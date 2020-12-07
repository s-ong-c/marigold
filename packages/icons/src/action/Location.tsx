import React from 'react';
import { Svg } from '@marigold/components';

export const Location = ({ className = '', ...props }) => (
  <Svg className={className} {...props}>
    <path d="M12 8.72733C10.1918 8.72733 8.72727 10.1919 8.72727 12.0001C8.72727 13.8082 10.1918 15.2728 12 15.2728C13.8082 15.2728 15.2727 13.8082 15.2727 12.0001C15.2727 10.1919 13.8082 8.72733 12 8.72733ZM19.3145 11.1818C18.9382 7.77 16.23 5.06182 12.8182 4.68545V3H11.1818V4.68545C7.77 5.06182 5.06182 7.77 4.68545 11.1818H3V12.8182H4.68545C5.06182 16.23 7.77 18.9382 11.1818 19.3145V21H12.8182V19.3145C16.23 18.9382 18.9382 16.23 19.3145 12.8182H21V11.1818H19.3145ZM12 17.7272C8.83364 17.7272 6.27273 15.1663 6.27273 11.9999C6.27273 8.83358 8.83364 6.27267 12 6.27267C15.1664 6.27267 17.7273 8.83358 17.7273 11.9999C17.7273 15.1663 15.1664 17.7272 12 17.7272Z" />
  </Svg>
);
