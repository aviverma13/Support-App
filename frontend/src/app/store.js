import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slice/cartSlice";
import authSlice from "../features/auth/authSlice";
import ticketReducer from "../features/tickets/ticketSlice";
import noteReducer from "../features/notes/noteSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice,
    ticket: ticketReducer,
    notes: noteReducer,
  },
});

export default store;
