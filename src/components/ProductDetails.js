import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Style.css'


function ProductDetails() {

        const api_url = 'https://fakestoreapi.com/products';
        const [product, setProduct] = useState({});
        const params = useParams();


        useEffect (()=> {
                fetch( `${api_url}/${params.productId}` )
                .then((res) => res.json())
                .then((product)=> setProduct(product)) ;
        }, []);

        return(<>
                <div className="container"> 
                                

                        <h1>  ID : {params.productId} </h1>
                        <img className='PImage' src={product.image}/> 
                        <h5 className="productData">  Title : {product.title} </h5>
                        <h5 className="productData">  Price : {product.price}$ </h5>
                        <h5 className="productData">  Category : {product.category} </h5>
                        <h5 className='productData'> Description : {product.description} </h5>  
                        <button className="btn btn-success"> Add to cart </button>
                </div> 
                
        </>);
}

export default ProductDetails;