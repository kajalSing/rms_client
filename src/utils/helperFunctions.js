import { storage as LocalStorage } from "../services/config/storage";

export function isAuthenticated() {
  return LocalStorage.fetch.authToken() ? true : false;
}
