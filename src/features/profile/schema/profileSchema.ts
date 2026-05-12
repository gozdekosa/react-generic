import { z } from "zod";

export const profileSchema = z.object({
  name: z
    .string()
    .min(3, "Ad soyad en az 3 karakter olmalı"),

  email: z
    .string()
    .email("Geçerli email girin"),

  username: z
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter"),
});

export type ProfileFormData = z.infer<typeof profileSchema>;