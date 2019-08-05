
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Generos = () =>{
    const [data, setDate] = useState([])
    useEffect(()=>{
        axios
            .get('/api/genres')
            .then(res => {
               setDate(res.data.data)
        })
},[])

const deleteGenero = id =>{
    console.log(id)
    axios.delete('/api/genres/' + id)
        .then(res =>{
            const filtrado = data.filter(item => item.id !== id)
            setDate(filtrado)
        })

}

const renderLinha = record => {
    return (
            <tr key={record.id}>
                 <th scope="row">{record.id}</th>
                 <td>{record.name}</td>
                 <td>
                     <button className='btn btn-danger' onClick={()=>deleteGenero(record.id)}> Excluir</button>
                     <Link className= 'btn btn-warning' to={'/generos/' + record.id}>Editar</Link>
                </td>
            </tr>
    )
    }
    
    if(data.length === 0){
        return(
            <div className='container'>
                <h1>Generos</h1>
                <div className='alert alert-warning' role='alert'>
                    Não existem séries cadastradas
                </div>

            </div>
            
        )
    }

    const id = 2
    const filtro = data.filter(item => item.id !== id)
    console.log(filtro)

    return (
        <div className='container'>
            <h1>Generos</h1>
            <Link className='btn btn-primary'to='/generos/novoGenero'>Novo Gênero</Link>

            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOME</th>
                        <th scope="col">OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderLinha)}  
                </tbody>
            </table>
        
        </div>
    )
}

export default Generos