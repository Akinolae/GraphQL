const responseHandler = async (status, responseBody) => {
  return {
    statusCode: status,
    headers: {
      "Content-Type": "application/json",
    },
    body: responseBody,
  };
};

module.exports = { responseHandler };
