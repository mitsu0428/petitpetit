import { style } from "@vanilla-extract/css";

export const Wrap = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "8px",
});

export const Input = style({
  width: "100%",
  fontSize: "1.2rem",
  border: "1px solid #ccc",
  borderRadius: "16px",
  padding: "8px 16px",
});

export const Button = style({
  fontSize: "1.2rem",
  border: "1px solid #ccc",
  borderRadius: "16px",
  padding: "8px 16px",
  cursor: "pointer",
  backgroundColor: "#f0f0f0",
  ":hover": {
    backgroundColor: "#e0e0e0",
  },
});
