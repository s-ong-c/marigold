import React, { forwardRef } from 'react';
import { SVG, SVGProps } from '@marigold/system';

export const Picture = forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG {...props} viewBox="0 0 24 24" ref={ref}>
    <path d="M20.4375 18.5625V5.4375C20.4375 4.40625 19.5938 3.5625 18.5625 3.5625H5.4375C4.40625 3.5625 3.5625 4.40625 3.5625 5.4375V18.5625C3.5625 19.5938 4.40625 20.4375 5.4375 20.4375H18.5625C19.5938 20.4375 20.4375 19.5938 20.4375 18.5625ZM8.71875 13.4062L11.0625 16.2281L14.3438 12L18.5625 17.625H5.4375L8.71875 13.4062Z" />
  </SVG>
));
