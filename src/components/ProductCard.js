import React from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';


function ProductCard({product,productData,setProductData}){
    let newProductArray = productData;
    function removeStock(productName){
        for(const [idx,p] of productData.entries()){
            console.log("clicked")
            if(p.productName==productName){
                newProductArray[idx].amount-=1;
                console.log(newProductArray[idx].amount)
                setProductData(newProductArray)
            }
        }
    }
    
    console.log(newProductArray)
    return(
        <Card className=" col-lg-3 col-md-4 col-sm-6 shadow" >
            <CardImg src={product.productImage}></CardImg>
            <CardBody>
                <CardTitle><h4>{product.productName}</h4></CardTitle>
                <CardText>{product.description}</CardText>
                <div className="d-flex justify-content-between">
                    <h5>RM{product.price}</h5>
                    <small>{product.amount}</small>
                </div>
                <Button outline color="info" block onClick={()=>removeStock(product.productName)}>Add to Cart</Button>
            </CardBody>
        </Card>
    )
}

export default ProductCard