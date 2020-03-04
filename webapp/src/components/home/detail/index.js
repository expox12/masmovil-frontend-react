import React from 'react';
import { useParams } from "react-router";

const Detail = props => {
    let { id } = useParams();
    console.log(`Detalle ID: ${id}`);
    const {  } = props;

    return (
        <div>Detalle con ID: {id}</div>
    )

}

export default Detail;