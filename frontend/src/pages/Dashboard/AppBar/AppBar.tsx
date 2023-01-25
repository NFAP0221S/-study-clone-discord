import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",

  padding: "0 15px",

  width: "calc(100% - 326px)",
  height: "48px",

  display: "flex",
  alignItems: "center",

  justifyContent: "space-between",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
});

const AppBar = () => {
  return (
    <MainContainer>
      <DropdownMenu />
    </MainContainer>
  );
};

export default AppBar;
