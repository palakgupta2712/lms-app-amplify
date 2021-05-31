export const isLoggedIn = () => {
  if (localStorage.getItem("auth")) return true;
  return false;
};
