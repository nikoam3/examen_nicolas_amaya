import React from "react";
import '../styles/Form.css';

const Form = ({ setNombre, setLibro, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className={'form'}>
                <label>Nombre: </label>
                <input type="text" placeholder="Ingrese su nombre" onChange={(e) => setNombre(e.target.value)} />
                <label>Libro: </label>
                <input type="text" placeholder="Ingrese su libro favorito" onChange={(e) => setLibro(e.target.value)} />
                <button className={'boton'} type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form;