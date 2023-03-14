import { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  theme: 'dark' | 'light';
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  switchTheme: () => {},
});

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const switchTheme = () => {
    console.log('switching theme');

    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
