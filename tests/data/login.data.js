export const LOGIN_USERS = {
  validUser: {
    username: process.env.VALID_USERNAME,
    password: process.env.VALID_PASSWORD,
  },
  blockedUser: {
    username: "testblock",
    password: "password123",
  },
  invalidUser: {
    username: "random_user",
    password: "password123",
  },
  wrongPasswordUser: {
    username: "test",
    password: "wrong_pass",
  },
};

export const LOGIN_MESSAGES = {
  success: "User test authenticated",
  blockedUser: "User blocked!",
  invalidUser: "User not found!",
  wrongPassword: "Incorrect username or password!",
  temporarilyBlocked: "User temporarily blocked!",
};

export const LOGIN_LABELS = {
  header: "Login",
  usernameInput: "Type your username",
  passwordInput: "Type your password",
  loginButton: "Login",
  logoutButton: "Logout",
};
