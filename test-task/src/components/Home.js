import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Home.css"

function Home() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProduct = async () => {
        // const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        setLoading(true);
        await axios.get(`https://reqres.in/api/users/`).then((response) => {
            const allProducts = response.data
            setProduct(allProducts);
            setLoading(false);
        }).catch(error => console.error(`Error: ${error}`));
        console.log(product.data);
    }

    useEffect(() => {
        getProduct();
    }, []);

    function ShowUsers() {
        if (product.data)
            return (
                <div className="container">
                    {product.data.map((user) => (
                        <div className="user_card">
                            <div>
                                <h4>Name: {user.first_name}</h4>
                                <p> <b>Email Address:</b> {user.email}</p>
                                <button className="user_card_button">More info</button>
                            </div>
                            <div >
                                <img className="user_card_image" src={user.avatar} />
                            </div>
                        </div>
                    ))}

                </div>
            )
    }
    return (
        <div>

            <h2>This is Home Page</h2>
            {loading ? <h2> Loading ...</h2> : <ShowUsers />}
        </div>
    )

} export default Home;