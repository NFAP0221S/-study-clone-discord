import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, register } from "../actions/authThunks";

interface UserAuth {
  me: null;
  loginLoading: boolean;
  loginDone: boolean;
  loginError: null | unknown;
  registerLoading: boolean;
  registerDone: boolean;
  registerError: null | unknown;
}

const initialState: UserAuth = {
  me: null,
  loginLoading: false, // 로그인
  loginDone: false,
  loginError: null,
  registerLoading: false, // 회원가입
  registerDone: false,
  registerError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
        state.loginDone = false;
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.me = action.payload;
        state.loginDone = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.registerLoading = true;
        state.registerDone = false;
        state.registerError = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.registerLoading = false;
        state.registerDone = true;
        localStorage.setItem("dc-user", JSON.stringify(action.payload));
      })
      .addCase(register.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerError = action.payload;
      }),
});

// export default userSlice;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
