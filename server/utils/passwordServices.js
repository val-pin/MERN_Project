import bcrypt from "bcrypt";

const hashPassword = async (registerPassword) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(registerPassword, salt);

  return hashedPassword;
};
export { hashPassword };
