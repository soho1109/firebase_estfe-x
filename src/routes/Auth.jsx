import { useState } from "react";
import { Box, Typography, TextField, Button } from '@mui/material';

function Auth() {
  const [newAccount, setNewAccount] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);

  return (
    <>
      <Typography variant="h2" component="h2">
        Login Form
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Email address"
          type="text"
          name="email"
          variant="outlined"
        />
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          label="Password"
          type="email"
          name="email"
          variant="outlined"
        />
        <Button sx={{ mt: 2 }} type="sumit" variant="contained">Login</Button>
      </Box>
    </>
  );
}
export default Auth;