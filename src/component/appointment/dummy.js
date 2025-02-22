import translations from './D:/latestRamayan/ramayn/frontend/en.json';
import React, { useContext, useEffect, useState } from "react";
import {
  Backdrop,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Context } from "../../utils/context";
import dayjs from "dayjs";
import "./apointment-form.css";
import BasicDateCalendar from "../../components/basic-date-calendar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Drawer from "@mui/material/Drawer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";
 
 
const appointmentSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(2, "Name is too short"),
  mobile: Yup.number().required("Mobile no. is required"),
  dob: Yup.date()
    .required("Date of Birth is required")
    .test(
      "is-18",
      "You must be at least 18 years old",
      (value) => value && new Date().getFullYear() - new Date(value).getFullYear() >= 18
    ),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string()
    .required("Address is required")
    .min(10, "Address is too short"),
  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  state: Yup.string().required("State is required"),
 pincode: Yup.string()
  .required("Pincode is required")
  .min(6, "Pincode must be exactly 6 digits")
  .max(6, "Pincode must be exactly 6 digits")
  .matches(/^\d{6}$/, "Pincode must be exactly 6 digits"),
 
});
 
export default function AppointmentForm({ isVisible }) {
  const [formData, setFormData] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const [context, setContext] = useContext(Context);
  const [open, setOpen] = useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
 
  useEffect(() => {
    // Set Formik field values when data from context changes
    if (context?.selectedDate) {
      //  console.log(context);
      formik.setFieldValue(
        "dateTime",
        context?.selectedDate?.format("DD-MM-YYYY") + ", " + context?.slot
      );
    }
  }, [context?.selectedDate, context?.slot]);
 
 
 
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      address: "",
      dob: "",
      gender: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
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
        dob: values.dob,
        mobile: values.mobile,
        gender: values.gender,
        email: values.email,
        address: mergedAddress,
      };
      console.log("Submitted Data:", formData);
      alert("Form submitted successfully!");
      // setFormData(formDetails);
      try {
        const response = await axios.post(
          "https://650a-2405-201-4055-3069-e483-4f8-3924-c9fc.ngrok-free.app/api/form-data",
          formDetails
        );
        // alert('Data saved successfully!');
        setConfirmation(true);
        setTimeout(() => {
          handleCloseBd();
          setState({ ...state, ["right"]: false });
        }, 4000);
        formik.resetForm();
        console.log(values);
        // setFormData({ name: '', mobile: '', email: '', address: '' }); // Reset form
        // onDataSaved(response.data); // Notify parent to update data
      } catch (error) {
        console.error("Error saving data:", error);
        alert("Failed to save data!");
      }
    },
  });
 
  const handleCloseBd = () => {
    setOpen(false);
  };
 
  const handleOpenBd = () => {
    setOpen(true);
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
     // Trigger location fetch only when the drawer opens
  if (open) {
    fetchLocationAndAddress();
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
              formik.setValues({ city, district, state, pincode, address });
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


 
  return (
    <div>
      <CalendarMonth
        sx={{ color: "white" }}
        onClick={toggleDrawer("right", true)}
      />
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div>
          <div className="appoint-head">{translations.dummy.Book_Your_Ramayan}</div>
          {/* <BasicDateCalendar></BasicDateCalendar> */}
          <form
            onSubmit={formik.handleSubmit}
            noValidate
            className="flex flex-column m-4"
          >
            <TextField
              size="small"
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              margin="normal"
            />
 
            <TextField
              size="small"
              label="Mobile No."
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
              margin="normal"
            />
 
            <TextField
              size="small"
              label="E-Mail Id"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
            <RadioGroup row name="gender" value={formik.values.gender} onChange={formik.handleChange}>
              <FormControlLabel value={translations.dummy.Male} control={<Radio />} label="Male" />
              <FormControlLabel value={translations.dummy.Female} control={<Radio />} label="Female" />
            </RadioGroup>
            {formik.touched.gender && formik.errors.gender && (
              <Typography color="error">{formik.errors.gender}</Typography>
            )}
            <TextField
              size="small"
              type="date"
              fullWidth
              label="Date of Birth"
              name="dob"
              variant="outlined"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.dob && formik.errors.dob}
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              InputLabelProps={{
                shrink: true, // Keeps the label positioned correctly for a date field
              }}
              margin="normal"
            />
 
            <TextField
              size="small"
              fullWidth
              label="City"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined"
              helperText={formik.touched.city && Boolean(formik.errors.city)}
              error={formik.touched.city && formik.errors.city}
              margin="normal"
            />
            <TextField
              size="small"
              fullWidth
              label="District"
              name="district"
              variant="outlined"
              value={formik.values.district}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.district && Boolean(formik.errors.district)}
              error={formik.touched.district && formik.errors.district}
              margin="normal"
            />
            <TextField
              size="small"
              fullWidth
              label="State"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined"
              helperText={formik.touched.state && Boolean(formik.errors.state)}
              error={formik.touched.state && formik.errors.state}
              margin="normal"
            />
            <TextField
              size="small"
              fullWidth
              label="Pincode"
              name="pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined"
              helperText={formik.touched.pincode && Boolean(formik.errors.pincode)}
              error={formik.touched.pincode && formik.errors.pincode}
              margin="normal"
            />
            <TextField
              size="small"
              label="Area,Street,Sector,Village"
              name="address"
              multiline
              // rows={4}
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              margin="normal"
            />
 
            <Button
              variant="contained"
              type="submit"
              // disabled={handleSubmit}
              sx={{
                mt: 2,
                color: "white",
                fontSize: 17,
                fontWeight: 600,
              }}
            >{translations.dummy.Save}</Button>
            {/* Overlay */}
            <div>
              {/* <Button onClick={handleOpenBd}>{translations.dummy.Show_backdrop}</Button> */}
              <Backdrop
                sx={theme => ({
                  color: "#fff",
                  zIndex: theme.zIndex.drawer + 1,
                  width: "371px",
                  right: 0,
                  left: "unset",
                  backgroundColor: "#000",
                  opacity: "0.7 !important",
                })}
                open={open}
                onClick={handleCloseBd}
              >
                <div style={{ textAlign: "center", margin: "2rem" }}>
                  <Zoom
                    in={open}
                    style={{ transitionDelay: open ? "500ms" : "0ms" }}
                  >
                    <CheckCircleIcon
                      style={{ color: "#00ff0d", fontSize: "4rem" }}
                    />
                  </Zoom>
 
                  <Typography variant="body1" display="block">
                    Thank you for Ramayan request, our team will be sending you
                    booking id and shipment details.
                  </Typography>
                </div>
              </Backdrop>
            </div>
          </form>
        </div>
      </Drawer>
 
      {/* ))} */}
    </div>
  );
}
