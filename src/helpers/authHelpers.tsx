import currentUserData from "../interfaces/authInterfaces";

const saveLogin = (loginData: currentUserData): void => {
  // set values in local storage temporarily;
  localStorage.setItem("currentUser", JSON.stringify(loginData));
};

export default saveLogin;
