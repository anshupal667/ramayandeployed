
import React, { useContext, useEffect, useState, useTransition } from "react";
import {
  Backdrop,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Zoom,
  Box,
  Grid,
  InputAdornment,
  IconButton,
  Modal,
  SnackbarContent,
} from "@mui/material";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Context } from "../context";
import dayjs from "dayjs";
import "./apointment-form.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// import BasicDateCalendar from "../../components/basic-date-calendar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Drawer from "@mui/material/Drawer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";
import { Padding } from "@mui/icons-material";
import { Snackbar } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";



// dob: Yup.date()
//   .required("Date of Birth is required")
//   .test(
//     "is-18",
//     "You must be at least 18 years old",
//     (value) => value && new Date().getFullYear() - new Date(value).getFullYear() >= 18
//   ),
// gender: Yup.string().required("Gender is required"),

const appointmentSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short"),

  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Mobile number must be 10 digits and start with 6-9"), // Ensures 10-digit Indian mobile numbers

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Only Gmail addresses are allowed"), // Allows only Gmail addresses

  address: Yup.string()
    .required("Address is required")
    .min(10, "Address is too short"),

  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  language: Yup.string().required("Language is required").default("Hindi"),

  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "Pincode must be exactly 6 digits"), // Ensures 6-digit pincode
});


