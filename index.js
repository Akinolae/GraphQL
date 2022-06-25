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
    func = responseHandler(200, event.body);
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
