import {
  createContext,
  HTMLAttributes,
  MutableRefObject,
  useContext,
} from 'react';
import { FocusStrategy } from '@react-types/shared';

export interface MenuContextProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  ref?: MutableRefObject<HTMLUListElement | undefined>;
  autoFocus?: boolean | FocusStrategy;
  open?: boolean;
  onClose?: () => void;
}

export const MenuContext = createContext<MenuContextProps>({});
export const useMenuContext = () => useContext(MenuContext);
