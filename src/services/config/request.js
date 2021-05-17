import axios from "axios";
import { API_URL } from "./apiUrl";
import { storage as LocalStorage } from "services/config/storage";
import { storage } from "services/config/storage";

const _authorizationHeaders = () => ({
  Token: storage.fetch.authToken(),
  "Content-Type": "application/json",
});

const handleError = (err, statusCode) => {
  let info = "";
  if (statusCode === 401) {
    LocalStorage.destroy.userData();
    // document.cookie = [
    //   `${COOKIE_NAME}=` + null + "; expires=Thu, 18 Dec 1995 12:00:00 UTC",
    // ];
  } else {
    if (err === undefined) {
      info = "Your request cannot be processed";
    } else {
      info = err.data.error.message;
    }
  }
  handleError(err);
};

export const getRequest = async (url, headers = _authorizationHeaders()) => {
  try {
    const res = await axios.get(API_URL + url, {
      headers: Object.assign({}, headers),
    });
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const postRequest = async (
  url,
  data = {},
  headers = _authorizationHeaders()
) => {
  try {
    const res = await axios({
      url: API_URL + url,
      method: "POST",
      headers: Object.assign({}, headers),
      data,
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
    // return err.response.data
  }
};
export const loginPostRequest = async (
    url,
    data = {},
  ) => {
    try {
      const res = await axios({
        url: API_URL + url,
        method: "POST",
        // headers: Object.assign({}, headers),
        data,
      });
      return res.data.result ? res.data.result : res.data;
    } catch (err) {
      handleError(err);
      // return err.response.data
    }
  };

export const putRequest = async (
  url,
  data = {},
  noBaseUrl,
  isFile,
  type,
  headers = isFile
    ? { ..._authorizationHeaders(), "Content-Type": type }
    : _authorizationHeaders()
) => {
  try {
    const res = await axios({
      url: noBaseUrl ? url : API_URL + url,
      method: "PUT",
      headers: Object.assign({}, headers),
      data,
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const patchRequest = async (
  url,
  data = {},
  headers = _authorizationHeaders()
) => {
  try {
    const res = await axios({
      url: API_URL + url,
      method: "PATCH",
      headers: Object.assign({}, headers),
      data,
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const deleteRequest = async (url, headers = _authorizationHeaders()) => {
  try {
    const res = await axios({
      url: API_URL + url,
      method: "DELETE",
      headers: Object.assign({}, headers),
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const uploadRequest = async (url, header = _authorizationHeaders()) => {
  try {
    const res = await axios({
      url: "https://cors-anywhere.herokuapp.com/" + url,
      method: "PUT",
      headers: Object.assign({}, header),
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const Api = {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  uploadRequest,
  loginPostRequest
};
