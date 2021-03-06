
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Series = () =>{
    const [data, setDate] = useState([])
    useEffect(()=>{
        axios
            .get('/api/series')
            .then(res => {
               setDate(res.data.data)
        })
},[])

const deleteSerie = id =>{
    console.log(id)
    axios.delete('/api/series/' + id)
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
                     <button className='btn btn-danger' onClick={()=>deleteSerie(record.id)}> Excluir</button>
                     <Link className= 'btn btn-warning' to={'/series/' + record.id}>Editar</Link>
                </td>
            </tr>
    )
    }
    
    if(data.length === 0){
        return(
            <div className='container'>
                <h1>Séries</h1>
                <Link className='btn btn-primary'to='/series/novaSerie'>Nova Série</Link>
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
            <h1>Séries</h1>
            <Link className='btn btn-primary'to='/series/novaSerie'>Nova Série</Link>

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

export default Series