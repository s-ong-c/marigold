import React from 'react';
import { Svg } from '@marigold/components';

export const SmilieNeutral = ({ className = '', ...props }) => (
  <Svg className={className} {...props}>
    <path d="M12.0083 2.67188C6.84945 2.67188 2.67188 6.85879 2.67188 12.0177C2.67188 17.1765 6.84945 21.3635 12.0083 21.3635C17.1765 21.3635 21.3635 17.1765 21.3635 12.0177C21.3635 6.85879 17.1765 2.67188 12.0083 2.67188ZM12.0177 19.4943C7.88683 19.4943 4.54103 16.1485 4.54103 12.0177C4.54103 7.88683 7.88683 4.54103 12.0177 4.54103C16.1485 4.54103 19.4943 7.88683 19.4943 12.0177C19.4943 16.1485 16.1485 19.4943 12.0177 19.4943ZM8.74664 11.0831C9.52087 11.0831 10.1485 10.4555 10.1485 9.68122C10.1485 8.90699 9.52087 8.27935 8.74664 8.27935C7.97241 8.27935 7.34477 8.90699 7.34477 9.68122C7.34477 10.4555 7.97241 11.0831 8.74664 11.0831ZM9.21393 13.8868V15.2887H14.8214V13.8868H9.21393ZM15.2887 11.0831C16.0629 11.0831 16.6906 10.4555 16.6906 9.68122C16.6906 8.90699 16.0629 8.27935 15.2887 8.27935C14.5145 8.27935 13.8868 8.90699 13.8868 9.68122C13.8868 10.4555 14.5145 11.0831 15.2887 11.0831Z" />
  </Svg>
);
