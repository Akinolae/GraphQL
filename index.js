var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();

const {
  getSingleTransaction,
  getAllTransactions,
  postTrx,
} = require("./methods");
const { extractApiError } = require("./utils");

const paths = {
  tansaction: "/dev/transaction",
  transactions: "/dev/transactions",
};

exports.handler = async (event, context, callback) => {
  let func;

  try {
    switch (event.resource) {
      case event.path === paths.transactions:
        func = getAllTransactions(event);
      // case event.httpMethod === "GET" && event.path === paths.transaction:
      //   func = getSingleTransaction;
      //   break;
      case event.path === paths.transaction:
        func = postTrx();
        break;
    }

    return func;
  } catch (error) {
    console.log("Error: ", error, "...");
    // throw extractApiError(error);
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
