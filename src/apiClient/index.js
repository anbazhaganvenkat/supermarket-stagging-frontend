import axios from "axios";
import { API_URL } from "../constants/Config";
import { getLocalStorageByName } from "../lib/helper";
import { DEFAULT_API_KEY, endpoints } from "../configs";
import { toast } from "react-toastify";
import history from "../history";

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    common: {
      //set token for authorization
      Authorization: getLocalStorageByName("session_token")
    }
  }
});

export function get(url, callback) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getLocalStorageByName("session_token"),
      Pragma: "no-cache"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .then(result => callback(null, result))
    .catch(err => callback(err));
}

// Call Post API Public API
export function apiClientPostPublic(apiUrl, data, callback) {
  apiClient.defaults.headers.common.Authorization = DEFAULT_API_KEY;
  apiClient
    .post(`${apiUrl}`, data)
    .then(response => {
      let successMessage;
      if (response && response.data) {
        successMessage = response.data.message;
      }
      return callback(null, successMessage);
    })
    .catch(error => {
      let errorMessage;
      if (error && error.response && error.response.status === 401) {
        history.push("/login");
      } else if (error.response && error.response.status >= 400) {
        const errorRequest = error.response.request;
        if (errorRequest && errorRequest.response) {
          errorMessage = JSON.parse(errorRequest.response).message;
        }
        console.error(errorMessage);
        return callback(errorMessage);
      }
    });
}
