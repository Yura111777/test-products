import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductPage from "./components/ProductPage";
import './scss/style.scss'
import ProductList from "./components/productList";

function App() {
    return (
        <Router>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12">
                        <Routes>
                            <Route exact path='/' element={<ProductList/>}/>
                            <Route path='/product/:slug' element={<ProductPage/>}/>
                        </Routes>
                    </div>
                </div>
            </div>

        </Router>
    );
}

export default App;
