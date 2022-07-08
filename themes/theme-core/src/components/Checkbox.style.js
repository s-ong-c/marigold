export const Checkbox = {
  base: {
    label: {
      fontSize: 'xxsmall',
      lineHeight: 'small',
      '&:disabled': {
        color: 'gray30',
      },
    },
    checkbox: {
      borderRadius: 'small',
      borderColor: 'gray40',
      bg: 'gray00',
      p: 2,
      '&:focus': {
        outline: '2px solid',
        outlineColor: 'blue60',
        outlineOffset: 3,
      },
      '&:checked': {
        color: 'white',
        borderColor: 'blue70',
        bg: 'blue60',
      },
      '&:indeterminate': {
        color: 'white',
        borderColor: 'blue70',
        bg: 'blue60',
      },
      '&:disabled': {
        bg: 'gray30',
        borderColor: 'gray40',
      },
    },
  },
};
//# sourceMappingURL=Checkbox.style.js.map