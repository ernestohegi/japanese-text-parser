import React from 'react'

export const theme = {
  default: {
    mainColor: {
      hex: '#FC6336',
      rgba: 'rgba(252, 99, 54, 0.2)',
    },
  },
}

export const ThemeContext = React.createContext(theme.default)
