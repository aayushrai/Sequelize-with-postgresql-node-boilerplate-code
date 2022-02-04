
import { SUCCESS, ERROR } from "./message";

const sendFailureResponse = (req, res, status, message) => {
  const errorCode = status || 500;

  return res.status(errorCode).send({
    message: message || ERROR.serverError,
    error: true,
    data: [],      
  });
};

const sendSuccessResponse = (req, res, data, message) => {
  return res.status(200).send({
    message: message || SUCCESS.successMessage,
    error: false,
    data: data || [],
  });
};

export {
  sendFailureResponse,
  sendSuccessResponse
}
