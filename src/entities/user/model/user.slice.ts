import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./user.types";

const initialState: IUser = {
    uid: "",
    email: "",
    username: "",
    photoUrl: "",
    city: "",
    university: "",
    friends: [],
    posts: [],
};

const counterSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.photoUrl = action.payload.photoUrl;
            state.city = action.payload.city;
            state.university = action.payload.university;
            state.friends = action.payload.friends;
            state.posts = action.payload.posts;
        },
        setPhoto: (state, action) => {
            state.photoUrl = action.payload;
        },
    },
});

export const { setUser, setPhoto } = counterSlice.actions;

export default counterSlice.reducer;
