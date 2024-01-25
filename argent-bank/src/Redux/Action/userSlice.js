import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserDetails, postUserName } from "./userAction";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  isConnected: false,
  userConnectID: null,
  rememberMe: false,
  changeUserName: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.isConnected = false;
      state.rememberMe
        ? (state.userConnectID = JSON.parse(
            localStorage.getItem("userConnect")
          ))
        : (state.userConnectID = null);
    },
    rememberMeFunc: (state, { payload }) => {
      state.rememberMe = payload.remembMe;
    },
    changeUser: (state) => {
      state.changeUserName = !state.changeUserName;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userToken = payload.body.token;
        state.isConnected = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload === "Error: Password is invalid") {
          state.error = "Le mot de passe est incorrect";
        } else if (payload === "Error: User not found!") {
          state.error = "L'email est invalide";
        }
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.body;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.error
          : "Erreur de récupération des détails de l’utilisateur";
      })
      .addCase(postUserName.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUserName.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.body;
        state.changeUserName = false;
      })
      .addCase(postUserName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.error
          : "Erreur de mise à jour du nom d’utilisateur";
      });
  },
});

export const { logout, rememberMeFunc, changeUser } = userSlice.actions;
export default userSlice.reducer;
