"use client"; // ✅ Runs only on the client side

import { useEffect } from "react";
import useScrollbar from "../helper/useScrollbar"; // Import the hook

const ClientWrapper = () => {
  useScrollbar(); // Activate dynamic scrollbar effect
  return null; // No UI needed, just the effect
};

export default ClientWrapper;
