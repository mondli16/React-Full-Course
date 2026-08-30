import axios from 'axios'
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductGrid } from './ProductGrid';
export function HomePage({ cart }) {
// fetch('http://localhost:3000/api/products')
//     .then((response)=>{
//       response.json().then((data)=>{
//         console.log(data)
//       });
//     })

//This is not clean
// fetch('http://localhost:3000/api/products')
//     .then((response)=>{
//       return response.json();
//     }).then((data)=>{
//         console.log(data)
//     });

const [products, setProducts] = useState([]);
useEffect(()=>{
  const getHomeData = async () => {
     const response = await axios.get('/api/products?expand=product');
     setProducts(response.data)
    }
  getHomeData();
}, []);
  
  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart}/>
      <div className="home-page">
        <ProductGrid products={products}/>
      </div>
    </>);
}   