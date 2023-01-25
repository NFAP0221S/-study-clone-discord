import React from "react";
import { Typography } from "@mui/material";

interface FriendsTitleProps {
  title: string;
}

const FriendsTitle = ({ title }: FriendsTitleProps) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: "#8e9297",
        fontSize: "14px",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
