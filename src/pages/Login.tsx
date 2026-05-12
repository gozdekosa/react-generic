const Login = () => {
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                placeholder="kullanici@mail.com"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Şifre
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2">Beni hatırla</span>
            </label>
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Şifremi unuttum
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
          >
            Giriş Yap
          </button>
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