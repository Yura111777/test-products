import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchProduct} from "../reducers/actions";
import {fetchThan} from "./FetchProducts";
import {Link} from "react-router-dom";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Products = (props) => {
    const {products} = props;
    const [productsData, setProducts] = useLocalStorage('products', []);
    const fP = async () => {
        const res = await fetchThan()
        setProducts(res.data.data.products)
        props.fetchProduct(productsData)
    }
    useEffect( () => {
        fP()
    }, [productsData])

return (
    <div>
        {products.length ?
            <div>
            <ul>
            {products.map(el=> {
                return(
                    <li key={el._id} className='d-flex align-items-center justify-content-between'>
                        <Link to={`/product/${el.slug}`} className="name">{el.name}</Link>
                        <div className="d-flex">
                            <button className="btn btn-danger mx-3"  onClick={()=>props.onChange(el._id, 'delete')}>Delete</button>
                            <button className="btn btn-warning" onClick={()=>props.onChange(el._id, 'edit')}>Edit</button>
                        </div>
                    </li>
                )
            })}
            </ul>
            </div>
             :
            <div>
                <ul><li>There no products here</li></ul>
            </div>
        }
    </div>
)




}
const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}
const mapDispatchToProps = {
    fetchProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);