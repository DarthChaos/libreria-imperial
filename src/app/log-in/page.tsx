import "./Formulario.css"
import {FormEvent, useState} from "react"

export function Formulario() {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(nombre === "" || contraseña === "" )
            setError(true)
        else
            setError(false)

    }

    return(
        <section>
            <h1>Log In</h1>
            
            <form 
                className="Formulario"
                onSubmit={handleSubmit}   
                
            >
                <input 
                    type="text"
                    value={nombre}
                    onChange={e => setNombre (e.target.value)}
        
                />
        
                <input 
                    type="password" 
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                    
                    />
                <button> Iniciar sesion </button>
            </form>
{error && <p> Todos los campos son obligatorios</p>}



        </section>




    )



}