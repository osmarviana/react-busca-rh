import React from "react";
import { createGlobalStyle } from "styled-components";
import { AppRouter } from "./pages/AppRouter";
import { ThemeProvider } from "./context/theme-context";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle`

  	html{
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-family: 'Ubuntu', sans-serif;
	color: #000000;
  	}

	body {
	background-color: var(--main-color);
	}

  	*{
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		box-sizing: border-box;
	}

	a{
		text-decoration: none;
		color: #000000;
	}
  
	ul{
		list-style: none;
	}
`;
