import React, {useEffect, useState} from "react";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const Modal = (props) => {
    const [modal, setModal] = useState(props.active)
    const [modalType, setId] = useState(props.onEdit)
    const statusModal = (val) => {
        setModal(val)
        props.onChange(val);
    }
    useEffect(()=> {
        setId(props.onEdit)
    }, [props.onEdit])

    useEffect(()=> {
        setModal(props.active)
    }, [props.active])
    const content = () => {
        if(!modalType.type) {
            return <CreateProduct productId={props.productId} comment={props.activeComment} onChange={statusModal} />
        }
        if(modalType.type === 'delete'){
            return  <DeleteProduct comment={props.activeComment} onChange={statusModal} onEdit={modalType}/>
        } else {
            return <EditProduct comment={props.activeComment} onChange={statusModal} onEdit={modalType}/>
        }
    }

    return (
    <div className={`bg-modal ${ modal ? '':'not-active'}`}>
        <div className="modal-form">
             <span className="close-button" onClick={()=> {
                 setModal(!modal);
                 props.onChange(false);
             }}>
                 <ion-icon name="close-outline"></ion-icon>
             </span>
            {content()}
        </div>

    </div>

    )
}

export default Modal;