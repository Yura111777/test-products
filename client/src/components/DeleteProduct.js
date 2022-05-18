import React from "react";
import {connect} from "react-redux";
import {deleteComment, deleteProduct} from "../reducers/actions";
import axios from "axios";


class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            if(this.props.comment) {
                await axios({
                    url: `http://localhost:8080/api/comments/delete/${this.props.onEdit.id}`,
                    method: 'DELETE',
                    data: null
                })

                this.props.deleteComment(this.props.onEdit.id)
                this.props.onChange(false);
            } else {
                await axios({
                    url: `http://localhost:8080/api/products/delete/${this.props.onEdit.id}`,
                    method: 'DELETE',
                    data: null
                })

                this.props.deleteProduct(this.props.onEdit.id)
                this.props.onChange(false);
            }


        } catch (err){
            console.log(err)
        }
    }
    closeForm = (e)=> {
        e.preventDefault();
        e.stopPropagation();
        this.props.onChange(false);
    }
    render() {
        return(
            <div className='create-product'>
                <h2 className="text-center mb-4">Delete product</h2>
                <form action="" onSubmit={this.onSubmitForm}>
                    <h4 className="text-center mb-3">
                        Are you sure want to delete this product?
                    </h4>
                    <div className="form-group">
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <button type='submit' className='btn btn-success mx-5'>Yes</button>
                                <button  className='btn btn-danger' onClick={this.closeForm}>No</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = {
    deleteProduct,
    deleteComment
}
export default connect(null, mapDispatchToProps)(DeleteProduct);