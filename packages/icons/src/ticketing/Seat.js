import React from 'react';
import { SVG } from '@marigold/system';
export const Seat = ({ className = '', ...props }) =>
  React.createElement(
    SVG,
    { className: className, ...props },
    React.createElement('path', {
      d: 'M4.79297 14.9715H19.207V20.9531H16.5V17.9623H7.50003V20.9531H4.79297V14.9715ZM18.293 9.99963H21V12.9905H18.293V9.99963ZM3 9.99963H5.70701V12.9905H3V9.99963ZM16.5 12.9905H7.50003V5.02783C7.50003 4.48403 7.67577 4.01793 8.02736 3.62951C8.3789 3.24108 8.80076 3.04688 9.29299 3.04688H14.707C15.1992 3.04688 15.6211 3.24108 15.9726 3.62951C16.3242 4.01793 16.5 4.48403 16.5 5.02783V12.9905Z',
    })
  );
//# sourceMappingURL=Seat.js.map