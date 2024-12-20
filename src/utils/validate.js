export const checkValidData = (email, password, username) => {
  const isEmailValid =
    /^([a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  if (username !== null) {
    const isUsernameValid = /^[A-Za-z]\w{4,29}$/.test(username);
    if (!isUsernameValid) return "Username is not valid";
  }

  return null;
};
