import history from "../history";
import * as constants from "../constants/roles";

/**
 * To String
 *
 * @param {*} value
 */
export function toString(value) {
  return value ? value : null;
}

/**
 * Get Local storage value by name
 *
 * @param name
 * @returns {any}
 */
export function getLocalStorageByName(name) {
  return name ? localStorage.getItem(name) : null;
}

/**
 * Set Local storage value by name
 *
 * @param name
 * @param value
 * @returns {any}
 */
export function setLocalStorageByName(name, value) {
  return name && value ? localStorage.setItem(name, value) : null;
}

/**
 * Remove Local storage value by name
 *
 * @param name
 * @returns {any}
 */
export function removeLocalStorageByName(name) {
  return name ? localStorage.removeItem(name) : null;
}

/**
 * Is LoggedIn user
 *
 * @param name
 */
export function isLoggedIn(name) {
  const currentPath = window.location.pathname + window.location.search;
  let redirectUrl = "";
  if (currentPath) {
    redirectUrl = `?redirect=${currentPath}`;
  }

  if (!getLocalStorageByName("session_token")) {
    // if session_token is null redirect login
    window.location.replace(`/login${redirectUrl}`);
  }
}

/**
 * Get Url Parameter

 * @param name
 */
export function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
 * From Array
 *
 * @param values
 * @returns {string}
 */
export function fromArray(values) {
  const arrayData = [];
  if (values && values.length > 0) {
    values.forEach(value => {
      arrayData.push({ tagId: value.value });
    });
  }

  return arrayData ? arrayData : "";
}

/**
 * Is Super Admin
 */
export function isSuperAdmin() {
  const roleId = parseInt(getLocalStorageByName("role"));

  return roleId && roleId === constants.SUPER_ADMIN_ROLE;
}

/**
 * Is Customer
 */
export function isCustomer() {
  const roleId = parseInt(getLocalStorageByName("role"));

  return roleId && roleId === constants.CUSTOMER_ROLE;
}

/**
 * Is Expert
 */
export function isExpert() {
  const roleId = parseInt(getLocalStorageByName("role"));

  return roleId && roleId === constants.EXPERT_ROLE;
}

/**
 *
 * Get Full name by first name and last name
 * @param {*} first_name
 * @param {*} last_name
 */
export function getFullName(first_name, last_name) {
  let name = [];
  if (first_name) {
    name.push(first_name);
  }
  if (last_name) {
    name.push(last_name);
  }

  return name.join(" ");
}

/**
 * Get Current Year
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}
