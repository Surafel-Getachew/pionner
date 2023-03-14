import { useState, useEffect } from 'react';

const getLocalValue = (key: string, initialValue: any) => {
  // if a value is already in store
  // const localValue = JSON.parse(localStorage.getItem(key) || '{}');
  const localValue = localStorage.getItem(key);

  if (localValue) return JSON.parse(localValue);

  // initialValue is a function
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage = (key: string, initValue: any) => {
  const [value, setValue] = useState(() => getLocalValue(key, initValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
