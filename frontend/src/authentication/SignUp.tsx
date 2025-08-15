import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Divider,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Select, MenuItem, InputLabel, FormControl
} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../App.css";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [dob, setDob] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");


  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validate = () => {
    let isValid = true;

    if (!validateName(firstName)) {
      setFirstNameError("First name can only contain letters and spaces");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!validateName(lastName)) {
      setLastNameError("Last name can only contain letters and spaces");
      isValid = false;
    } else {
      setLastNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password !== confirmPassword) {
  setConfirmPasswordError("Passwords do not match");
  isValid = false;
} else {
  setConfirmPasswordError("");
}


    return isValid;
  };

  const handleSendOtp = async () => {
    try {
      const res = await fetch("https://relocate-backend.onrender.com/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        alert("OTP sent to your email");

        
        setIsOtpSent(true);
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const res = await fetch("https://relocate-backend.onrender.com/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });
      const data = await res.json();
      if (res.ok) {
        alert("Email verified successfully");
        setIsEmailVerified(true);
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    }
  };

  const inputStyles = {
    style: { color: "white" },
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (validate()) {
    try {
      const res = await fetch("https://relocate-backend.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          dob, 
          city,
          pincode,
          password
        })
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful");
        console.log(data);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }
  }
};

  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card sx={{ width: 500, bosizehadow: 3, backgroundColor: "#000000ff", color: "white" }}>
          <CardHeader title="Create Account" sx={{ textAlign: "center", color: "white" }} />
          <CardContent sx={{ color: "white" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
  <Button
    variant="outlined"
    sx={{
      borderColor: "white",
      color: "white",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      px: 3,
      width: "100%",
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      alt="Google logo"
      style={{ width: 20, height: 20 }}
    />
    Sign Up with Google
  </Button>
</Box>

            <Divider sx={{ my: 2, borderColor: "white", color: "white", '&::before, &::after': { borderColor: 'white' } }}>
                Or
            </Divider>

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                {/* First Name & Last Name */}
                <Grid size={7}>
                  <TextField
                    required
                    label="First Name"
                    fullWidth
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={!!firstNameError}
                    helperText={firstNameError}
                    InputLabelProps={inputStyles}
                    InputProps={inputStyles}
                    sx={{ '& .MuiOutlinedInput-root fieldset': { borderColor: 'white' } }}
                  />
                </Grid>
                <Grid size={5}>
                  <TextField
                    required
                    label="Last Name"
                    fullWidth
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={!!lastNameError}
                    helperText={lastNameError}
                    InputLabelProps={inputStyles}
                    InputProps={inputStyles}
                    sx={{ '& .MuiOutlinedInput-root fieldset': { borderColor: 'white' } }}
                  />
                </Grid>

                {/* Email & DOB */}
                <Grid size={8}>
                  <TextField
  required
  label="Email"
  type="email"
  fullWidth
  variant="outlined"
  value={email} 
  onChange={(e) => setEmail(e.target.value)}
  error={!!emailError}
  helperText={emailError} 
  InputLabelProps={inputStyles}
  InputProps={inputStyles}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'white' }
    }
  }}
/>

                </Grid>

                {!isOtpSent && (
                  <Grid size={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={handleSendOtp}
                    >
                      Send OTP
                    </Button>
                  </Grid>
                )}

                {/* OTP Input & Verify */}
                {isOtpSent && !isEmailVerified && (
                  <>
                    <Grid size={8}>
                      <TextField
                        label="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        fullWidth
                        InputLabelProps={inputStyles}
                        InputProps={inputStyles}
                      />
                    </Grid>
                    <Grid size={4}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleVerifyOtp}
                        fullWidth
                      >
                        Verify
                      </Button>
                    </Grid>
                  </>
                )}

                {isEmailVerified && (
                  <>
                    <Grid size={6}>
                      <TextField
                        label="Date of Birth"
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        fullWidth
                        InputLabelProps={{ shrink: true, style: { color: "white" } }}
                        InputProps={inputStyles}
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        label="Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        fullWidth
                        InputLabelProps={inputStyles}
                        InputProps={inputStyles}
                      />
                    </Grid>
                    <Grid size={6}>
                      <FormControl fullWidth>
                        <InputLabel sx={{ color: "white" }}>City</InputLabel>
                        <Select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          sx={{ color: "white", backgroundColor: "black" }}
                        >
                          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                          <MenuItem value="Mumbai">Mumbai</MenuItem>
                          <MenuItem value="Delhi">Delhi</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={6}>
  <TextField
    required
    label="Password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    fullWidth
    variant="outlined"
    InputLabelProps={inputStyles}
    InputProps={inputStyles}
    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }}
  />
</Grid>
<Grid size={6}>
  <TextField
    required
    label="Confirm Password"
    type="password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    error={!!confirmPasswordError}
    helperText={confirmPasswordError}
    fullWidth
    variant="outlined"
    InputLabelProps={inputStyles}
    InputProps={inputStyles}
    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }}
  />
</Grid>
                    <Grid size={12}>
                      <FormControlLabel
                        control={<Checkbox sx={{ color: "white" }} />}
                        label="I agree to the Terms and Conditions"
                        sx={{ color: "white" }}
                      />
                    </Grid>
                    <Grid size={12}>
                      <Button variant="contained" type="submit" fullWidth>
                        Sign Up
                      </Button>
                    </Grid>
                  </>
                )}

                <Grid size={12} textAlign="center">
                  <Link to="/signin" style={{ color: "#1976d2" }}>
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default SignUp;