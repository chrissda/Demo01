import React from "react";

const RegisterN = () => {
  return (
    <>
      <section className="bg-indigo-900 dark:bg-gray-900" id="register">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  md:h-screen lg:py-0">
          <div className="w-full bg-indigo-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl dark:text-white">
              Registrate aquí:
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" id="register-form">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-white">Ingresa tu nomrbe</label>
                  {/* for="name" */}
                  <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre" required="" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-white">Ingresa tu apellido</label>
                  {/* for="lastname" */}
                  <input type="lastname" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Apellido" required="" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-white">Ingresa tu correo</label>
                  {/* for="email" */}
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@mail.com" required="" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-white">Crea una contraseña</label>
                  {/* for="password" */}
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <button type="submit" className="w-full text-white bg-indigo-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800">Registrarse</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Ya tengo cuenta <a href="/login" className="text-indigo-700 font-bold text-primary-600 hover:underline dark:text-primary-500">Iniciar sesión </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterN;