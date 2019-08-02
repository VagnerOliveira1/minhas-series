
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

const renderLinha = record => {
    return (
            <tr key={record.id}>
                 <th scope="row">{record.id}</th>
                 <td>{record.name}</td>
                 <td><button>+</button></td>
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

    return (
        <div className='container'>
            <h1>Generos</h1>
            <Link to='/generos/novoGenero'>Novo Gênero</Link>

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