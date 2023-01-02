import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userDetails: string;
}

const initialState: UserState = {
  userDetails: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => builder
});

// export default userSlice;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
