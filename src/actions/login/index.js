// import LoginApi from "services/login";
import { storage as LocalStorage } from "services/config/storage";
import { message } from "antd";
function handleError(err) {
  console.error(err);
}

// export function setCurrentUser(payload) {
//   return {
//     type: "SET_CURRENT_USER",
//     payload,
//   };
// }

export const userLogin = (payload) => async (dispatch) => {
  try {
    // let res = await LoginApi.userLogin(payload);
    if (res) {
      LocalStorage.set.authToken(res.data.token);
      dispatch(setCurrentUser(res.data));
      return res;
    }
  } catch (err) {
    message.error("invalid creds");
    handleError(err);
  }
};
