import React from 'react'

export const theme = {
  default: {
    mainColor: {
      hex: '#d64545', // Traditional Japanese red
      rgba: 'rgba(214, 69, 69, 0.2)',
    },
  },
}

export const ThemeContext = React.createContext(theme.default)
