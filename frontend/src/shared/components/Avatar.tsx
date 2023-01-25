import React from "react";
import { styled } from "@mui/system";

interface AvatarProps {
  username: string;
  large: any;
}

const AvaterPreview = styled("div")({
  height: "42px",
  width: "42px",
  backgroundColor: "#5865f2",
  borderRadius: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "700",
  marginLeft: "5px",
  color: "white",
});

const Avatar = ({ username, large }: AvatarProps): JSX.Element => {
  return (
    <AvaterPreview style={large ? { height: "80px", width: "80px" } : {}}>
      {username.substring(0, 2)}
    </AvaterPreview>
  );
};

export default Avatar;
