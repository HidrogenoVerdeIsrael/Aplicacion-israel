import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4 ">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex gap-1 items-center relative">
                <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="example@example.com"
                /><FaUser className="absolute right-2" />
            </div>
          </div>
          <div className="mb-6 flex flex-col">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex gap-1 items-center relative">
                <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="********"
                /><FaLock className="absolute right-2" />
            </div>
          </div>
          <div className="remember">
              <label><input type="checkbox"/>Recordar </label>
              <a className="hover:underline text-blue-600" href="#">Contraseña</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
          <div className="register-link">
            <p>¿No tiene cuenta? <a className="hover:underline text-blue-600" href="#">Registrar</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
