const getAllTransactions = (event) => {
  console.log(event.body);
  return {
    statusCode: resCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event.body),
  };
};

module.exports = { getAllTransactions };
