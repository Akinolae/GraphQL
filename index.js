// const AWS = require("aws-sdk");
// AWS.config.update({
//   region: "us-east-1",
// });
// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const dbTable = "transactions";
const { getSingleTransaction, getAllTransactions } = require("./methods");
const { extractApiError } = require("./utils");

const paths = {
  tansaction: "/transaction",
  transactions: "/transactions",
};

exports.handler = async (event) => {
  console.log("Req: ", event);
  let response;

  try {
    switch (event.resource) {
      case event.httpMethod === "GET" && event.path === paths.transactions:
        response = getAllTransactions;
        break;
      case event.httpMethod === "GET" && event.path === paths.transaction:
        response = getSingleTransaction;
      default:
        break;
    }

    return response(event);
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
