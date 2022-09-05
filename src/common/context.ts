import React from 'react';

interface ThemeProps {
  theme: 'light' | 'dark',
  toggle: () => void,
}

const ThemeContext = React.createContext<ThemeProps>({
  theme: 'light',
  toggle: () => {},
});

export default ThemeContext;
