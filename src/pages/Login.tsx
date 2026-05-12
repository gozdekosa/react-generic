import { useState } from "react";
import FormInput from "../shared/components/form/FormInput";
import Button from "../shared/components/ui/Button";
import FormCheckbox from "../shared/components/form/FormCheckbox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200">
        
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Hoş Geldiniz</h1>
          <p className="mt-2 text-sm text-gray-600">
            Lütfen hesabınıza giriş yapın
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <FormInput
                label="Email"
                placeholder="mail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <FormInput
                label="Şifre"
                type="password"
                placeholder="Şifrenizi girin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <FormCheckbox
              label="Beni hatırla"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Şifremi unuttum
            </a>
          </div>
          
          <Button type="submit" className="w-full">
            Giriş Yap
          </Button>

        </form>

        <p className="text-center text-sm text-gray-500">
          Hesabınız yok mu?{" "}
          <a href="#" className="font-semibold text-blue-600 hover:underline">
            Kaydolun
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;