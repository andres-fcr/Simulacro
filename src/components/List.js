import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../helpers/url';

export const List = () => {

    const [libros, setLibros] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setLibros(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    const dataDelete = (id) => {
        axios.delete(url +id)
        .then(response => {
            getData()
        }).catch(error=> {
            console.log(error)
        })
    }

    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Genero</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        libros.map(libro=>(
                            <tr key={libro.id}>
                                <td>{libro.nombre}</td>
                                <td>{libro.genero}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.editorial}</td>
                                <td>{libro.precio}</td>
                                <td>{libro.imagen}</td>
                                <td><button onClick={() => dataDelete(libro.id)}>Eliminar</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
