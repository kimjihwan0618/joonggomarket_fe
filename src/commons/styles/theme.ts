import '@emotion/react'

const theme = {
  colors: {
    main: '#ffd600',
    gray01: '#333333',
    gray02: '#4f4f4f',
    gray03: '#828282',
    gray04: '#bdbdbd',
    gray05: '#e0e0e0',
    gray06: '#f2f2f2',
    gray07: '#f5f5f5',
    dark01: '#161616',
  },
  media: {
    // screen1: '@media (min-width: 1440px)', // largeDesktop
    screen1: '@media (min-width: 1200px) and (max-width: 1439px)', // desktop
    screen2: '@media (min-width: 768px) and (max-width: 1199px)', // tablet
    screen3: '@media (max-width: 767px)', // mobileLarge
    // screen3: '@media (min-width: 480px) and (max-width: 767px)', // mobileLarge
    // screen4: '@media (max-width: 479px)', // mobileSmall
  },
} as const

export default theme
