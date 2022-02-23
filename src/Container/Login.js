import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Core/Context";

const theme = createTheme();

export default function Login() {
  const [state, setstate] = React.useState({ username: "", password: "" });
  let navigate = useNavigate();
  const { isLoggedin, setLogin } = useAppContext();
  useEffect(() => {
    if (isLoggedin) {
      navigate("/");
    }
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { username, password } = state;
  
    if (username === "abc" && password === "123") {
      setLogin(true);
      localStorage.setItem("isLoggedin", true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  const changeHandler = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="user"
              autoComplete="user"
              autoFocus
              value={state.username}
              onChange={changeHandler}
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
              value={state.password}
              onChange={changeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
