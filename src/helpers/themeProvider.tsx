'use client';

import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface IDefaultValue {
  theme: string;
  setTheme: (theme: string) => void;
  customColors: { primary: string; secondary: string };
  setCustomColors: (colors: { primary: string; secondary: string }) => void;
}

const defaultValue: IDefaultValue = {
  theme: 'default',
  setTheme: () => {},
  customColors: { primary: '', secondary: '' },
  setCustomColors: () => {},
};

export const ThemeContext = createContext(defaultValue);

export const ThemeProvider = ({ 
  children, 
  initialColors 
}: { 
  children: React.ReactNode, 
  initialColors: { primary: string; secondary: string } 
}) => {
  const [theme, setTheme] = useState<string>('default');
  const [customColors, setCustomColors] = useState<{ primary: string; secondary: string }>({
    primary: initialColors.primary || '',
    secondary: initialColors.secondary || '',
  });

  useEffect(() => {
    const storedColors = Cookies.get('customColors');
    
    if (storedColors) {
      const parsedColors = JSON.parse(storedColors);
      setCustomColors(parsedColors);
      
      if (parsedColors.primary && parsedColors.secondary) {
        document.documentElement.style.setProperty('--primary-color', parsedColors.primary);
        document.documentElement.style.setProperty('--secondary-color', parsedColors.secondary);
      }
    } else if (initialColors.primary && initialColors.secondary) {
      setCustomColors(initialColors);
      document.documentElement.style.setProperty('--primary-color', initialColors.primary);
      document.documentElement.style.setProperty('--secondary-color', initialColors.secondary);
    }
  }, [initialColors]);

  useEffect(() => {
    if (customColors.primary && customColors.secondary) {
      Cookies.set('customColors', JSON.stringify(customColors));
      document.documentElement.style.setProperty('--primary-color', customColors.primary);
      document.documentElement.style.setProperty('--secondary-color', customColors.secondary);
    }
  }, [customColors]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, customColors, setCustomColors }}>
      {children}
    </ThemeContext.Provider>
  );
};