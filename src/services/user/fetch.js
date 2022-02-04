import { SUCCESS, ERROR } from "../../helper/message";
import model from "../../database/models";

const { user } = model;

export default async () => {
  try {
    const users = await user.findAll();
    return { error: false, message: SUCCESS.successMessage, data: users };
  } catch (e) {
    console.log(e);
    return { error: true, message: ERROR.databaseError };
  }
};
