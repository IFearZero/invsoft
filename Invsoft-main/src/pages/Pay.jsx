import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KEY =
    "pk_test_51LJU5rDsVP8T3E0eGNyX9ZT0tmmSUh6fZ4jY2Rw6fg7YhAv3NPQKz3KS9t6oav1QNUeDwtmasy45lXj3ILmxiICZ00GWlpyoA8"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    function onToken(token) {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
                navigate.push("/success");
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
        // eslint-disable-next-line
    }, [stripeToken]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {stripeToken ? (
                <span>Processing. Please wait...</span>
            ) : (
                <StripeCheckout
                    name="Lama Shop"
                    image="https://avatars.githubusercontent.com/u/66193765?v=4"
                    billingAddress
                    shippingAddress
                    description="Your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fondWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div >
    );
};

export default Pay;