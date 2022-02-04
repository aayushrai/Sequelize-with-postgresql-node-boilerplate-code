import { SUCCESS, ERROR } from "../../helper/message";
import model from "../../database/models";

const { user } = model;

export default async (id) => {
  try {
    const isDeleted = await user.destroy({ where: { id } });

    if (isDeleted) {
      return { error: false, message: SUCCESS.successMessage };
    } else {
      return { error: true, message: ERROR.userNotExist };
    }
  } catch (e) {
    console.log(e);
    return { error: true, message: ERROR.databaseError };
  }
};
