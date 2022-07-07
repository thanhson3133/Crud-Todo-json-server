import { Box } from "@mui/material";
import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <Box sx={{ mt: "20%", ml: "48%" }}>
      <TailSpin color="#0ead69" height="100" width="110" />
    </Box>
  );
}
