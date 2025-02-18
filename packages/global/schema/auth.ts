import z from "zod";

const SignUpSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export { SignUpSchema, SignInSchema };
