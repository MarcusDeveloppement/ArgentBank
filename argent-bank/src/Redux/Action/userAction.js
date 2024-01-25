import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3001/api/v1";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        BASE_URL + "/user/login",
        {
          email,
          password,
        },
        config
      );
      localStorage.setItem("userToken", data.body.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/profile",
  async (arg, { getState }) => {
    try {
      const { user } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      const { data } = await axios.post(BASE_URL + "/user/profile", {}, config);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export const postUserName = createAsyncThunk(
  "user/newName",
  async ({ firstName, lastName }, { getState }) => {
    try {
      const firstNameUppercase =
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
      const lastNameUppercase =
        lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

      const { user } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      const { data } = await axios.put(
        BASE_URL + "/user/profile",
        { firstName: firstNameUppercase, lastName: lastNameUppercase },
        config
      );
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);
