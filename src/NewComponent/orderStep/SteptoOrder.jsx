import React from "react";
import { Grid, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import Heading from "../common/Headingtext";
import { useTranslation } from "react-i18next";

const steps = [
  { number: "01", text: "Click on Order now button" },
  { number: "02", text: "Fill your basic details including full address" },
  { number: "03", text: "Ramayan will be delivered to your address in 5-10 days" },
];

export default function OrderSteps() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Determine the correct image based on the selected language
  const orderStepImage =
    i18n.language === "hi"
      ? isMobile
        ? "./images/mobileorderstephindi (1).png"
        : "./images/orderstephindi (2).png"
      : isMobile
      ? "./images/orderstepmobile.png"
      : "./images/orderSteps.png";

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        background: "url('./images/orderstepbg.png') center/cover no-repeat",
      }}
    >
      {/* Title */}
      <Heading text={t("OrderSteps.OrderSteps")} width="30%" />

      {/* Responsive Image */}
      <Box>
        <img
          src={orderStepImage}
          alt="Order Steps"
          style={{
            width: isMobile ? "50%" : "70vw",
            height: isMobile ? "auto" : "100%",
            minHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
