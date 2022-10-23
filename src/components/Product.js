import React from 'react'
import './Product.css';
import StarIcon from '@mui/icons-material/Star';

function Product(props) {
   const { id, title, image, price, rating } = props;
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array( rating).fill().map((i)=> (
                        
                        <StarIcon className='product-star' />
                    ))
                    }
                  
                </div>

            </div>
            <img src={image} alt="product" className="product-image" />
            <button className='product-button'>Add to Basket</button>
              
          
        </div>
    );
}

export default Product