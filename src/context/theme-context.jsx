import React, { createContext, useState } from "react";

export const themes = {
  light: {
    primary: "#ffffff",
    secondary: "#32aafa",
    tertiary: "#d7eefc",
    primaryText: "#0e79c1",
    secondaryText: "#222222",
    tertiaryText: "#222222",
    othercolor: "#666666",
    bordercolor: "#d3d3d3",
    error: "#ff0000",
    white: "#ffffff",
    black: "#222222",
  },
  dark: {
    primary: "#222222",
    secondary: "#555555",
    tertiary: "#a2a2a2",
    primaryText: "#ffffff",
    secondaryText: "#32aafa",
    tertiaryText: "#ffffff",
    othercolor: "#a8dbfd",
    bordercolor: "#d7eefc",
    error: "#f7f30e",
    white: "#ffffff",
    black: "#222222",
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
