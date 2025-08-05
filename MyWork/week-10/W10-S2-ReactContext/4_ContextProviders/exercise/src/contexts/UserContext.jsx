import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// User provider component
export function UserProvider({ children }) {
  const [username, setUsername] = useState('Ely'); // Default name is empty
  const [darkMode, setDarkMode] = useState(false); // Default theme is false

  const changeDarkMode = (mode) => {
    setDarkMode(mode);
  };

    const changeUsername = (username) => {
    setUsername(username);
  };

  return (
    <UserContext.Provider value={{ darkMode, changeDarkMode, username, changeUsername }}>
      {children}
    </UserContext.Provider>
  );
}
