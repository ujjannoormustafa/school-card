"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import Axios
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://stschool-card.vercel.app/api/students');  // Use the full URL for axios.get
                console.log(response.data);  // Log the response to check the structure
                setItems(response.data.result);  // Set items to the correct part of the response
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p style={{ textAlign: "center", fontSize: "20px" }}>Loading...</p>;
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", fontSize: "50px" }}>Our latest Products</h1>
            <div className="product-box">
                {items.length === 0 ? (
                    <p style={{ textAlign: "center", fontSize: "20px" }}>No products available</p>
                ) : (
                    items.map((item, index) => (
                        <div key={index} data-aos="fade-up" className="card">
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <div className="row">
                                    <div className="card-title">
                                        <h3>{item.title}</h3>
                                        <h4>Price: <span style={{ color: "orange" }}>{item.price}</span></h4>
                                        <h4>Rating: <span style={{ color: "orange" }}>4.5/5 ⭐</span></h4>
                                    </div>
                                </div>
                                <div className="btn-group" style={{ display: "flex", marginTop: "25px", justifyContent: "center" }}>
                                    <Link to={`/product/${item.title}`} style={{ textDecoration: "none" }}>
                                        <button className="secondary-button">Order Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Products;
