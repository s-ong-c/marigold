import React from 'react';
import { SVG } from '../SVG';

export const Scanner = ({ className = '', ...props }) => (
  <SVG className={className} {...props}>
    <path d="M15.6816 4.59108L19.3837 8.29311L18.8391 8.83774L15.137 5.13571L15.6816 4.59108ZM19.2444 4.73039C19.4386 4.92466 19.4386 5.23965 19.2444 5.43392C19.0501 5.62819 18.7352 5.62819 18.5409 5.43392C18.3466 5.23965 18.3466 4.92466 18.5409 4.73039C18.7352 4.53613 19.0501 4.53613 19.2444 4.73039ZM17.6827 10.0012L13.9807 6.29918L14.5253 5.75455L18.2273 9.45657L17.6827 10.0012ZM13.6933 13.9907L9.99124 10.2886L12.3453 7.93456L16.0473 11.6366L13.6933 13.9907ZM8.52286 11.2407L12.7341 15.452C13.1201 15.838 13.7518 15.838 14.1378 15.452L22.5603 7.02948C22.9464 6.64346 22.9464 6.01176 22.5603 5.62574L18.3491 1.41452C17.963 1.02849 17.3314 1.02849 16.9453 1.41452L8.52286 9.83696C8.13684 10.223 8.13684 10.8547 8.52286 11.2407ZM4.31163 19.6632C6.44531 21.7968 9.23876 22.8637 12.0322 22.8637V20.8844C9.75115 20.8774 7.46303 20.0071 5.71537 18.2594C3.96771 16.5118 3.09736 14.2236 3.10438 11.9426H1.12514C1.1111 14.736 2.17794 17.5295 4.31163 19.6632ZM12.0322 16.9119V18.8912C10.2495 18.8912 8.47372 18.2104 7.11911 16.8557C5.76449 15.5011 5.08367 13.7254 5.08367 11.9426H7.06291C7.06998 13.213 7.55425 14.4834 8.52285 15.452C9.49144 16.4206 10.7618 16.9049 12.0322 16.9119Z" />
  </SVG>
);