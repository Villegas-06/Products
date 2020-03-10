  import React, { Component, Fragment } from 'react';
  import logo from './logo.svg';
  import Navbar from './components/NavBar'
  import Product_list from './components/Product_list'
import { queryAllByAltText } from '@testing-library/dom';


  const initialProducts = [
    {id: 1 , title:"iPhone Xs", inventory: 4, price: 22500.35},
    {id: 2 , title:"Galaxy S9", inventory: 5, price: 10990.50},
    {id: 3 , title:"Huawei Mate", inventory: 2, price: 12699.45},
    {id: 4 , title:"Google pixel 3", inventory: 3, price: 19800.70},
    {id: 5 , title:"Motorola G6", inventory: 6, price: 5199.6}

  ];

  class App extends Component{
    state = {
      addedIds: [],
      quantityById:{},
      products: initialProducts,
    };

    addToCart = (id) => {
      const {addedIds , quantityById, products} = this.state;
      const product = products.find(prod => prod.id === id);
      const avaliable = products.inventory - (quantityById[id] || 0);
      if(avaliable > 0){
        const newAddedIds =  addedIds.find(prodId => prodId === id) ? addedIds : addedIds.concat(product.id);
        const newQuantityById = {
          ...quantityById,
          [id]: (quantityById || 0) + 1,
        };

        this.state({
          addedIds : newAddedIds , quantityById: newQuantityById
        });
      }
    }

    removeFromCart = (id) => {
      const {addedIds, quantityById} = this.state;

      if(quantityById[id]){
        const newQuantityById = {
          ...quantityById,
          quantityById,
          [id]: quantityById[id] > 1 ? quantityById[id] - 1 : undefined,
        };
      
      const newAddedIds = newQuantityById[id] ? addedIds : addedIds.filter(prodId => prodId !== id);

      this.setState({
        addedIds : newAddedIds , quantityById: newQuantityById
      });

      }
    }

    deleteFromCart = (id) => {
      
      const {addedIds, quantityById} = this.state;

      if(quantityById[id]){
        const newQuantityById = {
          ...quantityById,
          [id]: undefined,
        };
        const newAddedIds = addedIds.filter(prodId => prodId !== id);
        this.setState({
          addedIds : newAddedIds , quantityById: newQuantityById
        })
      }
    }

    getAvaliable = (products, quantityById) => {
      return products.reduce(
        (res, product) => ({
          ...res,
          [product.id]: product.inventory - (quantityById[product.id] || 0),
        }),
        {},
      );
    }
    render(){
      const {products, quantityById} = this.state;
      const avaliable = this.getAvaliable(products, quantityById);
        return (
          <Fragment>

            <Navbar total = {0.0}/>
            <Product_list 
            products = {initialProducts} 
            addToCart= {this.addToCart} 
            removeFromCart = {this.removeFromCart}
            deleteFromCart = {this.deleteFromCart}
            avaliable = {avaliable}
            />
                  
        </Fragment>
        );
      }
  }

  export default App;
