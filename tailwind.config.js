const secondary = 'hsla(239, 82%, 65%, 1)';

module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        none: 'none',
      },
      colors: {
        gray: {
          25: 'rgba(255, 255, 255, 0.12)',
          50: 'rgba(0, 0, 0, 0.02)',
          150: 'rgba(39, 39, 39, 0.08)',
          250: 'rgba(39, 39, 39, 0.12)',
          350: 'rgba(39, 39, 39, 0.24)',
          450: 'rgba(39, 39, 39, 0.38)',
          500: 'rgb(80,80,80)',
          550: 'rgba(0, 0, 0, 0.38)',
          570: 'rgba(96, 96, 96, 0.38)',
          650: 'rgba(96, 96, 96, 1)',
          750: 'rgba(39, 39, 39, 0.9)',
          850: 'rgba(0, 0, 0, 0.9)',
        },
        orange: {
          900: 'rgba(238, 110, 35, 1)',
        },
        red: {
          150: 'rgba(255, 75, 75, 0.16)',
          350: 'rgba(255, 75, 75, 1)',
          550: 'rgba(255, 10, 10, 1)',
        },
        blue: {
          25: 'rgba(129, 131, 239, 0.24)',
          50: 'rgba(0, 117, 255, 0.08)',
          75: 'rgba(74, 0, 224, 0.06)',
          150: 'rgba(93, 95, 239, 0.08)',
          250: 'rgba(93, 95, 239, 0.12)',
          450: 'rgba(74, 0, 224, 1)',
          650: 'rgba(0, 117, 255, 0.9)',
          750: 'rgba(129, 131, 239, 1)',
          850: 'rgba(31, 131, 204, 1)',
          dark: 'rgba(44,36,58)',
          950: '#001b71',
          light: 'rgba(49,33,76)',
        },
        purple: {
          8: 'rgba(93, 95, 239, 0.08)',
          75: 'rgba(142, 45, 226, 0.06)',
          450: 'rgba(142, 45, 226, 0.3)',
          550: 'rgba(142, 45, 226, 0.6)',
          650: 'rgba(142, 45, 226, 1)',
          950: 'rgba(47, 38, 58, 1)',
        },
        pink: {
          250: 'rgba(239, 108, 175, 0.28)',
          350: 'rgba(239, 93, 168, 0.12)',
          450: 'rgba(239, 93, 168, 0.82)',
          750: 'rgba(239, 93, 168, 1)',
          850: 'rgba(239, 108, 175, 1)',
        },
        green: {
          25: 'rgba(16, 171, 122, 0.08)',
          50: 'rgba(16, 171, 122, 0.12)',
          150: 'rgba(16, 171, 122, 0.16)',
          450: 'rgba(16, 171, 122, 1)',
        },
        gold: {
          150: '#fefaeb',
          400: 'rgba(253, 152, 54, 0.08)',
          500: '#FD9836',
          550: '#FDC500',
          650: '#CDA209',
        },
        bronze: {
          550: '#CD7532',
          650: '#B35A16',
        },
        blackBlur: {
          400: 'rgba(0, 0, 0, 0.4)',
        },
        black: 'rgba(0,0,0,1)',
        primary: {
          DEFAULT: 'rgba(0, 0, 0, 1)',
          50: 'rgba(255, 255, 255, 0.12)',
          100: 'rgba(0, 0, 0, 0.02)',
          200: 'rgba(39, 39, 39, 0.08)',
          300: 'rgba(39, 39, 39, 0.12)',
          400: 'rgba(39, 39, 39, 0.24)',
          500: 'rgba(39, 39, 39, 0.38)',
          600: 'rgba(0, 0, 0, 0)',
          700: 'rgba(96, 96, 96, 1)',
          800: 'rgba(39, 39, 39, 0.9)',
          900: 'rgba(0, 0, 0, 0.9)',
        },
        secondary: {
          DEFAULT: secondary,
          50: 'hsla(190, 81%, 90%, 0.1)',
          100: 'hsla(190, 81%, 82%, 0.2)',
          200: 'hsla(190, 81%, 74%, 0.3)',
          300: 'hsla(190, 81%, 66%, 0.4)',
          400: 'hsla(190, 81%, 58%, 0.5)',
          500: 'hsla(239, 82%, 65%, 0.6)',
          600: 'hsla(239, 82%, 65%, 0.7)',
          700: 'hsla(190, 81%, 34%, 0.8)',
          800: 'hsla(190, 81%, 28%, 0.9)',
          900: secondary,
        },
        tertiary: {
          DEFAULT: '#FFF',
          50: 'rgba(39, 39, 39, 0.24)',
          100: 'rgba(39, 39, 39, 0.38)',
          150: 'rgba(39, 39, 39, 0.9)',
          250: 'rgba(238, 238, 238, 1)',
        },
        'gray-darker': '#504747',
        'half-dark': 'rgba(0, 0, 0, 0.4)',
        'light-gray': 'rgba(247, 247, 249, 1)',
        'deep-gray': 'rgba(173, 173, 173, 1)',
        'dark-gray': 'rgba(61, 61, 61, 1)',
        'light-green': 'rgba(226, 245, 239, 1)',
        'fade-pink': 'rgba(253, 236, 245, 1)',
        'fade-gray': 'rgba(221, 221, 221, 1)',
        'light-orange': 'rgba(255, 163, 68, 1)',
        'white-shade': 'rgba(251,251,251,1)',
        'gray-lighter': 'rgba(135, 135, 135, 1)',
        'fade-purple': 'rgb(126, 131, 255)',
      },
      padding: {
        px: '1px',
      },
      margin: {
        px: '1px',
        '-px': '-1px',
        '-2px': '-2px',
        auto: 'auto',
        18: '4.2rem',
      },
      fontSize: {
        micro: '.5rem', // 8px
        mini: '.563rem', // 9px
        xxs: '.625rem', // 10px
        11: '0.687',
        xs: '12px',
        small: '0.813rem', // 13px
        sm: '.875rem', // 14px
        smd: '1rem', // 16px
        md: '1.125rem', // 18px,
        l: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        '3.5xl': '2rem',
        '4xl': '2.25rem', // 36px,
        '5xl': '42px',
      },
      fontWeight: {
        hairline: 100,
      },
      fontFamily: {
        brand: ['Source Sans Pro', 'sans-serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Source Sans Pro', 'sans-serif'],
        inconsolata: ['Inconsolata'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        source: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      boxShadow: {
        footer: 'inset 0px 1px 0px rgba(0, 0, 0, 0.12)',
        paymentShadow: '0px -1px 0px rgba(0, 0, 0, 0.12)',
        shadowRight: 'inset -1px 0px 0px rgba(39, 39, 39, 0.12)',
        shadowBottom: 'inset 0px -1px 0px rgba(39, 39, 39, 0.12)',
        shadowBottomWhite: 'inset 0px -1px 0px rgba(255, 255, 255, 0.12)',
        tableHead: 'inset 0px -1px 0px rgba(0, 0, 0, 0.12)',
        shadowLeft: 'inset 1px 0px 0px rgba(39, 39, 39, 0.12)',
        shadowPopup: ' 0px 0px 1px rgba(39, 39, 39, 0.12), 0px 20px 24px rgba(39, 39, 39, 0.08)',
        shadowLeftRight:
          '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',
        purpleDrop: '0px 0px 1px rgba(81, 5, 225, 0.24), 0px 20px 24px rgba(137, 42, 226, 0.08)',
        purpleInnerShadow: 'inset 0px -2px 0px #5D5FEF',
        microHeader: '0px 0px 1px rgba(93, 95, 239, 0.12), 0px 20px 24px rgba(93, 95, 239, 0.08)',
        popUpBackground: '0px 0px 1px rgba(39, 39, 39, 0.12), 0px 20px 24px rgba(39, 39, 39, 0.08)',
        cartPaymentPopUp:
          '0px 0px 1px rgba(15, 23, 42, 0.06), 0px 10px 15px -3px rgba(15, 23, 42, 0.1), 0px 4px 6px -2px rgba(15, 23, 42, 0.05)',
      },
      minWidth: {
        auto: '17rem',
        sm: '12rem',
        site: '18.75rem',
        'input-mini': '17.5rem',
        'input-small': '31.25rem',
        'input-medium': '36.3125rem',
        'input-large': '61.45rem',
        'button-mini': '5.5rem',
        'button-small': '7rem',
        'button-medium': '9.875rem',
        'button-large': '10rem',
        'select-small': '3.5rem',
        'sm-icon': '2.75rem',
        'schedule-tab': '4.5rem',
      },
      width: {
        1: '0.25rem',
        2: '0.5rem',
        4: '1rem',
        16: '4rem',
        20: '5rem',
        30: '7.5rem',
        34: '8.5rem',
        150: '50rem',
        arrow: '.8rem',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
        '12/25': '48%',
        95: '95%',
        140: '140%',
        '70vw': '70vw',
        card: '14.5rem',
        sm: '10rem',
      },
      maxWidth: {
        10: '50px',
        xxs: '11.56rem',
        sm: '30rem',
        md: '40rem',
        lg: '50rem',
        xl: '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '4/5': '80%',
        '9/10': '90%',
        'site-mini': '17.5rem',
        'site-small': '31.25rem',
        'site-medium': '43.75rem',
        'site-large': '56.25rem',
        site: '73.75rem',
        screen: '100vw',
      },
      height: {
        customConfirmTeam: '42px',
        arrow: '.4rem',
        px: '1px',
        2: '0.5rem',
        4: '1rem',
        5: '1.25rem',
        8: '1.8rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        22: '5.6rem',
        24: '6rem',
        32: '8rem',
        90: '90vh'
      },
      maxHeight: {
        sm: '31.5rem',
      },
      borderWidth: {
        1: '1px',
        5: '5px',
        0.5: '0.5px',
      },
      borderRadius: {
        pill: '40px',
        half: '50%',
        full: '100%',
      },
      lineHeight: {
        7.5: '1.875rem',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
      },
      fill: {
        transparent: 'transparent',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
      },
      gridTemplateColumns: {
        '2.5/7': '25% 75%',
        '1/8': '10% 80%',
      },
    },
  },
  variants: {
    extend: {
      extend: {
        backgroundColor: ['checked'],
        borderColor: ['checked'],
      },
    },
  },
  corePlugins: {
    borderCollapse: true,
  },
};