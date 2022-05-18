import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector, connect} from "react-redux";
import Comment from "./comments/Comment";
import Modal from "./Modal";
import {fetchComment} from "../reducers/actions";
import {fetchThanComments} from "./FetchProducts";
import {useLocalStorage} from "../hooks/useLocalStorage";

const ProductPage = (props) => {
    const {comments} = props;
    const [commentsData, setComments] = useLocalStorage('comments', []);
    const fC = async () => {
        const res = await fetchThanComments()
        setComments(res.data.data.comments)
        props.fetchComment(commentsData)
    }
    useEffect( () => {
        fC()
    }, [commentsData])
    const {slug} = useParams();
    const productData = useSelector(state => {
        return {
            product: state.products.products.find(el=> el.slug === slug)
        }
    })
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
            <h1 className='mb-5'>{productData.product.name}</h1>
            <button onClick={()=> setModal(true)} className='btn btn-success'>Add Comment</button>
            <Modal activeComment={true} productId={productData.product._id}  active={modal} onChange={statusModal} onEdit={modalType} />
            <Comment productData={productData} onChange={edit}/>
        </div>
    )
}
const mapStateToProps = state => {

    return {
        comments: state.products.comments
    }
}
const mapDispatchToProps = {
    fetchComment
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);