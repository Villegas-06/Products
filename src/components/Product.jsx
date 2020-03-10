import React from 'react';


const Product = ({
    title , price , inventory, addToCart, removeFromCart,deleteFromCart,avaliable
}) => (

    <div style={{
        marginBottom: '1.5rem'
    }}>
              <p>
                <strong>{title}</strong> - {price}
              </p>

              <div className="field is-grouped" style = {{padding: "10px"}}>
                <p className="control">
                    <span className="tag is-warning is-medium">
                      {inventory}
                    </span>
                </p>
                
                <p className="control">
                  <a className="button is-dark" onClick = {addToCart}>
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                  </a>
                </p>
              <p className="control">
              <button className="button" onClick = {removeFromCart}>
                    <span className="icon is-dark">
                        <i className="fas fa-minus"></i>
                    </span>
              </button>
              </p>
              <p className="control">
              <button className="button is-danger" onClick = {deleteFromCart}>
                    <span className="icon is-small">
                        <i className="fas fa-trash"></i>
                    </span>
              </button>
              </p>
              </div>


    </div>

);


export default Product;
