import * as React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import useAuth from "../hooks/useAuth";

const defaultTheme = createTheme();

export default function Login() {
  let [alert, setAlert] = React.useState({ st: false, msg: "" });
  const navigate = useNavigate();
  const user = useAuth();

  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    await axios
      .post("http://localhost:3002/user/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("user", JSON.stringify({ token }));
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          setAlert({ st: true, msg: error.response.data.error });
        } else if (error.request) {
          setAlert({ st: true, msg: "Network Error" });
        } else {
          setAlert({ st: true, msg: "Something Went Wrong" });
        }
      });
  };

  return (
    <>
      <a href="http://localhost:3000" >
        <img
        src="media\onestock.png"
        alt="logo"
        style={{ width: "16%", marginTop: "30px", marginLeft: "80px" }}
        className="d-block"
      />
      </a>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ bgcolor: "#0d9ba7", width: 64, height: 64, mx: "auto" }}
            >
              <LockOutlinedIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
              Login to Your Account
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
              Enter your credentials to continue
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              {alert.st == true ? (
                <Alert severity="error">{alert.msg}</Alert>
              ) : null}

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    fontSize: "1rem",
                    backgroundColor: "#f9f9f9",
                    width: "400px",
                    maxWidth: "100%",
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="outlined"
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    fontSize: "1rem",
                    backgroundColor: "#f9f9f9",
                    width: "400px",
                    maxWidth: "100%",
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "10px",
                  textTransform: "none",
                  backgroundColor: "#0d9ba7",
                  "&:hover": {
                    backgroundColor: "#0a7d86",
                  },
                }}
              >
                Sign In
              </Button>

              <Typography
                variant="body2"
                sx={{ textAlign: "center", mt: 2, fontSize: "14px" }}
              >
                Don't have an account?{" "}
                <a
                  href="http://localhost:3000/signup"
                  style={{
                    color: "#0d9ba7",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Register now
                </a>
              </Typography>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
