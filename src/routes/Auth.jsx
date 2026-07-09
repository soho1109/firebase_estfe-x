import { useState } from "react";
import { Box, Typography, TextField, Button } from '@mui/material';

function Auth() {
  const [newAccount, setNewAccount] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);
  //이메일,비밀번호 변동하면 할일
  const handleChange = e => {
    const {name, value} = e.target;
    setForm(prev => ({ 
      ...prev,
      [name]: value,
    }));
  };

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
          onChange={handleChange}
        />
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          onChange={handleChange}
        />
        <Button sx={{ mt: 2 }} type="sumit" variant="contained">Login</Button>
      </Box>
    </>
  );
}
export default Auth;