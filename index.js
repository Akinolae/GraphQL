// const AWS = require("aws-sdk");
// AWS.config.update({
//   region: "us-east-1",
// });
// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const dbTable = "transactions";
const {
  getSingleTransaction,
  getAllTransactions,
  postTrx,
} = require("./methods");
const { extractApiError } = require("./utils");

const paths = {
  tansaction: "/transaction",
  transactions: "/transactions",
};

exports.handler = async (event) => {
  console.log("Req: ", event);
  let func;

  try {
    switch (event.resource) {
      case event.httpMethod === "GET" && event.path === paths.transactions:
        func = getAllTransactions;
        break;
      case event.httpMethod === "GET" && event.path === paths.transaction:
        func = getSingleTransaction;
        break;
      case event.httpMethod === "POST" && event.path === paths.transaction:
        func = postTrx;
        break;
    }

    return await func(event);
  } catch (error) {
    throw extractApiError(error);
  }
};

// const buildResponse = (resCode, body) => {
//   return {
//     statusCode: resCode,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   };
// };
