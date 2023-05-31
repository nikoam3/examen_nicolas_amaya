import React from "react"
import '../styles/Card.css'


const Card = ({ nombre, libro }) => {

    return (
        <div className='card'>
            <h2> Hola {nombre} </h2>
            <h2> Tu libro favorito es {libro} </h2>
        </div>
    )
}
export default Card
