import axios from 'axios';
import React, {useState} from 'react';
import { fileUpload } from '../helpers/fileUpload';
import { url } from '../helpers/url';
import { Button } from 'react-bootstrap';

export const Form = () => {
    const [libro, setLibro] = useState({

        nombre: '',
        genero: '',
        autor: '',
        editorial: '',
        precio: '',
        imagen: ''
    })

    const { nombre, genero, autor, editorial, precio, imagen } = libro

    const handleChange = ({ target }) => {
        setLibro({
            ...libro,
            [target.name] : target.value
        })
        console.log(libro);
    }

    const handlesubmit = (e) => {
        e.preventDefault()
    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(response => {
                libro.imagen = response
            }).catch(error => {
                console.log(error);
            })
    }
    
    const postData = () => {
    axios.post(url, libro)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    }

    return (
        <div>
           <form id="formulario" onSubmit={handlesubmit}>
           <h2>Registro de libros</h2>
           <hr/>
               <div>
                   <label>Nombre Completo</label>
                    <input id="inputNombre" name="nombre" value={nombre} onChange={handleChange}/>
               </div>
               <div>
                   <label>Genero Libro</label>
                   <select id="selectGenero" name="genero" value={genero} onChange={handleChange}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="Novela" value="Novela">Novela</option>
                       <option name="Sci-fi" value="Sci-fi">Sci-fi</option>
                       <option name="Terror" value="Terror">Terror</option>
                   </select>
               </div>
               <div>
                   <label>Autor</label>
                   <input id="inputAutor" type="text" name="autor" value={autor} onChange={handleChange}/>
               </div>
               <div>
                   <label>Editorial</label>
                   <input id="inputEditorial" type="text" name="editorial" value={editorial} onChange={handleChange}/>
               </div>
               <div>
                   <label>Precio</label>
                   <input id="inputPrecio" type="number" name="precio" value={precio} onChange={handleChange}/>
               </div>
               <div>
                   <label>Imagen</label>
                    <input id="botonImagen" type="file" name="imagen" value={imagen} onChange={handleFile}/>
               </div>
               <div>
                   <Button id="btnRegistro" onClick={postData}>Enviar</Button> 
               </div>
           </form>
        </div>
    )
}