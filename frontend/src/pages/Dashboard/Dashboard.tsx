import React, { useEffect } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../../shared/utils/auth";
// import setUserDetails from "../../store/reducers/user";
// import { useDispatch } from "react-redux";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  // const dispatch = useDispatch();

  // 토큰이 없다면 로그아웃 처리
  useEffect(() => {
    const userDetails = localStorage.getItem("dc-user");

    if (!userDetails) {
      // window.location.pathname = "login";
      logout();
    } else {
      console.log("dash console", JSON.parse(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
