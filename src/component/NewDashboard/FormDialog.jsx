import translations from './D:/latestRamayan/ramayn/frontend/en.json';
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AppointmentForm from '../appointment/appointment-form';
import './form.css'

// Transition Component for Smooth Slide Effect
const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      timeout={{ enter: 600, exit: 400 }} // Smooth transition duration
      easing={{
        enter: 'ease-out', // Smooth ease-in effect while appearing
        exit: 'ease-in', // Smooth ease-out effect while disappearing
      }}
    />
  );
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiPaper-root': {
    width: '80%',
    maxWidth: 'none',
    height: '100%',
    borderRadius: '16px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  
  return (
    <DialogTitle sx={{ m: 0 ,p: 1}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label={translations.FormDialog.close}
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
  
export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  // Callback function to close dialog when submission is successful
  const handleSuccess = () => {
    setOpen(false);
  };
console.log("flag",open)
  return (
    <div>
      <button variant="outlined" onClick={handleClickOpen} className="cta-button">{translations.FormDialog.Order_Now}</button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition} // Using the customized Slide transition
        keepMounted
        sx={{"& .MuiPaper-root":{background:"#28171D",scrollbarWidth: "none"},"& .MuiDialogContent-root":{scrollbarWidth:"none"}}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} className="appoint-head" style={{padding:"12"}}>
        <div style={{textAlign:"center"}}>Order Your Ramayana</div>
        </BootstrapDialogTitle>
        <DialogContent>
          <AppointmentForm onSuccess={handleSuccess} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

