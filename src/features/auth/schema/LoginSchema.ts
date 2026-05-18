import {z} from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Geçerli bir email adresi girin"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır").max(100, "Şifre en fazla 100 karakter olabilir"),
  rememberMe: z.boolean().optional()
});

export type LoginFormData = z.infer<typeof LoginSchema>;