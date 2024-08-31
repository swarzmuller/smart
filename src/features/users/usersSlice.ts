import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, FAILED, IDLE, LOADING, SUCCEEDED } from "@/constans";
import { Status, User } from "@/types";

export const fetchUsers = createAsyncThunk<User[], string>(
  "users/fetchByQuery",
  async (query) => {
    const response = await axios.get<User[]>(`${BASE_URL}/users?${query}`);
    return response.data;
  }
);

const initialState: { users: User[]; status: Status; error: string | null } = {
  users: [],
  status: IDLE,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = SUCCEEDED;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export default usersSlice.reducer;
