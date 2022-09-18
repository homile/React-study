import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./nav/Nav";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/Theme";

const App = () => {
  // 테마 변경 (lightTheme, darkTheme)
  const [isTheme, setIsTheme] = useState("light");
  const theme = isTheme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    if(localStorage.getItem("theme") === "light"){
      setIsTheme("light")
    }else{
      setIsTheme("dark")
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GlobalStyle />
          <Nav isTheme={isTheme} setIsTheme={setIsTheme} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.textColor};
`;
