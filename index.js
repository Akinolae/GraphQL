var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();

const {
  getSingleTransaction,
  getAllTransactions,
  postTrx,
} = require("./methods");
const { extractApiError } = require("./utils");
const { responseHandler } = require("./utils/responseUtils");

const paths = {
  tansaction: "/dev/transaction",
  transactions: "/dev/transactions",
};

exports.handler = async (event, context) => {
  let func;

  try {
    switch (event.resource) {
      case paths.tansaction:
        func = getSingleTransaction(event);
        break;
      case paths.transactions:
        func = getAllTransactions(event);
      default:
        break;
    }
  } catch (error) {
    throw error;
  }
  return func;
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
