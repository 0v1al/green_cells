import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Login from "../../components/auth/Login";

const LoginPage = () => {
  return (
    <Box
      component="div"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        mb={4}
        fontWeight="medium"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        GreenCells
      </Typography>
      <Typography
        variant="h4"
        fontWeight="medium"
        sx={{ textAlign: "center" }}
        mb={4}
      >
        Conectare
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: 450,
          border: ".1px solid lightgray",
          borderRadius: ".3rem",
        }}
        mt={2}
        ml="auto"
        mr="auto"
        p={4}
        gap={2}
      >
        <Login />
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          textAlign: "center",
          maxWidth: 450,
          width: "100%",
          border: ".1px solid lightgray",
          backgroundColor: "#f7faf8",
          borderRadius: ".3rem",
        }}
        mt={2}
        ml="auto"
        mr="auto"
        p={2}
      >
        <Typography variant="body1" component="span" fontWeight={400}>
          Nu ai un cont?{" "}
          <Link to="/register">
            <Typography
              sx={{ color: "primary.main" }}
              variant="body1"
              component="span"
              fontWeight={400}
            >
              Crează cont nou
            </Typography>
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
