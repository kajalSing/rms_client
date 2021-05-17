import { Api } from "../config/request";
// image upload in case of aws image upload
export const getPreSignedURLFromAWSUpload = (url, file, isFile, type) => {
  return Api.putRequest(url, file, "noBaseUrl", isFile, type);
};

export const getPreSignedURL = (payload) => {
  return Api.postRequest(`Api/saveImage`, payload);
};

export const fileUpload = (p) => Api.postRequest("file-upload", p);

const CommonAPI = {
  getPreSignedURL,
};

export default CommonAPI;
