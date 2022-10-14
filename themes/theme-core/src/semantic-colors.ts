import { colors, themeColors } from './colors';

/**
 * Information about the __default value can you find here
 * node_modules/.pnpm/@theme-ui+css@0.14.7_@emotion+react@11.10.4/node_modules/@theme-ui/css/dist/declarations/src/types.d.ts
 *
 * Interface ObjectWithDefault
 */

export const semanticColors = {
  // Second Iteretation
  buttonBackground: {
    base: {
      __default: colors.gray30,
      hover: {
        __default: colors.gray00,
      },
      disabled: {
        __default: colors.gray30,
      },
    },

    primary: {
      __default: themeColors.primary,
      hover: {
        __default: colors.orange40,
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
      __default: colors.orange60,
      hover: {
        __default: colors.orange40,
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

  // First Iteretation
  button: {
    base: {
      background: colors.gray30,
      lable: colors.gray70,
      border: colors.gray70,

      hover: {
        background: colors.gray00,
      },

      disabled: {
        lable: colors.gray40,
        background: colors.gray00,
        border: colors.gray40,
      },
    },
    primary: {
      lable: colors.gray00,
      background: colors.orange60,
      border: colors.orange60,

      hover: {
        lable: colors.gray10,
        background: colors.orange40,
        border: colors.orange40,
      },
    },
    secondary: {
      lable: colors.gray70,
      background: colors.gray30,
      outline: colors.gray70,

      hover: {
        background: colors.gray00,
      },
    },
    ghost: {
      lable: colors.gray70,
      outline: colors.gray70,

      hover: {
        lable: colors.gray70,
        background: colors.gray10,
      },
    },
    text: {
      lable: colors.gray70,

      hover: {
        lable: colors.gray70,
        outline: colors.gray70,
        background: colors.gray30,
      },
    },
  },
};
