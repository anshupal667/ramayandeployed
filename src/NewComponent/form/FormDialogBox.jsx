import React from "react";
import { Dialog, DialogContent, Slide, IconButton, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AppointmentForm from "../../component/appointment/appointment-form";
import { Col, Row } from "react-bootstrap";
import SuccessDialog from "../../component/appointment/SuccessDialog";

// Smooth Slide Transition with Custom Duration
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={{ enter: 900, exit: 400 }} />;
});

export default function CustomDialog({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile view
    // Success Dialog State
    const [openBackdrop, setOpenBackdrop] = React.useState(false);
   // Function to close dialog when form submission is successful
   const handleSuccess = () => {
    onClose();
    setOpenBackdrop(true); // Show success dialog
  };
  return (
    <>
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullScreen={isMobile} // Fullscreen on mobile
      fullWidth
      TransitionComponent={Transition}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "35px", // Keep border-radius consistent
          maxHeight:"none"
        },
        "& MuiPaper-root-MuiDialog-paper": {
         maxheight:"auto"
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "white",
          zIndex: 2,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          backgroundImage: "url('./images/formbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          color: "white",
          position: "relative",
          padding: isMobile ? "0px" : "0px 10px", // Remove padding in mobile view
          height: isMobile ? "100vh" : "auto", // Full height in mobile view
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Left: Image (Hidden on Mobile) */}
        {!isMobile && (
          <div
            style={{
              flex: 1, // Image takes more space
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "12px",
            }}
          >
            <img
              src="./images/formbackground.png"
              alt="Illustration"
              style={{
                width: "80%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        )}

        {/* Right: Form (Flexible size) */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", padding: isMobile ? "0px" : "12px" }}>
          <AppointmentForm  onSuccess={handleSuccess}/>
        </div>
      </DialogContent>
    </Dialog>

          {/* Success Message Dialog */}
          <SuccessDialog open={openBackdrop} onClose={() => setOpenBackdrop(false)} />
</>
  );
}
