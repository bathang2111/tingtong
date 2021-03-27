import { createSlice } from "@reduxjs/toolkit";

const Message = createSlice({
    name: "message",
    initialState: { isOpen: false, isOpenChatWindow: false },
    reducers: {
        ToggleListChat: state => {
            state.isOpen = !state.isOpen;
            return state;
        },
        ToggleChatWindow: (state) => {
            state.isOpenChatWindow = !state.isOpenChatWindow;
            return state;
        }
    }
})

const { reducer, actions } = Message;
export const { ToggleListChat, ToggleChatWindow } = actions;
export default reducer;