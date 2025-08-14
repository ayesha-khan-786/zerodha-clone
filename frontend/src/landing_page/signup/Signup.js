import * as React from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import axios from "axios";

// import { useAuth } from "../../hooks/useAuth";

const defaultTheme = createTheme();

export default function Register() {
  let [alert, setAlert] = React.useState({ st: false, msg: "" });
  const navigate = useNavigate();
  //  const { login, user } = useAuth();

  /*  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);  */

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      username: formData.get("Username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (!data.username || !data.email || !data.password) {
      setAlert({ st: true, msg: "Enter Valid Details" });
      return;
    }

    axios
      .post("http://localhost:3002/user/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // await login(res.data.token);
        //const token = res.data.token;
        //localStorage.setItem("user", JSON.stringify(token));
        window.location.href = "http://localhost:3001/login";
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
  <ThemeProvider theme={defaultTheme}>
  <Box
    sx={{
      backgroundColor: "#f4f6f8", // light gray background
      minHeight: "100vh",
      display: "flex",
    }}
  >
    {/* Left side */}
    <Box
      sx={{
        flex: "0 0 50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: 4,
      }}
    >
       
       {/* Inner box */}
       <Box
      sx={{
         flex: "0 0 60%",
         height: "100vh",
         backgroundImage: 'url("media/images/homeHero.png")',
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center",
      }}
    />
    </Box>
      
{/* Right side */}
      <Box
          sx={{
            flex: 1,
            display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: 2,
          }}
        >
        
        <Box
           sx={{
            backgroundColor: "#ffffff",
            padding: 5,
            borderRadius: "12px",
            boxShadow: "0 4px 20px rbba(0, 0, 0, 0.05)",
            width: "100%",
            maxWidth: "480px",
           }}
           >
       

      <Box 
        sx={{ textAlign: "center", mb: 4 }}>
        <Avatar sx={{ bgcolor: "#0d9ba7", width: 64, height: 64, mx: "auto" }}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
          Create Your Account
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
          Enter your details to continue
        </Typography>
      </Box>

      <Box component="form" noValidate onSubmit={handleSubmit}>
        {alert.st === true && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {alert.msg}
          </Alert>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="Username"
              id="Username"
              label="Username"
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="email"
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
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
          </Grid>
        </Grid>

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
          Sign Up
        </Button>

        <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 2, fontSize: "14px" }}
        >
          Already have an account?{" "}
          <a
            href="http://localhost:3001/login"
            style={{ color: "#0d9ba7", textDecoration: "none", fontWeight: 500 }}
          >
            Sign in
          </a>
        </Typography>
      </Box>
    </Box>
  </Box>
   </Box>
</ThemeProvider>

  );
} 