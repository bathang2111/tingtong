import { createSlice } from "@reduxjs/toolkit";
import DefaultAvatar from "../../assets/images/avatar4.png"

const UserProfile = createSlice({
    name: "userProfile",
    initialState: { changeAvatar: false, image: DefaultAvatar },
    reducers: {
        ChangeAvatar: (state) => {
            state.changeAvatar = !state.changeAvatar;
            return state;
        },
        SaveAvatar: (state, action) => {
            state.image = action.payload;
            return state;
        }
    }
})

const { reducer, actions } = UserProfile;
export const { ChangeAvatar, SaveAvatar } = actions;
export default reducer;