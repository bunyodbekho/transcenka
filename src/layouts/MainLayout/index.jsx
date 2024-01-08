import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useState } from "react";

export default function MainLayout() {
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}
