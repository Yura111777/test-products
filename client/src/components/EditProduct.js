import React from "react";
import {connect} from "react-redux";
import {editComment, editProduct} from "../reducers/actions";
import axios from "axios";

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmitForm = async (e) => {
        try{
            e.preventDefault();
            if(this.props.comment) {
                const name = document.getElementById('name').value
                const description = document.getElementById('description').value
                const comment = await axios({
                    url: `http://localhost:8080/api/comments/update/${this.props.onEdit.id}`,
                    method: 'PATCH',
                    data: {
                        name,
                        description
                    }
                })

                this.props.editComment(comment.data.data.data)
                this.props.onChange(false);
            } else {
                const name = document.getElementById('name').value
                const product = await axios({
                    url: `http://localhost:8080/api/products/update/${this.props.onEdit.id}`,
                    method: 'PATCH',
                    data: {
                        name,
                    }
                })
                this.props.editProduct(product.data.data.product)
                this.props.onChange(false);
            }

        } catch (err){
            console.log(err)
        }
    }
    render() {
        return(

            <div className='create-product'>
                <h2 className="text-center mb-4">Edit product</h2>
                <form action="" onSubmit={this.onSubmitForm}>
                    { this.props.comment ?
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type='text' className='form-control' id="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Text:</label>
                                <textarea className='form-control' id="description"></textarea>
                            </div>
                        </div> :
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className='form-control' id="name"/>
                        </div>
                    }

                    <div className="form-group">
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <button type='submit' className='btn btn-success'>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = {
    editProduct,
    editComment
}
export default connect(null, mapDispatchToProps)(EditProduct);