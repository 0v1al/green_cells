import { colors } from "@mui/material";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            light: colors.green[600],
            main: colors.green[700],
            dark: colors.green[800],
          },
        }
      : {
          primary: {
            light: colors.green[600],
            main: colors.green[700],
            dark: colors.green[800],
          },
        }),
  },
});

export default getDesignTokens;
