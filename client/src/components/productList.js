import React, {useState} from "react";
import Modal from "./Modal";
import Products from "./Products";
import {connect} from "react-redux";

const ProductList = () => {
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState({});
    const statusModal = (val) => {
        setModal(val)
        setModalType({})
    }
    const edit = (id, type) => {
        setModalType({id, type})
        setModal(true)
    }
    return (
        <div>
            <button onClick={()=> setModal(true)} className='btn btn-success'>Add Product</button>
            <Modal  active={modal} onChange={statusModal} onEdit={modalType} />
            <Products onChange={edit} />
        </div>
    )
}
export default ProductList;