import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Router} from '@reach/router';
import SingleProduct from './views/SingleProduct';
import EditProduct from './views/EditProduct';
import NewProduct from './components/NewProduct';
import AllProducts from './components/AllProducts';
import axios from 'axios';
import Main from './views/Main';

// import './App.css';

function App() {

  const [loaded, setLoaded] = useState(false)
  

  return (
    <div>
      <h1 className="display-1 mt-5 mb-5 d-flex justify-content-center">Product Manager</h1>
    <Router>
      <Main path="/" loaded={loaded} setLoaded={setLoaded} />
      <SingleProduct path="products/:id"/>
      <EditProduct path="products/update/:id" loaded={loaded} setLoaded={setLoaded} />
    </Router>
    
    </div>
  );
}

export default App;


