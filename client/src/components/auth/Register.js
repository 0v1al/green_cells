import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  Grid,
  Divider,
  Chip,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useState, useRef } from "react";

const days = [...Array(32).keys()];
days.shift();

const months = [...Array(13).keys()];
months.shift();

const years = [];
const currentYear = new Date().getFullYear();

for (let i = currentYear - 100; i <= currentYear; i++) {
  years.push(i);
}

const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    sex: "",
    day: "",
    month: "",
    year: "",
    height: "",
    weight: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await axios("../../../../routes/auth.php");
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        maxWidth: 600,
        border: ".1px solid lightgray",
        borderRadius: ".3rem",
      }}
      ml="auto"
      mr="auto"
      p={2}
    >
      <Box component="form">
        <Grid
          container
          columnSpacing={2}
          rowSpacing={0}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid item xs={12} mb={2}>
            <Divider light style={{ width: "100%" }} textAlign="center">
              <Chip label="Credentiale cont" size="small" />
            </Divider>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                type="text"
                label="Nume"
                helperText=" "
                variant="outlined"
                size="small"
                name="name"
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={inputValue.name}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                helperText=" "
                type="email"
                label="Email"
                variant="outlined"
                size="small"
                name="email"
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={inputValue.email}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                type="password"
                label="Parolă"
                helperText=" "
                variant="outlined"
                size="small"
                name="password"
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={inputValue.password}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                type="password"
                label="Confirmare parolă"
                helperText=" "
                variant="outlined"
                size="small"
                name="confirmPassword"
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={inputValue.confirmPassword}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Divider light style={{ width: "100%" }} textAlign="center">
              <Chip label="Detalii fizic" size="small" />
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                label="Sex"
                variant="outlined"
                helperText=" "
                select
                value={inputValue["sex"]}
                name="sex"
                size="small"
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="m">M</MenuItem>
                <MenuItem value="f">F</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                size="small"
                select
                helperText=" "
                label="Zi"
                name="day"
                value={inputValue["day"]}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                {days.map((day, i) => (
                  <MenuItem key={i} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <TextField
                size="small"
                select
                label="Luna"
                helperText=" "
                name="month"
                value={inputValue["month"]}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                {months.map((month, i) => (
                  <MenuItem key={i} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                size="small"
                label="An"
                select
                helperText=" "
                name="year"
                value={inputValue["year"]}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
              >
                {years.map((year, i) => (
                  <MenuItem key={i} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                size="small"
                helperText=" "
                label="Înălțime (cm)"
                name="height"
                value={inputValue["height"]}
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></TextField>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                size="small"
                label="Greutate curentă (kg)"
                helperText=" "
                value={inputValue["weight"]}
                name="weight"
                onChange={(e) =>
                  setInputValue((prev) => ({
                    ...inputValue,
                    [e.target.name]: e.target.value,
                  }))
                }
              ></TextField>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <LoadingButton
        type="submit"
        onClick={submitHandler}
        variant="contained"
        loadingPosition="center"
        loading={isLoading}
        sx={{
          fontSize: "1rem",
          alignSelf: "flex-start",
          textTransform: "capitalize",
          backgroundColor: "primary.main",
          "&:hover": { backgroundColor: "primary.dark" },
        }}
      >
        Înregistrare
      </LoadingButton>
    </Box>
  );
};

export default Register;
