import { Link } from 'react-router-dom';
import './Style.css'

function Product (props) {

        return (<>
                <div className="card text-center" >
                                        <img src={props.product.image}className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                                <h5 className="card-title"> 
                                                        {props.product.title}
                                                </h5>
                                                <p className="card-text"> 
                                                        {props.product.price}$
                                                </p>
                                                <button className="btn btn-success"> 
                                                        <Link className="nav-link" to={`/product/${props.product.id}`}> Details </Link>
                                                </button>
                                        </div>
                                </div>
        </>);
}

export default Product;