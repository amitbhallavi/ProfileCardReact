import { configureStore, createSlice } from "@reduxjs/toolkit";

// ── Card Slice ──────────────────────────────────────────────────
const cardSlice = createSlice({
  name: "card",
  initialState: {
    isFlipped: false,
    activeLink: null, // "whatsapp" | "linkedin" | "instagram"
  },
  reducers: {
    flipCard(state) {
      state.isFlipped = !state.isFlipped;
    },
    setActiveLink(state, action) {
      state.activeLink = action.payload;
    },
    clearActiveLink(state) {
      state.activeLink = null;
    },
  },
});

export const { flipCard, setActiveLink, clearActiveLink } = cardSlice.actions;

const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
  },
});

export default store;
