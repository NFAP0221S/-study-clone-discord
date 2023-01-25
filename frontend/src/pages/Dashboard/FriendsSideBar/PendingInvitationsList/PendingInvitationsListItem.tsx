import React, { useState } from "react";
import { Tooltip, Typography, Box } from "@mui/material";
// import { Box } from "@mui/system";
import Avatar from "../../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

interface PendingInvitationsListItemProps {
  id: string;
  username: string;
  mail: string;
  // acceptFriendInvitation: () => void;
}

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
}: // acceptFriendInvitation = () => {},
PendingInvitationsListItemProps) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAcceptInvitation = () => {
    // acceptFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  const handleRejectInvitation = () => {
    // rejectFriendInvitation({ id });
    setButtonsDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} large={false} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonsDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
