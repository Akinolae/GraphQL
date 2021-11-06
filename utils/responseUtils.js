const responseHandler = async (status, responseBody) => {
  return {
    statusCode: status,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

module.exports = { responseHandler };
