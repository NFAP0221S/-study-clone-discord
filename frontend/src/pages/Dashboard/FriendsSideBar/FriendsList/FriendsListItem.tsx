import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../../../shared/components/Avatar";
import { Typography } from "@mui/material";

interface FriendsListItemProps {
  id: number;
  username: string;
  isOnline: boolean;
}

const FriendsListItem = ({
  id,
  username,
  isOnline,
}: FriendsListItemProps): JSX.Element => {
  return (
    <Button
      style={{
        position: "relative",
        marginTop: "10px",
        width: "100%",
        height: "42px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "block",
      }}
    >
      <Avatar username={username} large={false} />
      <Typography
        style={{
          marginLeft: "7px",
          fontWeight: 700,
          color: "#8e9297",
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
    </Button>
  );
};

export default FriendsListItem;
