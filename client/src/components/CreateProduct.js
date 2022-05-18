import React from "react";
import {connect} from "react-redux";
import {createComment, createProduct} from "../reducers/actions";
import axios from "axios";

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
    }
   onSubmitForm = async (e) => {
       try{
           e.preventDefault();
           if(this.props.comment) {
               const name = document.getElementById('name').value
               const description = document.getElementById('description').value
               const product = this.props.productId
               const comments = await axios({
                   url: 'http://localhost:8080/api/comments',
                   method: 'POST',
                   data: {
                       name,
                       description,
                       product
                   }
               })

               this.props.createComment(comments.data.data.comment)
               this.props.onChange(false);
           } else {
               const name = document.getElementById('name').value
               const products = await axios({
                   url: 'http://localhost:8080/api/products',
                   method: 'POST',
                   data: {
                       name,
                   }
               })

               this.props.createProduct(products.data.data.product)
               this.props.onChange(false);
           }

       } catch (err){
            console.log(err)
       }
    }
    render() {
        return(
            <div className='create-product'>
                <h2 className="text-center mb-4">Create {this.props.comment ? 'comment' : 'product'}</h2>
                <form action="" onSubmit={this.onSubmitForm}>
                    {this.props.comment ?
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type='text' className='form-control' id="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Text:</label>
                                <textarea className='form-control' id="description"></textarea>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className='form-control' id="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="weight">Weight:</label>
                                <input type="text" className='form-control' id="weight"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="width">Width:</label>
                                <input type="text" className='form-control' id="width"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="height">Height:</label>
                                <input type="text" className='form-control' id="height"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="count">Count:</label>
                                <input type="number" className='form-control' id="count"/>
                            </div>
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
    createProduct,
    createComment
}
export default connect(null, mapDispatchToProps)(CreateProduct);