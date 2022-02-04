import { SUCCESS, ERROR } from "../../helper/message";
import model from "../../database/models";

const { user } = model;

export default async (data) => {
  try {
    const { name, email } = data;
    const isUser = await user.findOne({ where: { email } });

    if (isUser) {
      return { error: true, message: "Email already exists" };
    }
    await user.create({
      name,
      email,
    });
    return { error: false, message: SUCCESS.successMessage };
  } catch (e) {
    console.log(e);
    return { error: true, message: ERROR.databaseError };
  }
};
