import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  polyline: [],
  isLoading: false,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    getRouteFetch: (state) => {
      state.isLoading = true;
    },
    getRouteSaccess: (state, action) => {
      state.polyline = action.payload;
      state.isLoading = false;
    },
    getRouteFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getRouteFetch, getRouteSaccess, getRouteFailure } =
  routeSlice.actions;
export default routeSlice.reducer;
