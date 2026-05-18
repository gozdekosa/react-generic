import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import FormCheckbox from "../../../shared/components/form/FormCheckbox";
import FormInput from "../../../shared/components/form/FormInput";
import Button from "../../../shared/components/ui/Button";

import { LoginSchema, type LoginFormData } from "../schema/LoginSchema";
import { authApi } from "../api/authApi";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login: setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);

      const res = await authApi.login(data);

      // 👉 auth state update
      setAuth(res.data.accessToken);

      navigate("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Email veya şifre hatalı"
      );
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
      
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Hoş Geldiniz
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Lütfen hesabınıza giriş yapın
        </p>

        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}
      </div>

      <form
        className="mt-8 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-4">
          <FormInput
            label="Email"
            placeholder="mail@example.com"
            {...register("email")}
            error={errors.email?.message}
          />

          <FormInput
            label="Şifre"
            type="password"
            placeholder="Şifrenizi girin"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <FormCheckbox
            label="Beni hatırla"
            {...register("rememberMe")}
          />

          <a
            href="#"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Şifremi unuttum
          </a>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Giriş yapılıyor..." : "Giriş Yap"}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-500">
        Hesabınız yok mu?{" "}
        <a
          href="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Kaydolun
        </a>
      </p>
    </div>
  );
};

export default LoginForm;