import React, { CSSProperties } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

interface RedirectInfoProps {
  text: string;
  redirectText: string;
  additionalStyles: CSSProperties;
  redirectHandler: () => void;
}

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}: RedirectInfoProps) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
