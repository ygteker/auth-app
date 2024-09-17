import { SignupFormSchema, FormState } from "../lib/definitions";
import bcrypt from "bcrypt";

export async function signup(state: FormState, formData: FormData) {
  // 1. Validate fields
  const validateFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    }
  } 

  // 2. Prepare datafor insertion into database
  const { name, email, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);


  // 3. Insert user into databse
  const data = await db
}
