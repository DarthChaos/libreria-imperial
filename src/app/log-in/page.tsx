"use client";
import { useDispatch, useSelector } from "react-redux";
import "./Formulario.css";
import { FormEvent, useEffect, useState } from "react";
import { AppDispatch, RootState } from "../app-redux/store";
import { downloadLog, loadValues, signIn } from "../app-redux/auth/simple-auth";
import { useRouter } from "next/navigation";

export default function Formulario() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);

  const buttonError = error && "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") setError(true);
    else {
      setError(false);
      dispatch(signIn(nombre));
      router.push("/");
    }
  };

  return (
    <section>
      <h1>Log In</h1>

      <form className='Formulario' onSubmit={handleSubmit}>
        <input
          type='text'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type='password'
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button type='submit'> Iniciar sesion </button>
      </form>
      {error && <p> Todos los campos son obligatorios</p>}
    </section>
  );
}
