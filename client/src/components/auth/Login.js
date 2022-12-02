import { Box, Grid, FormControl, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const Login = () => {
  return (
    <Box component="form">
      <Grid
        container
        columnSpacing={2}
        rowSpacing={0}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              helperText=" "
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              helperText=" "
              type="password"
              label="Parolă"
              variant="outlined"
              size="small"
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            variant="contained"
            loadingPosition="center"
            fullWidth
            sx={{
              fontSize: "1rem",
              textTransform: "capitalize",
              backgroundColor: "primary.main",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Conectare
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
