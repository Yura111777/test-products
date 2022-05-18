import React from "react";
import {useSelector} from "react-redux";
const Comment = (props) => {
    const commentData = useSelector(state => {
        return {
            comments: state.products.comments.filter(el => el.product === props.productData.product._id) || []
        }
    })
    return (
        <div>
            {commentData.comments.map(el => {
                return (
                    <div  key={el._id} className="card my-5">
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                            <p className="card-text">{el.description}</p>
                            <button  className="btn btn-primary "  onClick={()=>props.onChange(el._id, 'edit')}>Edit</button>
                            <button  className="btn btn-danger mx-5"  onClick={()=>props.onChange(el._id, 'delete')}>Delete</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Comment;