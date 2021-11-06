const { responseHandler } = require("../../utils");

const getSingleTransaction = (body) => {
  const { accountNumber, transaction_id } = body;

  if (!transaction_id || !accountNumber) {
    return;
  }
  try {
    // To test that the response is acturally being sent
    return responseHandler(200, body);
  } catch (error) {
    return responseHandler(error.status, error);
  }
};

export { getSingleTransaction };
