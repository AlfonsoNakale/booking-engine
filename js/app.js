"use strict";

// app.js - Global JavaScript functionality for all pages
const { initializeDatePickers } = require("./datePicker.js");
const { initializeFormValidation } = require("./formValidation.js");
const { initializePricingCalculation } = require("./pricingCalculation.js");
const { initializeBookingDetails } = require("./bookingDetails.js");
const flatpickr = require("flatpickr");
require("flatpickr/dist/flatpickr.css");

window.Webflow ||= [];
window.Webflow.push(() => {
  initializeDatePickers();
  initializeBookingDetails();
  initializeFormValidation();
  initializePricingCalculation();
});
