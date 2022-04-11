import { StyleObject } from '../../types';

const pseudos = {
  '&:hover': '&:hover, &[data-hover]',
  '&:focus': '&:focus, &[data-focus]',
  '&:active': '&:active, &[data-active]',
  '&:disabled': '&[disabled], &[aria-disabled=true], &[data-disabled]',
  '&:read-only': '&[readonly], &[aria-readonly=true], &[data-readonly]',
  '&:checked': '&[aria-checked=true], &[data-checked]',
  '&:indeterminate':
    '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
  '&:invalid': '&:invalid, &[aria-invalid=true], &[data-invalid]',
} as const;

/**
 * Transform a states (hover, focus, ...) in a StyleObject to
 * our format (pseudo selector plus corresponding data-attribute).
 *
 * We stole this idea from https://chakra-ui.com/.
 */
export const transformPseudos = (styles: StyleObject) => {
  let result: StyleObject = {};

  for (let key in styles) {
    const value = styles[key as keyof StyleObject];

    if (key in pseudos) {
      key = pseudos[key as keyof typeof pseudos];
    }

    if (typeof value === 'object') {
      result[key] = transformPseudos(value);
      continue;
    }

    result[key] = value;
  }

  return result;
};