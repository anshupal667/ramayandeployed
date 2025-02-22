import React, { useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SuccessDialog({ open, onClose }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [open, onClose]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <CheckCircleIcon sx={{ fontSize: 50, color: "#4CAF50", mb: 1 }} />
        <DialogTitle sx={{ fontSize: "20px", fontWeight: "bold", color: "#c02800", paddingBottom: "8px" }}>
          Successfully Submitted
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ color: "#666", fontSize: "16px" }}>
            Your form has been successfully submitted.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: "16px" }}>
          <Button onClick={onClose} variant="contained" sx={{ backgroundColor: "#c02800;", color: "#fff", textTransform: "none",padding:"10px 35px" }}>
            OK
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
