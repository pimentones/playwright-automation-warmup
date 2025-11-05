export const registerUsers = {
  multipleHobbies: {
    name: "Pedro",
    email: "pedro@gmail.com",
    password: "password",
    country: "Portugal",
    gender: "Male",
    hobbies: ["Read books", "sports"],
  },
  noHobbies: {
    scenario: "No hobbies",
    name: "Bruna",
    email: "bruna@gmail.com",
    password: "password",
    country: "Brazil",
    gender: "Female",
    hobbies: [],
  },
  otherGender: {
    scenario: "Full form",
    name: "Bruno",
    email: "bruno@gmail.com",
    password: "password",
    country: "Canada",
    gender: "Other",
    hobbies: ["Read books", "sports", "Travel"],
  },
  maleGender: {
    scenario: "Full form",
    name: "Carla",
    email: "carla@gmail.com",
    password: "password",
    country: "United States of America",
    gender: "Female",
    hobbies: ["Read books", "sports"],
  },
  famleGender: {
    scenario: "Full form",
    name: "Jose",
    email: "jose@gmail.com",
    password: "password",
    country: "Mexico",
    gender: "Male",
    hobbies: ["Read books", "sports"],
  },
};

export const messages = {
  success: {
    messageTitle: "Success!",
    messageBody: "The form has been submitted successfully.",
  },
  required: {
    nameRequired: "The name field is required.",
    passwordRequired: "The password field is required.",
    emailRequired: "The email field is required.",
    countryRequired: "The country field is required.",
    genderRequired: "The gender field is required.",
  },
};
