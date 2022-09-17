import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./nav/Nav";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/Theme";

const App = () => {
  // 태블릿 사이즈일 때, 모바일 사이즈 화면 출력
  const isMobile = useMediaQuery({ maxWidth: 786 });

  // 테마 변경 (lightTheme, darkTheme)
  const [isTheme, setIsTheme] = useState("lightTheme");
  const theme = isTheme === "lightTheme" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GlobalStyle />
          <Nav isTheme={isTheme} setIsTheme={setIsTheme} />
          {isMobile ? "모바일" : "데스크탑"}
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.textColor};
`;
