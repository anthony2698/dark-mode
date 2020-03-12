import React, { useState } from 'react';

import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });
      
    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
      };
    
    return [storedValue];

}