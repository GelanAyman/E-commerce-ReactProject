
import { useEffect, useState } from 'react';
import './Product';
import Product from './Product';
import './Style.css';



function ProductsList() {

        const api_url = 'https://fakestoreapi.com/products';
        const [products, setProducts] = useState([]);
        const [categories, setCategories] = useState([]);

        const getProduct = () => {
                fetch(api_url)
                .then((res) => res.json())
                .then((data) => setProducts(data));
        };
        const getCategory = () => {
                fetch(`${api_url}/categories`)
                .then((res) => res.json())
                .then((data) => setCategories(data));
        };

        const getProByCat = (catName) => {
                // console.log(catName)
                fetch(`${api_url}/category/${catName}`)
                .then(res=>res.json())
                .then(data=>setProducts(data))
        }

        useEffect(()=> {
                getProduct();
                getCategory();
        }, [])

        return(<>
                <h2 className='text-center title'> Our Products </h2>

                <div className="container"> 
                <div className='category'> 
                        <button 
                                className='btn btn-success catBtn' 
                                onClick={
                                        () => {
                                                getProduct();
                                        }
                                }> 
                        All </button>

                        {
                                categories.map((cat) => {
                                        return <button 
                                                key={cat} 
                                                className='btn btn-success catBtn' 
                                                onClick={
                                                        () => {
                                                                getProByCat(cat)
                                                        }
                                                }> 
                                                {cat} </button>
                                })
                        }
                </div>
                
                <div className="row">
                        {
                                products.map((product) => {
                                        return (
                                                <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                                                        <Product product={product}/>
                                                </div>
                                        )
                                })
                        }
                        

                </div>
                </div>
                
        </>);
}

export default ProductsList;