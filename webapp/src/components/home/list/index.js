 
import React from 'react';
import { Link } from 'react-router-dom';

const PhoneTable = ({ phoneList }) => {

    function renderData() {
        return phoneList.map( (phone, index) => (
            <tr key={index}>
                <td>{phone.id}</td>
                <td>{phone.title}</td>
                <td>{phone.description}</td>
                <td>{phone.launchDate}</td>
                <td>{phone.price}</td>
                <td><Link to={{
                    pathname: `/phones/${phone.id}`,
                    phoneProp: phone
                }}><button type="button" className="btn btn-info">Detalle</button></Link></td>
            </tr>
        ))
    }

    return (
        <div>
        <table className="table">
            <caption>List of phones</caption>
            <thead className="thead-light">
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Fecha de lanzamiento</th>
                    <th>Precio</th>
                    <th>Detalle</th>
                </tr>
            </thead>
            <tbody>
                { renderData() }
            </tbody>
        </table>
        
        </div>
    )
};

export default PhoneTable;