import createUser from "../services/user/create";
import updateUser from "../services/user/update";
import fetchUser from "../services/user/fetch";
import deleteUser from "../services/user/delete";
import { sendFailureResponse, sendSuccessResponse } from "../helper/response";

const userController = {
  create: (req, res) => {
    createUser(req.body).then(({ error, message }) => {
      if (!error) {
        sendSuccessResponse(req, res, [], message);
      } else {
        sendFailureResponse(req, res, 500, message);
      }
    });
  },
  update: (req, res) => {
    updateUser(req.body, req.params.id).then(({ error, message }) => {
      if (!error) {
        sendSuccessResponse(req, res, [], message);
      } else {
        sendFailureResponse(req, res, 500, message);
      }
    });
  },
  delete: (req, res) => {
    deleteUser(req.params.id).then(({ error, message }) => {
      if (!error) {
        sendSuccessResponse(req, res, [], message);
      } else {
        sendFailureResponse(req, res, 500, message);
      }
    });
  },
  fetch: (req, res) => {
    fetchUser().then(({ error, message, data }) => {
      if (!error) {
        sendSuccessResponse(req, res, data, message);
      } else {
        sendFailureResponse(req, res, 500, message);
      }
    });
  },
};

export { userController };
