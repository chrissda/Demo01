import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterN = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para redireccionar mi Registro

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:3000/registro", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          password,
          typeUser: "ADMIN",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        const data = await response.json();
        alert(`${data.message}`);
        navigate("/login");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    }
    catch(error) {
      console.error("Error en la conexión", error);
      alert("Hubo un error al intentar conectarse con el servidor.");
    }
  };





  return (
    <>
      <section className="bg-indigo-900 dark:bg-gray-900" id="register">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  md:h-screen lg:py-0">
          <div className="w-full bg-indigo-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl dark:text-white">
              Registrate aquí:
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" id="register-form" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-white">Ingresa tu nomrbe</label>
                  <input type="name" name="name" id="name" value={nombre} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Nombre" required="" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-white">Ingresa tu apellido</label>
                  <input type="lastname" name="lastname" id="lastname" value={apellido} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Apellido" required="" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-white">Ingresa tu correo</label>
                  <input type="email" name="email" id="email" value={email} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="example@mail.com" required="" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-white">Crea una contraseña</label>
                  <input type="password" name="password" id="password" value={password} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" onChange={(e) => setPassword(e.target.value)}/>
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