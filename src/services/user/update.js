import { SUCCESS, ERROR } from "../../helper/message";
import model from "../../database/models";

const { user } = model;

export default async (data, id) => {
  try {
    const { name, email } = data;
    const isUpdate = await user.update(
      {
        name,
        email,
      },
      { where: { id } }
    );
    if (isUpdate) {
      return { error: false, message: SUCCESS.successMessage };
    } else {
      return { error: true, message: ERROR.userNotExist };
    }
  } catch (e) {
    console.log(e);
    return { error: true, message: ERROR.databaseError };
  }
};
