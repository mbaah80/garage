import React, { useState} from "react";
import Card from "./card";
const Product = () => {
    const [products, setProducts] = useState([
        {
            price: 25000,
            location: "Lagos, Nigeria",
            name: "Toyota Camry",
            image: "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"
        },
        {
            price: 35000,
            location: "Kumasi, Ghana",
            name: "Toyota Corolla",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUEgeQXfhyYFSAYDo8O8pqMlQJW1o0uOVBEI16lVqGXeHFOPLNBscZImbejeiTm_tKz4&usqp=CAU"
        },
        {
            price: 45000,
            location: "Accra, Ghana",
            name: "Toyota Rav4",
            image: "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"

        }
    ]);

    return(
        <section className="product" id="our-products">
            <p className="small">Product</p>
            <h2 className="product-heading">
                Our Products
            </h2>
            <div className="productsContainer">
                {products.map((product) => (
                    <Card
                        key={product.name}
                        price={product.price}
                        location={product.location}
                        name={product.name}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    )
}
export default Product;
