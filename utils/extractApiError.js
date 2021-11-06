const extractApiError = async (error) => {
  if (!!error && !!error.errorMessage) {
    return error.errorMessage;
  } else {
    return;
  }
};

module.exports = {
  extractApiError,
};
