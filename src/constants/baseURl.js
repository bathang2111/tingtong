// export const BASE_URL = "https://api.tingtong.xyz/api"
// export const BASE_URL = "http://1.53.228.32:5002/api"
// export const BASE_URL = "http://103.130.218.64:5000/api";
export const FILE_URL =
  process.env.REACT_APP_BASE_URL_CDN + "/files" ||
  "https://cdn.tingtong.xyz/files";
export const BASE_URL = process.env.REACT_APP_BASE_URL + "/api" || "";
export const SOCKET_URL =
  process.env.REACT_APP_BASE_URL_SOCKET || "socket.tingtong.xyz";
export const BASE_URL_WINDOW_CALL = process.env.REACT_APP_BASE_URL_WINDOW_CALL; //+ ":" + process.env.PORT;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// export const CLIENT_ID =
//   "1066624920333-den5ior9urs5e52ea9tgpr5ml90pgc7h.apps.googleusercontent.com";
//dsadsadas
