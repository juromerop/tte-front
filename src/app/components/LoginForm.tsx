"use client";

import React, { useState } from "react";
import axios from "axios";


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Email ${email}, Password: ${password}`);
    try {
      const response = await axios.post('http://localhost:8080/api/login/', { email, password });
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // La solicitud se hizo y el servidor respondió con un estado fuera del rango de 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // La solicitud se hizo pero no se recibió ninguna respuesta
          console.log(error.request);
        } else {
          // Algo sucedió en la configuración de la solicitud que provocó un error
          console.log('Error', error.message);
        }
      } else {
        // Aquí puedes manejar otros tipos de errores si es necesario
        console.log('Error', error);
      }
    }
  };

  return (
    <div className="flex justify-center shadow-xl p-8 rounded-lg border border-gray-300 bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col space-y-4"
      >
        <h2 className="text-lg font-light">Welcome!</h2>
        <h2 className="text-3xl font-semibold pt-2">Sign in</h2>
        <p className="font-light text-sm pb-6">Please enter your credentials to log in.</p>
        <label className="text-sm">Email</label>
        <input
          type="text"
          placeholder="Enter your user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded text-md"
        />
        <label className="text-sm">Password</label>
        <div className="relative text-md">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded w-full pr-12" 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center "
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="flex justify-between pb-4 pt-2">
          <div className="flex items-center">
            <input type="checkbox" />
            <label className="ml-2 font-light text-xs">Remember me</label>
          </div>
          <a className="text-gray-400 font-light text-xs">Forgot password?</a>
        </div>
        <button type="submit" className="px-4 py-2 bg-black text-white rounded text-sm">
          Login
        </button>
        <div className="flex justify-center font-light text-xs pt-6">
          <p className="text-gray-400">Don&apos;t have an account?</p>
          <a className="text-black-400 font-bold ml-2">Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;