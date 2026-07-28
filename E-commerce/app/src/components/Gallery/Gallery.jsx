import { useEffect, useState } from "react";

export default function Gallery() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <section className="py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10">  Product Gallery  </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
                        <img src={product.image} alt={product.title} className="h-56 w-full object-contain"/>
                        <h2 className="font-semibold mt-4 ">{product.title}  </h2>
                        <p className="text-gray-500 text-sm mt-2"> {product.description}  </p>
                        <div className="text-xl text-center font-bold text-green-600"> ${product.price}</div>
    
                        <div className="flex justify-between items-center mt-4">
                            <div className="border rounded-xl border-green-600  bg-green-600 text-white px-5 py-2">{product.category} </div>     
                            <button className='border rounded-xl border-black  bg-black text-white px-5 py-2 hover:bg-white hover:text-black transition'>Add Cart</button>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}