const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [
//     {
//       user: null,
//       isError: false,
//       isSuccess: false,
//       isLoading: false,
//       message: "",
//     },
//   ],
//   reducer: {
//     reset: (state) => {
//       state.isError = false;
//       state.isSuccess = false;
//       state.isLoading = false;
//       state.message = "";
//     },
//   },
// });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

// export const { reset } = cartSlice.actions;

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
