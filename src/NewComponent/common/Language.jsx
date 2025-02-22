import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Menu, MenuItem, Button, Box, Typography } from "@mui/material";
import { MdLanguage } from "react-icons/md";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    // Retrieve stored language from localStorage on component mount
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      i18next.changeLanguage(savedLanguage);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lng) => {
    if (lng) {
      i18next.changeLanguage(lng);
      localStorage.setItem("selectedLanguage", lng); // Save selected language
    }
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Language Selector Button */}
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          background: "transparent",
          color: "white",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          gap: 0,
          fontSize: "1rem",
          boxShadow: "none",
          "&:hover": { backgroundColor: "rgba(255, 165, 0, 0.2)" },
        }}
      >
        <MdLanguage fontSize="1.5rem" color="#eab180" />
        {i18n.language.toUpperCase()}
      </Button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "10px",
            top: "32px",
            padding: "0px 0",
            background: "#e65116",
            color: "white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
          },
        }}
      >
        {languages.map(({ code, label }) => (
          <MenuItem
            key={code}
            onClick={() => handleClose(code)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              padding: "5px 20px",
              "&:hover": { backgroundColor: "#ff7043" },
            }}
          >
            <Typography fontSize="1rem" fontWeight="500">
              {label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
