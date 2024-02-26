import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Listcustomer()
{
    const [customers, setCustomer] = useState([]);

    useEffect(() =>
    {
        getCustomers();
    }, []);

    const getCustomers = async () =>
    {
        const response = await axios.get('http://localhost:8080/customers');
        setCustomer(response.data);
    }

    const deleteCustomer = async (id) =>
    {
        await axios.delete(`http://localhost:8080/customers/${id}`);
        getCustomers();
    }

    return (
        <div>
            <Link to="/add" className='button is-primary mt-2'>Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Adresse</th>
                        <th>Codepostal</th>
                        <th>Ville</th>
                    </tr>
                </thead>
                <tbody>
                    { customers.map((customer, index) => (
                        <tr key={ customer.id }>
                            <td>{ customer.username }</td>
                            <td>{ customer.password }</td>
                            <td>{ customer.role }</td>
                            <td>{ customer.email }</td>
                            <td>{ customer.adresse }</td>
                            <td>{ customer.codepostal }</td>
                            <td>{ customer.ville }</td>
                            <td>
                                <Link to={`/edit/${customer.id}`} className='button is-small is-info'>Edit</Link>
                                <button onClick={ () => deleteCustomer(customer.id) } className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default Listcustomer;