export default function AppointmentForm({ isVisible, onSuccess }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  // const [context, setContext] = useContext(Context);
  const [openbackdrop, setOpenbackdrop] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // OTP sent status
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // OTP input state
  const [isOtpVerified, setIsOtpVerified] = useState(false); // OTP verification status
  const [otpButtonText, setOtpButtonText] = useState("verify"); // OTP button text state
  const [otpVerified, setOtpVerified] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openmodal, setOpenmodal] = useState(false);
  const [errorQuota, setErrorQuota] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // useEffect(() => {
  //   // Set Formik field values when data from context changes
  //   if (context?.selectedDate) {
  //     //  console.log(context);
  //     formik.setFieldValue(
  //       "dateTime",
  //       context?.selectedDate?.format("DD-MM-YYYY") + ", " + context?.slot
  //     );
  //   }
  // }, [context?.selectedDate, context?.slot]);



  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      address: "",
      // dob: "",
      // gender: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
      country: "",
      language: "Hindi",
      // setOtp:[''],
      //  invitationCard: null,
      dateTime: dayjs("2024-10-10")?.format("DD-MM-YYYY") + ", 12:00 - 2:00 PM",
      // inPersonMeeting: false,
    },

    validationSchema: appointmentSchema,
    onSubmit: async values => {
      // fadeOpen();
      handleOpenBd();
      const mergedAddress = [
        values.address,
        values.city,
        values.district,
        values.state,
        values.pincode,
      ].filter(Boolean).join(", ");

      const formDetails = {
        name: values.name,
        // dob: values.dob,
        mobile: values.mobile,
        city: values.city,
        district: values.district,
        state: values.state,
        pincode: values.pincode,
        // gender: values.gender,
        email: values.email,
        address: values.address,
        country: values.country,
        language: values.language
      };
      console.log("Submitted Data:", formData);
      // alert("Form submitted successfully!");
      // setFormData(formDetails);
      try {
        const response = await axios.post(
          "http://localhost:3004/api/form-data",
          formDetails
        );
        // Check if response contains the booking full message
        // ✅ Only open Backdrop if the form is successfully saved
        if (response.status === 200) {
          // setOpenbackdrop(true);
          setTimeout(() => {
            setOpen(false);
            setState({ ...state, ["right"]: false });
          }, 4000);
          // Notify CustomizedDialogs to close

        }
        onSuccess();

        // alert('Data saved successfully!');
        // setConfirmation(true);
        // setTimeout(() => {
        //   handleCloseBd();
        //   setState({ ...state, ["right"]: false });
        // }, 4000);
        formik.resetForm();
        setOtp(['', '', '', '', '', '']);
        setOtpSent(false);
        setIsOtpVerified(false);
        console.log(values);
        // setFormData({ name: '', mobile: '', email: '', address: '' }); // Reset form
        // onDataSaved(response.data); // Notify parent to update data
      } catch (error) {
        console.error("Error saving data:", error);
        // Check if the error message contains the booking full message
        // const errorMsg = error.response?.data?.message || response.error;
        if (error.response && error.response.status === 400 && error.response.data.error.includes("Today's Ramayan booking quota is full")) {
          setErrorQuota("Today's Ramayan booking quota is full. Please try again tomorrow.");
          setOpenPopup(true);
        } else {
          alert("Failed to save data!");
        }


        alert("Failed to save data!");
      }
    },
  });

  const handleCloseBd = () => {
    setOpenbackdrop(false);
  };

  const handleOpenBd = () => {
    setOpenbackdrop(true);
  };

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });

  };


  // Proceed with sending OTP
  const handleOtpSend = async () => {
    try {
      await axios.post('http://localhost:3004/send-otp', {
        mobile: formik.values.mobile
      });
      setOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);

      if (error.response && error.response) {
        console.log("Error response:", error.response);
        const errorMessage = error.response.data.error || 'Error sending OTP';
        setSnackbarMessage(errorMessage);
        setTimeout(() => {
          setSnackbarMessage("");
        }, 3000);
      } else {
        setSnackbarMessage('Something went wrong. Please try again.');
      }

      setSnackbarOpen(true);
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    console.log("OTP:", otp);
    try {
      const otpString = otp.join("");
      const otpResponse = await axios.post("http://localhost:3004/verify-otp", { mobile: formik.values.mobile, otp: otpString });

      if (otpResponse.status === 200) {
        setIsOtpVerified(true);
        setOtpVerified(true);
        setOtpButtonText("Verified");
        alert("OTP verified successfully.");
      } else {
        alert("Invalid OTP");

      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarMessage(""); // Hide the message when close button is clicked
  };

  const validatePincode = async () => {
    if (formik.values.pincode.length === 6) {
      try {
        const response = await axios.get(`http://localhost:3004/available-pin-code?pinCode=${formik.values.pincode}`,
          {
            headers: {
              "ngrok-skip-browser-warning": 69420,
            },
          }

        );

        if (!response.message === "No products found for the given pin code") {
          setErrorMessage("Delivery is not available at this pincode.");
          setOpenmodal(true);
        }
      } catch (error) {
        setErrorMessage("Error checking pincode. Please try again.");
        setOpenmodal(true);
      }
    }
  };

  // Handle OTP input changes
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus the next input field automatically
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const fetchLocationAndAddress = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            // Replace with your API key and endpoint
            const apiKey = "5bEdYZKYd8UuQ7yAa0VpZvwPc4XFwOGHos1MOYe3";
            const response = await axios.get(
              "https://api.olamaps.io/places/v1/reverse-geocode",
              {
                params: {
                  latlng: `${latitude},${longitude}`,
                  language: "hi",
                  api_key: apiKey,
                },
              }
            );

            if (response.data.results[0]) {
              const addressComponents = response.data.results[0].address_components;
              const country = addressComponents.find((comp) =>
                comp.types.includes("country")
              )?.long_name || "";
              const city = addressComponents.find((comp) =>
                comp.types.includes("locality")
              )?.long_name || "";
              const district = addressComponents.find((comp) =>
                comp.types.includes("administrative_area_level_2")
              )?.long_name || "";
              const state = addressComponents.find((comp) =>
                comp.types.includes("administrative_area_level_1")
              )?.long_name || "";
              const pincode = addressComponents.find((comp) =>
                comp.types.includes("postal_code")
              )?.long_name || "";
              const address = response.data.results[0].formatted_address;

              // Update Formik state
              formik.setValues({ city, district, state, pincode, address, country });
            }
          } catch (error) {
            console.error("Error fetching address from API:", error);
          }
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert("Geolocation permission denied. Please enable location access.");
            formik.setValues({ city: "", district: "", state: "", pincode: "", address: "" });
          } else {
            alert("Unable to retrieve your location.");
          }
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  // New useEffect to check pincode validity once 6 digits are entered
  useEffect(() => {
    const { pincode } = formik.values;
    if (pincode && pincode.length === 6) {
      axios
        .get(`http://localhost:3005/available-pin-code?pinCode=${pincode}`)
        .then((response) => {
          // Assuming your API returns { available: true/false }
          if (response.data && !response.data.available) {
            // Set a custom error for the pincode field if not available.
            formik.setFieldError("pincode", "This pincode is not available.");
          }
        })
        .catch((error) => {
          console.error("Error checking pincode:", error);
          // Optionally set an error if the API fails
          formik.setFieldError("pincode", "Error verifying the pincode.");
        });
    }
  }, [formik.values.pincode]); // This effect runs whenever the pincode value changes
  // Call fetchLocationAndAddress when the component mounts
  useEffect(() => {
    fetchLocationAndAddress();
  }, []);
  return (
    <div style={{ background: "#28171D", borderRadius: "15px 4pc", padding: "8px" }}>
      <div>
        {/* <div className="appoint-head">Order Your Ramayana</div> */}

        <form
          onSubmit={formik.handleSubmit}
          noValidate
          className="flex flex-column m-4"
        >
          <Grid container spacing={2}>
            {/* Left Section */}
            <Grid item xs={12} sm={12}>
              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  marginTop: "0px !important",
                  // Override autofill styles
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },

                }}
                fullWidth
                variant="outlined"
                size="small"
                label={t("Form.Name")}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                margin="normal"
              />

              {/* <Box sx={{ marginBottom: "-15px", color: " #FD8C50" }}>
                <RadioGroup row name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                  <FormControlLabel value="Male" control={<Radio />} label="Male"
                    sx={{
                      "& .Mui-checked": { color: "#FD8C50" },
                      "& .MuiSvgIcon-root": { fill: " #FD8C50" }
                    }} />
                  <FormControlLabel value="Female" control={<Radio />} label="Female"
                    sx={{
                      "& .Mui-checked": { color: "#FD8C50" },
                      "& .MuiSvgIcon-root": { fill: " #FD8C50" }
                    }} />
                </RadioGroup>
                {formik.touched.gender && formik.errors.gender && (
                  <Typography color="error">{formik.errors.gender}</Typography>
                )}
              </Box> */}
            </Grid>
            <Grid item xs={12} sm={6}>

              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiFormControl-root-MuiTextField": { marginTop: "0px" },
                  marginTop: "0px !important",
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },


                }}
                variant="outlined"
                fullWidth
                size="small"
                label={t("Form.Email")}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="normal"
              />

            </Grid>
            <Grid item xs={12} sm={6}>

              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },
                  marginTop: "0px !important"
                }}
                variant="outlined"
                fullWidth
                size="small"
                label={t("Form.Mobile")}
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                margin="normal"
                InputProps={{
                  endAdornment: (

                    <Button
                      disabled={
                        !formik.values.mobile ||
                        formik.errors.mobile ||
                        !/^[6-9]\d{9}$/.test(formik.values.mobile) // Ensures valid 10-digit mobile number
                      }
                      onClick={handleOtpSend}
                      sx={{
                        color: otpSent ? "green" : "#FD8C50",
                        fontSize: 12,
                        width: '80px',
                        padding: 0,
                      }}
                    >
                      {otpSent ? "OTP Sent" : "Send OTP"}
                    </Button>

                  ),
                }}
              />
              {otpSent && (
                <div className="otpinputs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      id={`otp-input-${index}`}
                      className='otp-input-class'
                      type="text"
                      value={value}
                      onChange={(e) => handleOtpChange(e, index)}
                      maxLength={1}
                      style={{
                        border: "1px solid #FD8C50",
                        color: "#FD8C50",
                        width: '20px',
                        height: '20px',
                        textAlign: 'center',
                        fontSize: '18px',
                        borderBottom: '2px solid black',
                        border: 'none',
                        outline: 'none',
                        margin: '0px',
                        // backgroundColor: 'transparent', // Optional for a clean look
                        color: 'black', // Adjust text color if needed
                      }}
                    />
                  ))}
                  <Button variant="contained" fontSize="small" onClick={handleOtpSubmit} disabled={isOtpVerified}>
                    {otpButtonText}
                  </Button>
                </div>
              )}

              {snackbarMessage && (
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "#e42313",
                    color: "white",
                    padding: "6px 10px",
                    fontSize: "14px",
                    borderRadius: "4px",
                    textAlign: "center",
                    zIndex: 10,
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <span>{snackbarMessage}</span>
                  <IconButton
                    onClick={handleCloseSnackbar}
                    sx={{ color: "white", padding: "0px", ml: 1 }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Grid>

            {/* <Grid item xs={12} sm={6}>

              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" }
                }}
                fullWidth
                variant="outlined"
                size="small"
                type="date"
                label="Date of Birth"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.dob && Boolean(formik.errors.dob)}
                helperText={formik.touched.dob && formik.errors.dob}
                InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },
                  marginTop: "0px !important"
                }}  
                select
                label={t("Form.Language")}
                name="language"
                value={formik.values.language || "Hindi"} // Ensure fallback value
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.language && Boolean(formik.errors.language)}
                helperText={formik.touched.language && formik.errors.language}
                margin="normal"
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
                <MenuItem value="Sanskrit">Sanskrit</MenuItem>
              </TextField>
            </Grid>
            {/* Right Section */}
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },
                  marginTop: "0px !important"
                }}
                variant="outlined"
                fullWidth
                size="small"
                label={t("Form.Country")}
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>

              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },
                  marginTop: "0px "
                }}
                variant="outlined"
                fullWidth
                size="small"
                label={t("Form.Pincode")}
                name="pincode"
                value={formik.values.pincode}
                onChange={formik.handleChange}
                onBlur={validatePincode}
                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                helperText={formik.touched.pincode && formik.errors.pincode}
                inputProps={{ maxLength: 6 }}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={6}>

              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "#FD8C50", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },
                  marginTop: "0px !important"
                }}
                variant="outlined"
                fullWidth
                size="small"
                label={t("Form.District")}
                name="district"
                value={formik.values.district}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.district && Boolean(formik.errors.district)}
                helperText={formik.touched.district && formik.errors.district}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>

              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },
                  marginTop: "0px !important"
                }}
                variant="outlined"
                fullWidth
                size="small"
                label={t("Form.City")}
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>

              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                    },
                  },
                  marginTop: "0px !important"
                }}
                variant="outlined"
                fullWidth
                size="small"
                label={t("Form.State")}
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={12}>

              <TextField
                sx={{
                  color: "red",
                  "& .MuiInputLabel-root": { color: "red" },
                  "& .MuiOutlinedInput-input": { border: "none", color: "#fff", borderRadius: "5px" },
                  // "& .MuiInputBase-input":{border: "1px solid #FD8C50"}
                  "& .MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { border: "1px solid red" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FD8C50" },
                  "& .MuiOutlinedInput-root": {
                    "& input:-webkit-autofill": {
                      WebkitBoxShadow: "0 0 0 1000px #28171D inset",
                      boxShadow: "0 0 0 1000px #28171D inset",
                      WebkitTextFillColor: "#fff",
                      transition: "background-color 5000s ease-in-out 0s",
                      background: "none"
                    },
                  },
                  marginTop: "0px "

                }}
                variant="outlined"
                fullWidth
                size="small"
                label={t("Form.Address")}
                name="address"
                multiline
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                margin="normal"
              />
            </Grid>
          </Grid>
          <div style={{ display: 'flex', width: "100%", justifyContent: "center" }}>
            <Button
              // fullWidth
              variant="contained"
              type="submit"
              disabled={!isOtpVerified}
              sx={{
                mt: 2,
                color: "white",
                fontSize: 17,
                fontWeight: 600,
                background: " #FD8C50",
                textTransform: "capitalize",
                padding: '7px 38px',
                borderRadius: '10  px',
                "&.Mui-disabled": {
                  backgroundColor: "rgb(241, 184, 153)", // Change background when disabled
                  color: "white", // Ensure text remains white
                },
              }}
            >Grab Now</Button>
          </div>
          {/* Overlay */}


        </form>
        {/* <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "#000",
              opacity: 0.7,
            }}
            open={openbackdrop} 
            onClick={handleCloseBd}
          >
            <div style={{ textAlign: "center", margin: "2rem" }}>
              <Zoom in={open} style={{ transitionDelay: open ? "500ms" : "0ms" }}>
                <CheckCircleIcon style={{ color: "#00ff0d", fontSize: "4rem" }} />
              </Zoom>
              <Typography variant="body1">
                Thank you for your Ramayan request. Our team will send you a booking ID and shipment details soon.
              </Typography>
            </div>
          </Backdrop> */}
        {/* <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Top-right position
        > */}
        {/* right: 63px;
        left: auto;
        width: 43vw;
        bottom: 206px; */}
        {/* <SnackbarContent
            style={{ backgroundColor: '#e42313', color: 'white' }} // Custom styling
            message={snackbarMessage}
          />
        </Snackbar> */}

        <Modal open={openmodal} onClose={() => setOpenmodal(false)}>
          <Box
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 350,
              bgcolor: "#ff9800",
              color: "white",
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              borderRadius: 1,
              boxShadow: 5,
            }}
          >
            <WarningAmberIcon sx={{ fontSize: 24 }} />
            <Typography
              variant="body1"
              sx={{ flex: 1, fontWeight: "bold", fontSize: "14px" }}
            >
              {errorMessage || "Delivery not available at your location."}
            </Typography>
            <IconButton onClick={() => setOpenmodal(false)} sx={{ color: "white", p: 0.5 }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Modal>


      </div>
    </div>
  );
}
