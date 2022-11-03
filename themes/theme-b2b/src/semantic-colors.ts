import { color } from '@marigold/tokens';
import { colors } from './colors';

const themeColors = {
  text: colors.gray70,
  background: colors.gray10,
  primary: colors.orange60,
  secondary: colors.gray70,
  disabled: colors.gray40,
  error: colors.red60,
  warning: colors.yellow70,
  info: colors.blue70,
  success: colors.green70,
};

const primrayColor = {
  hover: colors.orange40,
};

const secondaryColor = {
  hover: colors.gray60,
};

const disabledColor = {
  color: colors.gray40,
};

const boxShadow = {
  card: 'rgba(165, 165, 165, 0.25)',
  dialog: 'rgba(0, 0, 0, 0.25)',
};

export const semanticColors = {
  badgeBackground: {
    info: {
      __default: themeColors.info,
    },
  },
  badgeBorder: {
    info: {
      __default: colors.blue80,
    },
  },
  badgeColor: {
    info: {
      __default: colors.blue10,
    },
  },

  buttonBackground: {
    base: {
      focusVisible: {
        __default: themeColors.primary,
      },
      disabled: {
        __default: colors.gray20,
      },
    },
    primary: {
      __default: themeColors.primary,
      hover: {
        __default: primrayColor.hover,
      },
    },
    secondary: {
      __default: themeColors.secondary,
      hover: {
        __default: secondaryColor.hover,
      },
    },

    ghost: {
      hover: {
        __default: colors.gray40,
      },
    },

    text: {
      hover: {
        __default: colors.gray40,
      },
    },

    menu: {
      __default: themeColors.background,
      hover: {
        __default: colors.gray60,
      },
    },
  },

  buttonColor: {
    base: {
      disabled: {
        __default: disabledColor.color,
      },
    },
    primary: {
      __default: themeColors.background,
      hover: {
        __default: themeColors.background,
      },
    },

    secondary: {
      __default: themeColors.background,
      hover: {
        __default: themeColors.background,
      },
    },

    ghost: {
      __default: themeColors.secondary,
      hover: {
        __default: themeColors.secondary,
      },
    },

    text: {
      __default: themeColors.secondary,
      hover: {
        __default: themeColors.secondary,
      },
    },

    menu: {
      __default: themeColors.secondary,
      hover: {
        __default: themeColors.background,
      },
    },
  },

  buttonBorder: {
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
      __default: colors.gray00,
    },
  },

  cardBoxShadow: {
    base: boxShadow.card,
  },

  checkBoxColor: {
    base: {
      disabled: {
        __default: colors.gray40,
      },
    },
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
      checked: {
        __default: themeColors.primary,
      },
      indeterminate: {
        __default: themeColors.primary,
      },
      disabled: {
        __default: colors.gray30,
      },
    },
  },

  checkBoxBorder: {
    checkbox: {
      __default: colors.gray40,
      hover: {
        __default: colors.gray50,
      },
      checked: {
        __default: colors.orange80,
      },
      indeterminate: {
        __default: colors.orange80,
      },
      disabled: {
        __default: colors.gray30,
      },
    },
  },

  checkBoxOutline: {
    checkbox: {
      focus: {
        __default: colors.orange60,
      },
    },
  },

  dialogBoxShadow: {
    base: boxShadow.dialog,
  },

  dividerBackground: {
    base: {
      __default: themeColors.text,
    },
    section: {
      __default: colors.gray50,
    },
  },

  helpTextColor: {
    base: {
      __default: themeColors.text,
      error: {
        __default: themeColors.error,
      },
    },
  },

  inputColor: {
    base: {
      __default: themeColors.text,
      disabled: {
        __default: colors.gray40,
      },
    },
  },

  inputBackground: {
    base: {
      __default: colors.gray00,
      disabled: {
        __default: colors.gray20,
      },
    },
  },

  inputBorder: {
    base: {
      __default: colors.gray40,
      hover: {
        __default: colors.gray50,
      },
      focus: {
        __default: colors.orange60,
      },
      error: {
        __default: themeColors.error,
      },
    },
  },

  inputBoxShadow: {
    base: {
      focus: colors.orange60,
      error: themeColors.error,
    },
  },

  labelColor: {
    base: {
      __default: themeColors.text,
      disabled: {
        __default: colors.gray40,
      },
    },
  },

  linkColor: {
    base: {
      __default: colors.blue60,
    },
    menuItemLink: {
      __default: themeColors.text,
    },
  },

  listBoxBackground: {
    base: {
      __default: colors.gray00,
    },
    option: {
      focus: {
        __default: colors.orange20,
      },
      selected: {
        __default: colors.orange60,
      },
    },
  },

  listBoxBorder: {
    base: {
      __default: colors.gray40,
      error: {
        __default: themeColors.error,
      },
    },
    section: {
      __default: colors.gray40,
    },
  },

  listBoxColor: {
    option: {
      selected: {
        __default: colors.gray00,
      },
      disabled: {
        __default: colors.gray40,
      },
    },
    sectionTitle: {
      __default: colors.gray50,
    },
  },

  menuBackground: {
    base: {
      __default: colors.gray00,
    },
    item: {
      focus: {
        __default: colors.gray20,
      },
    },
  },
  menuBorder: {
    base: {
      __default: colors.gray40,
    },
  },

  messageBackground: {
    base: {
      __default: colors.gray10,
    },
  },

  messageColor: {
    base: {
      __default: colors.gray70,
    },
  },

  messageBorder: {
    warning: {
      __default: themeColors.warning,
    },
    error: {
      __default: themeColors.error,
    },
    info: {
      __default: themeColors.info,
    },
  },

  messageIcon: {
    warning: {
      __default: themeColors.warning,
    },
    error: {
      __default: themeColors.error,
    },
    info: {
      __default: themeColors.info,
    },
  },

  numberFieldBackground: {
    base: {
      disabled: {
        __default: colors.gray20,
      },
    },
    stepper: {
      hover: {
        __default: colors.gray10,
      },
    },
  },

  numberFieldBorder: {
    base: {
      __default: colors.gray40,
      hover: {
        __default: colors.gray50,
      },
      focus: {
        __default: colors.orange60,
      },
      error: {
        __default: themeColors.warning,
      },
    },
    stepper: {
      // To mutch?
      firstOfType: {
        __default: colors.gray40,
      },
      secondOfType: {
        __default: colors.gray40,
      },

      hoverGroup: {
        __default: colors.gray50,
      },
      focusGroup: {
        __default: colors.orange60,
      },
      errorGroup: {
        __default: themeColors.error,
      },
    },
  },

  numberFieldBoxShadow: {
    base: {
      error: themeColors.error,
    },
  },

  radioBackground: {
    radio: {
      checked: {
        __default: themeColors.primary,
      },
      disabled: {
        __default: colors.gray30,
      },
    },
  },
  radioColor: {
    base: {
      disabled: {
        __default: disabledColor.color,
      },
    },
    radio: {
      checked: {
        __default: colors.gray00,
      },
    },
  },
  radioBorder: {
    radio: {
      __default: colors.gray40,
      hover: {
        __default: colors.gray50,
      },
      checked: {
        __default: colors.orange80,
      },
      disabled: {
        __default: colors.gray40,
      },
    },
  },

  radioOutline: {
    radio: {
      focus: {
        __default: colors.orange60,
      },
    },
  },

  selectBackground: {
    base: {
      __default: colors.gray00,
      disabled: {
        __default: colors.gray20,
      },
      expanded: {
        __default: colors.gray20,
      },
    },
  },

  selectBorder: {
    base: {
      __default: colors.gray40,
      hover: {
        __default: colors.gray50,
      },
      disabled: {
        __default: colors.gray40,
      },
      focusVisible: {
        __default: colors.orange60,
      },
      expanded: {
        __default: colors.gray40,
      },
      error: {
        __default: themeColors.error,
      },
    },
  },

  selectColor: {
    base: {
      disabled: {
        __default: colors.gray40,
      },
    },
  },

  selectBoxShadow: {
    base: {
      foucsVisible: colors.orange60,
    },
  },

  sliderBackground: {
    base: {
      track: {
        __default: colors.gray30,
      },
      thumb: {
        __default: colors.gray00,
        disabled: {
          __default: colors.gray40,
        },
      },
    },
  },

  sliderColor: {
    base: {
      lable: {
        __default: themeColors.text,
      },
      output: {
        __default: themeColors.text,
      },
    },
  },

  sliderBorder: {
    base: {
      thumb: {
        __default: colors.gray70,
        focus: {
          __default: colors.orange60,
        },
        disabled: {
          __default: colors.gray40,
        },
      },
    },
  },

  switchBackground: {
    base: {
      track: {
        __default: colors.gray20,

        checked: {
          __default: themeColors.primary,
        },

        disabled: {
          __default: colors.gray30,
        },
      },
      thumb: {
        disabled: {
          __default: colors.gray20,
        },
      },
    },
  },

  switchBoxShadow: {
    base: {
      track: colors.gray40,
      checked: colors.orange80,
      disabled: colors.gray40,
    },
  },

  tableColor: {
    base: {
      header: {
        __default: colors.gray70,
      },

      row: {
        selected: {
          __default: colors.orange10,
        },
        dataHover: {
          __default: colors.gray20,
        },
      },
      cell: {
        __default: colors.gray70,
      },
    },
  },

  tableBorder: {
    base: {
      header: {
        __default: colors.gray50,
      },
      cell: {
        __default: colors.gray50,
      },
    },
  },

  tableOutline: {
    base: {
      header: {
        focus: {
          __default: colors.orange60,
        },
      },
      row: {
        focusVisible: {
          __default: colors.orange60,
        },
      },
      cell: {
        foucs: {
          __default: colors.orange60,
        },
      },
    },
  },

  textAreaBackground: {
    base: {
      disabled: {
        __default: colors.gray20,
      },
    },
  },

  textAreaColor: {
    base: {
      __default: themeColors.text,
      disabled: {
        __default: colors.gray40,
      },
    },
  },

  textAreaBorder: {
    base: {
      __default: colors.gray40,
      hover: {
        __default: colors.gray50,
      },
      error: {
        __default: themeColors.error,
      },
    },
  },

  textAreaBoxShadow: {
    base: {
      error: themeColors.error,
    },
  },

  toolTipBackground: {
    base: {
      container: {
        __default: colors.blue10,
      },
    },
  },

  toolTipBorder: {
    base: {
      container: {
        __default: colors.blue70,
      },
      arrow: {
        __default: colors.blue70,
        after: {
          __default: colors.blue10,
        },
      },
    },
  },

  underLayBackground: {
    base: {
      __default: 'rgba(206, 212, 218, 0.5)',
    },
  },
};
