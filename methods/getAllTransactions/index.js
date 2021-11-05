const getAllTransactions = (resCode, body) => {
  return {
    statusCode: resCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

export { getAllTransactions };
