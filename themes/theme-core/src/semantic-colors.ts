import theme from '.';
import { colors, themeColors } from './colors';

/**
 * Information about the __default value can you find here
 * node_modules/.pnpm/@theme-ui+css@0.14.7_@emotion+react@11.10.4/node_modules/@theme-ui/css/dist/declarations/src/types.d.ts
 *
 * Interface ObjectWithDefault
 */

export const primaryColor = {
  primary: themeColors.primary,
  hover: colors.orange40,
  border: themeColors.primary,
  borderHover: colors.orange40,
};

export const secondaryColor = {
  secondary: colors.gray30,
  hover: colors.gray00,
};

export const disabledColor = {
  disabled: colors.gray30,
  borderColor: colors.gray40,
  label: colors.gray40,
};

export const focusColor = {
  focus: colors.blue60,
};

export const boxShadow = {
  card: '#a5a5a540',
};

export const linearGradientColor = {
  colorStopOne: '#3875d7',
  colorStopTwo: '#2a62bc',
};

export const semanticColors = {
  // Second Iteretation
  buttonBackground: {
    base: {
      __default: colors.gray30,
      hover: {
        __default: colors.gray00,
      },
      disabled: {
        __default: disabledColor.disabled,
      },
    },

    primary: {
      __default: primaryColor.primary,
      hover: {
        __default: primaryColor.hover,
      },
    },

    secondary: {
      __default: colors.gray30,
      hover: {
        __default: colors.gray00,
      },
    },

    ghost: {
      hover: {
        __default: colors.gray10,
      },
    },

    text: {
      hover: {
        __default: colors.gray30,
      },
    },
  },

  buttonLabel: {
    base: {
      __default: colors.gray70,
      disabled: {
        __default: colors.gray40,
      },
    },
    primary: {
      __default: colors.gray00,
      hover: {
        __default: colors.gray10,
      },
    },

    secondary: {
      __default: colors.gray70,
    },

    ghost: {
      __default: colors.gray70,
      hover: {
        __default: colors.gray10,
      },
    },

    text: {
      __default: colors.gray70,
      hover: {
        __default: colors.gray70,
      },
    },
  },

  buttonBorder: {
    base: {
      __default: colors.gray70,
      disabled: {
        __default: colors.gray40,
      },
    },
    primary: {
      __default: primaryColor.primary,
      hover: {
        __default: primaryColor.borderHover,
      },
    },
  },

  buttonOutline: {
    secondary: {
      __default: colors.gray70,
    },

    ghost: {
      __default: colors.gray70,
    },

    text: {
      hover: {
        __default: colors.gray70,
      },
    },
  },

  cardBackground: {
    base: {
      __default: themeColors.cardBackground,
    },
  },

  // BoxShadow can't resolve the __default state
  cardBoxShadow: {
    base: boxShadow.card,
  },

  checkBoxLable: {
    lable: {
      disabled: {
        __default: disabledColor.disabled,
      },
    },
  },

  checkBoxColor: {
    checkbox: {
      checked: {
        __default: colors.gray00,
      },
      indeterminate: {
        __default: colors.gray00,
      },
    },
  },

  checkBoxBackground: {
    checkbox: {
      __default: colors.gray00,

      checked: {
        __default: colors.blue60,
      },

      indeterminate: {
        __default: colors.blue60,
      },
      disabled: {
        __default: disabledColor.disabled,
      },
    },
  },

  checkBoxBorder: {
    checkbox: {
      __default: colors.gray40,

      checked: {
        __default: colors.blue70,
      },
      indeterminate: {
        __default: colors.blue70,
      },
      disabled: {
        __default: disabledColor.borderColor,
      },
    },
  },

  checkBoxFocus: {
    checkbox: {
      focus: {
        __default: focusColor.focus,
      },
    },
  },

  dialogBackground: {
    container: {
      __default: themeColors.dialogBackground,
    },
  },

  dividerBackground: {
    base: {
      __default: themeColors.text,
    },
  },

  // On Error didn't work correctl
  helpTextColor: {
    base: {
      __default: themeColors.text,
      error: {
        __default: themeColors.error,
      },
    },
  },

  inputBorder: {
    base: {
      __default: themeColors.input,
    },
  },

  labelColor: {
    base: {
      __default: themeColors.text,
      disabled: {
        __default: disabledColor.label,
      },
    },
  },

  linkColor: {
    base: {
      __default: themeColors.link,
    },

    menuItemLink: {
      __default: themeColors.text,
    },

    cardText: {
      __default: themeColors.text,
    },
  },

  listBoxBackground: {
    base: {
      __default: colors.gray00,

      // Why on error => gray00 ???
      error: {
        __default: colors.gray00,
      },
    },

    option: {
      focus: {
        __default: '#3875d7',
      },
      selected: {
        __default: '#3875d7',
      },
      hover: {
        __default: colors.blue60,
      },
    },
  },

  listBoxBackgroundImage: {
    option: {
      focus: {
        colorStopOne: linearGradientColor.colorStopOne,
        colorStopTwo: linearGradientColor.colorStopTwo,
      },
      selected: {
        colorStopOne: linearGradientColor.colorStopOne,
        colorStopTwo: linearGradientColor.colorStopTwo,
      },
    },
  },

  listBoxBoarderColor: {
    base: {
      __default: themeColors.input,

      error: {
        __default: themeColors.error,
      },
    },
  },

  listBoxColor: {
    option: {
      __default: themeColors.text,
      focus: {
        __default: colors.gray00,
      },
      selected: {
        __default: colors.gray00,
      },
      disabled: {
        __default: disabledColor.label,
      },
    },
  },

  menuBackground: {
    base: {
      __default: colors.gray00,
    },
    item: {
      hover: {
        __default: colors.blue60,
      },
    },
  },

  menuColor: {
    item: {
      hover: {
        __default: 'colors.gray00',
      },
    },
  },

  messageBackground: {
    base: {
      __default: colors.gray10,
    },
  },
};
console.log(semanticColors.listBoxBackgroundImage.option.focus);

// First Iteretation
//   button: {
//     base: {
//       background: colors.gray30,
//       lable: colors.gray70,
//       border: colors.gray70,

//       hover: {
//         background: colors.gray00,
//       },

//       disabled: {
//         lable: colors.gray40,
//         background: colors.gray00,
//         border: colors.gray40,
//       },
//     },
//     primary: {
//       lable: colors.gray00,
//       background: colors.orange60,
//       border: colors.orange60,

//       hover: {
//         lable: colors.gray10,
//         background: colors.orange40,
//         border: colors.orange40,
//       },
//     },
//     secondary: {
//       lable: colors.gray70,
//       background: colors.gray30,
//       outline: colors.gray70,

//       hover: {
//         background: colors.gray00,
//       },
//     },
//     ghost: {
//       lable: colors.gray70,
//       outline: colors.gray70,

//       hover: {
//         lable: colors.gray70,
//         background: colors.gray10,
//       },
//     },
//     text: {
//       lable: colors.gray70,

//       hover: {
//         lable: colors.gray70,
//         outline: colors.gray70,
//         background: colors.gray30,
//       },
//     },
//   },
// };
