import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {                    //product component is fetching data from Fake Store API and displaying it.
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'SET_PRODUCTS', payload: data });
            });
    }, [dispatch]);

    return (
        <div>
            <h1>COLOSHOP</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.title} width={100} />
                        <h3>{product.title}</h3>
                        <p>$ {product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CartModal from './CartModal';

// const Products = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products);
//   const [showModal, setShowModal] = useState(false);
//   const [addedProduct, setAddedProduct] = useState(null); // Store the product added to cart

//   useEffect(() => {
//     // Fetch products from API
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({ type: 'SET_PRODUCTS', payload: data });
//       });
//   }, [dispatch]);

//   const addToCart = (product) => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//     setAddedProduct(product);  // Set the added product
//     setShowModal(true);  // Show the modal
//   };

//   const closeModal = () => {
//     setShowModal(false);  // Close the modal
//   };

//   return (
//     <div>
//       <h2>Products</h2>

//       {showModal && <CartModal product={addedProduct} closeModal={closeModal} />}

//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.title} width={100} />
//             <h3>{product.title}</h3>
//             <p>{product.price} USD</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;