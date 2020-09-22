import React from 'react';
import ProductCard from '../components/ProductCard'
const ProductsPage = ({productData,setProductData})=>{
    // console.log(productData)
    return(
        <div className="container d-flex flex-wrap p-0">
            {productData.map((product,index)=>(
                    <ProductCard key={index} product={product} productData={productData} setProductData={setProductData}></ProductCard>
            ))}
        </div>
    )
}

export default ProductsPage