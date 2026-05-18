import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import FormInput from "../../../shared/components/form/FormInput";
import Button from "../../../shared/components/ui/Button";

import {
  RegisterSchema,
  type RegisterFormData,
} from "../schema/RegisterSchema";
import { authApi } from "../api/authApi";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setError(null);

      await authApi.register(data);

      navigate("/login");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Kayıt sırasında hata oluştu"
      );
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
      
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Hesap Oluştur
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Yeni bir hesap oluşturun
        </p>

        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormInput
          label="Email"
          placeholder="mail@example.com"
          {...formRegister("email")}
          error={errors.email?.message}
        />

        <FormInput
          label="Şifre"
          type="password"
          placeholder="••••••••"
          {...formRegister("password")}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Kayıt yapılıyor..." : "Kayıt Ol"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;