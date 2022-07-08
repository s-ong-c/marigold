import React from 'react';
import { SVG } from '@marigold/system';
export const Search = ({ className = '', ...props }) =>
  React.createElement(
    SVG,
    { className: className, ...props },
    React.createElement('path', {
      d: 'M16.1865 14.5142H15.3057L14.9936 14.2131C16.0862 12.9421 16.744 11.292 16.744 9.497C16.744 5.49443 13.4996 2.25 9.497 2.25C5.49443 2.25 2.25 5.49443 2.25 9.497C2.25 13.4996 5.49443 16.744 9.497 16.744C11.292 16.744 12.9421 16.0862 14.2131 14.9936L14.5142 15.3057V16.1865L20.0888 21.75L21.75 20.0888L16.1865 14.5142ZM9.49701 14.5142C6.72085 14.5142 4.47986 12.2732 4.47986 9.49701C4.47986 6.72085 6.72085 4.47986 9.49701 4.47986C12.2732 4.47986 14.5142 6.72085 14.5142 9.49701C14.5142 12.2732 12.2732 14.5142 9.49701 14.5142Z',
    })
  );
//# sourceMappingURL=Search.js.map