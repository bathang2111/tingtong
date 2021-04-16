import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MessageApi from "../../api/messageApi";

export const GetRoomChat = createAsyncThunk(
  //Tạo và trả về room id
  "Message/getRoomChat",
  async (params, thunkAPI) => {
    const Room = await MessageApi.CreateRoom(params);
    return Room.data;
  }
);

export const GetRoomHistories = createAsyncThunk(
  "Message/getAllRoom",
  async (params, thunkApi) => {
    const listRoom = await MessageApi.GetAllRoom();
    return listRoom;
  }
);

export const GetContentByRoomId = createAsyncThunk(
  "Message/getContent",
  async (params, thunkApi) => {
    const content = await MessageApi.GetContentMessage(params);
    return content;
  }
);

const Message = createSlice({
  name: "message",
  initialState: {
    isOpen: false, // toggle chat list
    isOpenChatWindow: false, //chat box
    isChatTing: false,
    listChatTing: [], //danh sach cac doan chat dang join room
    chatContent: { roomId: "", name: "", avarar: "", content: {} },
    roomHistories: {}, //list chat
  },
  reducers: {
    ToggleListChat: (state) => {
      state.isOpen = !state.isOpen;
      return state;
    },
    OpenChatWindow: (state) => {
      state.isOpenChatWindow = true;
    },
    CloseChatWindow: (state) => {
      state.isOpenChatWindow = false;
      return state;
    },
    PushMessageContent: (state, action) => {
      state.chatContent.content.list.push(action.payload);
    },
    //clear chatContent
    ClearChatContent: (state, action) => {
      state.listChatTing.forEach((item, index) => {
        if (item.roomId == state.chatContent.roomId) {
          state.listChatTing.splice(index, 1);
        }
      });
      if (state.listChatTing.length > 0) {
        state.chatContent.content = state.listChatTing[0].chatContent;
        state.chatContent.roomId = state.listChatTing[0].roomId;
      } else {
        state.chatContent.content = {};
        state.chatContent.roomId = "";
      }
    },
    //set roomid now
    setRoomId: (state, action) => {
      state.chatContent.roomId = action.payload.id;
      state.chatContent.name = action.payload.name;
      state.chatContent.avarar = action.payload.avarar || "";
      return state;
    },
    //change main chat content:
    ChangeConversation: (state, action) => {
      state.listChatTing.forEach((item, index) => {
        if (item.roomId == state.chatContent.roomId) {
          state.listChatTing[index].chatContent = state.chatContent.content;
          return;
        }
      });
      state.listChatTing[action.payload].notification = 0;
      state.chatContent.content =
        state.listChatTing[action.payload].chatContent;
      state.chatContent.roomId = state.listChatTing[action.payload].roomId;
      return state;
    },
    //them notification
    setNotification: (state, action) => {
      state.listChatTing.forEach((item, index) => {
        if (item.roomId == action.payload.id) {
          state.listChatTing[index].chatContent.list.push(
            action.payload.content
          );
          state.listChatTing[index].notification += 1;
          return state;
        }
      });
    },
    //them 1 cuoc hoi thoai vao trang thai dang chat
    PushChatTing: (state, action) => {
      let check = false;
      state.listChatTing.forEach((item) => {
        if (action.payload.roomId == item.roomId) {
          check = true;
          return;
        }
      });
      if (check) return;
      state.listChatTing.push(action.payload);
    },
  },
  extraReducers: {
    [GetRoomChat.pending]: (state, action) => {},
    [GetRoomChat.rejected]: () => {},
    [GetRoomChat.fulfilled]: (state, action) => {
      state.roomChat = action.payload;
      return state;
    },

    [GetRoomHistories.pending]: (state, action) => {},
    [GetRoomHistories.rejected]: () => {},
    [GetRoomHistories.fulfilled]: (state, action) => {
      state.roomHistories = action.payload;
      return state;
    },

    [GetContentByRoomId.pending]: (state, action) => {},
    [GetContentByRoomId.rejected]: () => {},
    [GetContentByRoomId.fulfilled]: (state, action) => {
      state.chatContent.content = action.payload;
      state.chatContent.content.list.reverse();
      return state;
    },
  },
});

const { reducer, actions } = Message;
export const {
  ToggleListChat,
  OpenChatWindow,
  CloseChatWindow,
  PushChatTing,
  setRoomId,
  PushMessageContent,
  ClearChatContent,
  ChangeConversation,
  setNotification,
} = actions;
export default reducer;
