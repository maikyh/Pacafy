import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51LJ3ffKhUn8SBYozuabGxvQrD7PqnIqu0o8JulEg6hmPWMsq3nfACWRVlvELQVTlIf769iFOyrx4WFGtWONeMRSk00ch3GtAFm"
);