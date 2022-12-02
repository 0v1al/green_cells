import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import Register from "../../components/auth/Register";

const RegisterPage = () => {
  return (
    <Box
      component="div"
      pb={2}
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
        Creare cont
      </Typography>
      <Register />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: "center",
          maxWidth: 600,
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
        <Typography variant="body1" component="span">
          Ai deja un cont? Conectează-te de{" "}
          <Link to="/login">
            <Typography
              sx={{ color: "primary.main" }}
              variant="body1"
              component="span"
            >
              aici!
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
