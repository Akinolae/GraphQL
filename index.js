var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();

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

exports.handler = async (event, context, callback) => {
  console.log("Req: ", event.body);
  let func;

  try {
    switch (event.resource) {
      case event.httpMethod === "GET" && event.path === paths.transactions:
        func = getAllTransactions;
        break;
      // case event.httpMethod === "GET" && event.path === paths.transaction:
      //   func = getSingleTransaction;
      //   break;
      case event.httpMethod === "POST" && event.path === paths.transaction:
        func = postTrx;
        break;
    }

    return await func(event);
  } catch (error) {
    console.log("Error: ", error);
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
