import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

import { ThemeProvider, createTheme, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import getDesignTokens from "./theme";

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Navbar /> */}
      <Container maxWidth="1024">
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
