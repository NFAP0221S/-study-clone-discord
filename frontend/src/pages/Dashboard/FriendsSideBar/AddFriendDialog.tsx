import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateMail } from "../../../shared/utils/validators";
import InputWithLabel from "../../../shared/components/InputWithLabel";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import { DialogActions } from "@mui/material";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import { sendFriendInvitation } from "../../../store/actions/friendsAction";

interface AddFriendDialogProps {
  isDialogOpen: any;
  closeDialogHandler: any;
  //   sendFriendInvitation: () => any;
}

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
}: //   sendFriendInvitation = () => {},
AddFriendDialogProps): JSX.Element => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {
    // send friend req to server
    console.log("친구초대");
    dispatch(
      sendFriendInvitation({
        targetMailAddress: mail,
      })
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [setIsFormValid, mail]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              친구추가할 이메일을 입력 후 Enter를 눌러주세요
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="보내기"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
