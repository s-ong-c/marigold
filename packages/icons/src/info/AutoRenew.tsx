import React from 'react';
import { SVG } from '../SVG';

export const AutoRenew = ({ className = '', ...props }) => (
  <SVG className={className} {...props}>
    <path d="M12 6.87305C11.0723 6.87305 10.2178 7.10498 9.43652 7.56885C8.65527 8.03272 8.03882 8.65527 7.58716 9.43652C7.1355 10.2178 6.90967 11.0723 6.90967 12C6.90967 12.8545 7.10498 13.6479 7.49561 14.3804L6.25049 15.6255C5.54248 14.5268 5.18848 13.3184 5.18848 12C5.18848 10.7549 5.49365 9.61353 6.104 8.57593C6.71436 7.53832 7.54443 6.71436 8.59424 6.104C9.64405 5.49365 10.7793 5.18848 12 5.18848V2.625L15.4058 6.03076L12 9.43652V6.87305ZM17.7861 8.37451C18.4697 9.47315 18.8115 10.6816 18.8115 12C18.8115 13.2451 18.5064 14.3865 17.896 15.4241C17.2856 16.4617 16.4617 17.2856 15.4241 17.896C14.3865 18.5064 13.2451 18.8115 12 18.8115V21.375L8.59424 17.9692L12 14.5635V17.127C12.9277 17.127 13.7822 16.895 14.5635 16.4312C15.3447 15.9673 15.9673 15.3447 16.4312 14.5635C16.895 13.7822 17.127 12.9277 17.127 12C17.127 11.1699 16.9316 10.3765 16.541 9.61963L17.7861 8.37451Z" />
  </SVG>
);