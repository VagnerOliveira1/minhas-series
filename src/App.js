import React from 'react';
import Header from './Header';
import Generos from './Generos';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';
import Series from './Series';
import NovaSerie from './NovaSerie';
import InfoSerie from './InfoSerie';


import {
  BrowserRouter as Router, 
  Route,Switch

} from 'react-router-dom'
import Infoserie from './InfoSerie';


const Home = () =>{
  return <h1>Home</h1>
}

function App() {
  return(
    <Router>
      <div>
        <Header/>
        <Switch> 
            <Route path='/' exact component={Home}/>
            <Route path='/generos' exact component={Generos}/>
            <Route path='/generos/novoGenero' exact component={NovoGenero}/>
            <Route path='/generos/:id'exact component={EditarGenero}/>
            <Route path='/series'exact component={Series}/>
            <Route path='/series/novaSerie' exact component={NovaSerie}/>
            <Route path='/series/:id'exact component={Infoserie}/>



        </Switch> 
      </div>
    </Router> 
  );
}

export default App;
