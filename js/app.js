"use strict";

// app.js - Global JavaScript functionality for all pages
import { initializeDatePickers } from "./datePicker.js";
import { initializeFormValidation } from "./formValidation.js";
import { initializePricingCalculation } from "./pricingCalculation.js";
import { initializeBookingDetails } from "./bookingDetails.js";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

window.Webflow ||= [];
window.Webflow.push(() => {
  initializeDatePickers();
  initializeBookingDetails();
  initializeFormValidation();
  initializePricingCalculation();
});
