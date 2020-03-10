import React from 'react';

import Product from './Product';

const Product_list = (
    {products, addToCart,removeFromCart,deleteFromCart,avaliable}
) => (

    <div className="container">
        <div className="columns is-centered">
            <div className="column is-narrow">
            {products.map(prod => 
            <Product 
              key = {prod.id}
              title = {prod.title} 
              price = {prod.price}
              inventory = {avaliable[prod.id]} 
              addToCart = {() => addToCart(prod.id)}
              removeFromCart = {() => removeFromCart(prod.id)}
              deleteFromCart = {() => deleteFromCart(prod.id)}
            />
            )}

            </div>
        </div>
      </div>

);

export default Product_list;