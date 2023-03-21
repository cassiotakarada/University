import React, { useState, useEffect } from 'react';

const NameInput = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    } else {
      promptForName();
    }
  }, []);

  const promptForName = () => {
    const newName = prompt('Please enter your name:');
    if (newName) {
      setName(newName);
      localStorage.setItem('name', newName);
    }
  };

  return 
};

export default NameInput;
