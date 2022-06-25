const { responseHandler } = require("../../utils");

const getSingleTransaction = (event) => {
  const { email, password } = event.body;

  if (!email || !password) {
    return responseHandler(400, "All fields are required");
  }
  try {
    // To test that the response is acturally being sent
    return responseHandler(200, event.body);
  } catch (error) {
    return responseHandler(error.status, error);
  }
};

const postTrx = async (event) => {
  return event.body;
};

module.exports = { getSingleTransaction, postTrx };
