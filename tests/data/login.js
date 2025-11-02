// Define user objects with test data
const users = {
  validUser: {
    username: "test",
    password: "password123",
  },
  blcokedUser: {
    username: "testblock",
    password: "password123",
  },
  invalidUser: {
    username: "random_user",
    password: "password123",
  },
  wrongPasswordUser: {
    username: "test",
    password: "pass",
  },
};

// Export the users object to be used in other files
export default users;
