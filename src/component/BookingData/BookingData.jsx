
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const BookingData = () => {
    const [data, setData] = useState([]); // Ensure it's an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://66b8-2401-4900-8847-ed68-4cfd-796a-76f2-8a72.ngrok-free.app/api/form-data');
            console.log('API Response:', response.data); // Log API response
            setData(response.data); // Adjust if response is wrapped
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to load data!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="data-table">
            <h2>Ramayan Booking</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>CreatedDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id}>
                                    {/* <td>{item.{translations.BookingData.Name}}</td>
                                    <td>{item.{translations.BookingData.Mobile}}</td>
                                    <td>{item.{translations.BookingData.Email}}</td>
                                    <td>{item.{translations.BookingData.Address}}</td>
                                    <td>{new Date(item.created_date).toLocaleString()}</td> */}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                {/* <td colSpan="5" style={{textAlign:'center'}} class{translations.BookingData.Name}="no-data">{translations.BookingData.No_data_found}</td> */}
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BookingData;

