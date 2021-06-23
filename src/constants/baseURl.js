export const BASE_URL = "https://api.tingtong.xyz/api"
// export const BASE_URL = "http://1.53.228.32:5002/api"
// export const BASE_URL = "http://103.130.218.64:5000/api";
export const FILE_URL =
  process.env.REACT_APP_BASE_URL_CDN + "/files" ||
  "https://cdn.tingtong.xyz/files";
export const BASE_URL = process.env.REACT_APP_BASE_URL + "/api" || "";
export const SOCKET_URL =
  process.env.REACT_APP_BASE_URL_SOCKET || "socket.tingtong.xyz";
